import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
function Navbar({lists}) {
let totalQuantity = lists.filter((item) => {
  return item.quantity > 0
})
  return (
    <>
      <nav className="block">
        <div className="block text-left p-4">
          <FontAwesomeIcon icon={faShoppingCart} />
          <button className="inline-block px-4 py-2 m-2 bg-green-200 text-2xl">{totalQuantity.length}</button>      
            <h1 className="inline-block">Items</h1>
            
        </div>
      </nav>
     
    </>
  );
}



export default Navbar;
