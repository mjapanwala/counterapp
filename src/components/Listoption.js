import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faPlus,
  faMinus,
  faTrash,
  faRecycle,
  faSync
} from "@fortawesome/free-solid-svg-icons";

function Listoption({handleDecrementor,handleDelete,handleIncrementor,handleRefresh,handleReload,lists}) {
 
  

  return (
    <>
      <div className="w-1/2">
        <div>
        <div className="position-relative w-1/2 h-3/4">
      <button onClick={() => {handleRefresh()}} className= "p-4 bg-green-100"><FontAwesomeIcon icon={faRecycle}/></button>
      <button disabled={lists.length == 0? false: true} onClick={() => {handleReload()}} className={lists.length == 0?"p-4 bg-red-300":"p-4 bg-red-600"} ><FontAwesomeIcon icon={faSync}/></button>
    </div>
          {lists.map((item ,index) => (
            <div className="block m-2" key={index}>
              <ul className="inline">
                <h2 className={item.quantity > 0? "bg-blue-200 p-4 inline-block font-bold text-xl": "bg-yellow-200 p-4 inline-block font-bold text-xl"  }>{item.quantity > 0? item.quantity : 'Zero'}</h2>
                <button onClick={(e)=>{handleIncrementor(item,index)}} className="bg-green-200 p-4 mx-2"><FontAwesomeIcon icon={faPlus} /></button>
                <button onClick={(e)=>{handleDecrementor(item,index)}} className="bg-blue-200 p-4 mx-2"><FontAwesomeIcon icon={faMinus} /> </button>
                <button onClick={(e) => {handleDelete(index)}} className="bg-red-200 p-4 mx-2"><FontAwesomeIcon icon={faTrash} /> </button>
              
              </ul>
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
}

export default Listoption;
