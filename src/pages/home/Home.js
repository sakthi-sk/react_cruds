import { Link } from "react-router-dom"

import './Home.css'

const Home = ({prodectList,SetProdectList,price,setPrice,oldPrice,setOldPrice,data,setData}) => {
   
  

    const Add=(value)=>{
          
        let  number=data.length+1
       let id=number.toString()
        let item=[...data,
            
            {id,
            prodect:prodectList,
             price:price,
            oldPrice:oldPrice 
        
        }]

        setData(item)
        SetProdectList('')
        setPrice('')
        setOldPrice('')
    }

       const remove=(id)=>{
       const list =  data.filter((item)=>(
            item.id!==id
         ))
           
         setData(list)
       }
         
   
   
  return (
    <div className='home'>
      <div className="from">
         <input type='text' className="Input" placeholder='prodect Name' value={prodectList} onChange={(e)=>(SetProdectList(e.target.value))}></input>
         <input type='number' className="Input" placeholder='Prodect price' value={price} onChange={(e)=>(setPrice(e.target.value))}></input>
         <input type='number'  className="Input"placeholder='old price' value={oldPrice} onChange={(e)=>(setOldPrice(e.target.value))}></input>
         <button onClick={()=>Add(prodectList)}>Add</button>
    </div> 

          <table className="table-home"  >
                <tr className="table-head-tr">
                    <th className="table-th">prodectName</th>
                    <th className="table-th">price</th>
                    <th className="table-th">oldPrice</th>
                     <th className="table-th">Action</th>
             </tr>
          
            {
            data.map((item)=>(
               
                
                <tr key={item.id}>
                    <td className="table-td">{item.prodect}</td>
                     <td className="table-td">{item.price}</td>
                      <td className='table-td'>{item.oldPrice}</td>
                      <td className='table-td'>
                         <button onClick={()=>remove(item.id)}>Delete</button>
                        <Link to={`/edit/:${item.id}`}><button>Edit</button></Link>
                      </td>
                    
                </tr>
               
              
            ))
         }
          
          </table>

     </div>
  )
}

export default Home
