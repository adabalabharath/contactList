import React, { useContext, useEffect, useState } from 'react'
import { contactContext } from './ContactProvider'
import { Link } from 'react-router-dom'

const Add = () => {
  
  const [form,setForm]=useState(
      {id:'', first_name: '', last_name: '', phone_number: '',  gender: '', business: false }
  )
 
 const {contacts,setContacts,edit,setEdit,update,setUpdate}=useContext(contactContext)
 
 
useEffect(()=>{
  
  if (edit && Object.keys(edit).length > 0) {
      setForm(edit)
      setEdit({})
     
    }
},[])
 const handleChange=(e)=>{
    const {name,value}=e.target 
    form.id=contacts.length+1

    setForm((prev)=>({...prev,[name]:value,}))
 }

const handleSubmit=(e)=>{
  e.preventDefault();
  
   if (edit && Object.keys(edit).length > 0) {
      const updatedContacts = contacts.map(contact =>
        contact.id === form.id ? form : contact
      )
      setContacts(updatedContacts)
      
      
    } 
 else{

  setContacts((prev)=>[...prev,form])
 }

  

}

  return (
    <div>
        
        <form style={{display:'flex',flexDirection:'column',gap:'20px',border:'1px solid black',padding:'20px',margin:'20px'}} onSubmit={handleSubmit}>
            <input type='text' placeholder='first name' onChange={handleChange} name='first_name' value={form.first_name}/>
             <input type='text' placeholder='last name' name='last_name' onChange={handleChange} value={form.last_name}/>
            <input type='text' placeholder='enter number' name='phone_number' onChange={handleChange} value={form.phone_number}/>
            <div>
            <input type='radio' name='business' onChange={handleChange} value='true'/>
            <label>Business</label>
            </div>
            <div onChange={handleChange}>
            <input type='radio' name='gender' value='Male'/>
            <label>male</label>
            <input type='radio' name='gender'value='Female'/>
            <label>female</label>

            </div>
            {<button >Add</button> }
        </form>
    </div>
  )
}

export default Add