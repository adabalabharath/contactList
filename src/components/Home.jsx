import React, { useContext, useEffect, useState } from 'react'
import Count from './Count';
import { contactContext } from './ContactProvider';
import { Link } from 'react-router-dom';
import Add from './Add';

const Home = () => {

  const {contacts,setContacts,setAdd,setChange,setEdit,edit,change,setUpdate}=useContext(contactContext)
 
  

  const handleDelete=(id)=>{
    let deleteData= contacts.filter((x)=>x.id!==id)
    setContacts(deleteData)

  }

  const handleEdit=(id)=>{
     setChange(true)
     setAdd(false)
     let details=contacts.find(x=>x.id===id)
     setEdit(details)
     setUpdate(true)
  }
 
 
  return (
    <div>
      
      {<div style={{display:'flex'}}>
        {contacts.map((x)=>{
        return(<div key={x.id} style={{border:'1px solid black',margin:'10px',}}>
             <h3>{x.first_name+' '+x.last_name}</h3>
             <p>{x.phone_number}</p>
             <p>{x.gender}</p>
             <p>{x.business ? 'business':'personal'}</p>
             <button onClick={()=>handleEdit(x.id)}>edit</button>
             <button onClick={()=>handleDelete(x.id)}>delete</button>
        </div>)})}</div>}

    


<div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
 <Count/>
 </div>
      
      
    </div>
  )
}

export default Home