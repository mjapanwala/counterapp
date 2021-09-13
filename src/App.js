import logo from './logo.svg';
import React, { useEffect, useState } from "react"
import './App.css';
import Navbar from './components/Navbar'
import Listoption  from './components/Listoption';
function App() {
 
  const [lists, setLists] = useState([
    {
      quantity: 0,
      plusone: "Plus",
      minusone: "Minus",
      delete: "Delete",
    },
    {
      quantity: 0,
      plusone: "Plus",
      minusone: "Minus",
      delete: "Delete",
    },
    {
      quantity: 0,
      plusone: "Plus",
      minusone: "Minus",
      delete: "Delete",
    },
    {
      quantity: 0,
      plusone: "Plus",
      minusone: "Minus",
      delete: "Delete",
    },
  ]);
  
  const handleIncrementor = (item, index) => {
   const entireList = [...lists];
   entireList[index] = {...entireList[index], quantity: item.quantity + 1}
   setLists(entireList)

  };
  const handleDecrementor = (item, index) => {
    if (item.quantity > 0) {
    const entireList = [...lists];
    entireList[index] = {...entireList[index], quantity: item.quantity -1 }
    setLists(entireList)
    }
  }

  const handleDelete = (index) => {
    setLists(lists.filter((items, indexs) => {
      return index != indexs
    }))
    }

  const handleRefresh = () => {
   const counters = lists.map((item) => {
     item.quantity = 0;
     return item
   })
   setLists(counters)
  }
  const handleReload = () => {
      window.location.reload()
  }

  return (

    <div className="App">
    <Navbar lists={lists}/>
    <Listoption lists={lists} setLists={setLists} handleIncrementor={handleIncrementor} handleDecrementor={handleDecrementor} handleDelete={handleDelete} handleRefresh={handleRefresh} handleDelete={handleDelete} handleReload={handleReload}/>
    </div>
  );
}

export default App;
