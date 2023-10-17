
import './App.css';
import Edit from './pages/edit/Edit';
 import Home from './pages/home/Home';
import React, { useState } from 'react'
  import{Routes,Route} from "react-router-dom"
function App() {

    const [prodectList,SetProdectList]=useState('')
    const [price,setPrice]=useState('')
    const [oldPrice,setOldPrice]=useState('')
    const [data,setData]=useState([])
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={ <Home
      prodectList={prodectList}
      SetProdectList={SetProdectList} 
      price={price}
      setPrice={setPrice}
      oldPrice={oldPrice}
      setOldPrice={setOldPrice}
      data={data}
      setData={setData}

      />}/>
      <Route path='/edit/:id' element={<Edit
        data={data}
      setData={setData}
      />}/>
    </Routes>
       
    </div>
  );
}

export default App;
