import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = ({data,setData}) => {

   const [editdata,seteditData]=useState([])
    const [editProdectList,SetEditProdectList]=useState('')
    const [editPrice,setEditPrice]=useState('')
    const [editOldPrice,setEitOldPrice]=useState('')
    
    const {id}=useParams()
        
     const nave=useNavigate()

      const list=data.find((item)=>(
       item.id==id.charAt(1)
      ))

         
      console.log(list,'edit');

    useEffect(()=>{
         SetEditProdectList(list.prodect)
        setEditPrice(list.price)
        setEitOldPrice(list.oldPrice)

    },[])

    const editbut=(s)=>{

        
            
           list.prodect=editProdectList
            list.price=editPrice
           list.oldPrice=editOldPrice
        
       
     
        nave('/')
    }
  return (
    <div className='edit'>
       <input type='text' className="Input" placeholder='prodect Name' value={editProdectList} onChange={(e)=>(SetEditProdectList(e.target.value))}></input>
         <input type='number' className="Input" placeholder='Prodect price' value={editPrice} onChange={(e)=>(setEditPrice(e.target.value))}></input>
         <input type='number' className="Input" placeholder='old price' value={editOldPrice} onChange={(e)=>(setEitOldPrice(e.target.value))}></input>
         <button onClick={()=>editbut()} >Edit</button>
    </div>
  )
}

export default Edit
