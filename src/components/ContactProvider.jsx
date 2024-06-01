import React, { createContext, useState } from 'react'


export const contactContext=createContext()

const ContactProvider = ({children}) => {

     const [contacts, setContacts] = useState([
    { id: 1, first_name: 'John', last_name: 'Doe', phone_number: '9876543212',  gender: 'Male', business: true },
    { id: 2, first_name: 'Jane', last_name: 'Smith', phone_number: '9876543210',  gender: 'Female', business: false },
    { id: 3, first_name: 'Jake', last_name: 'Doe', phone_number: '9876543212',  gender: 'Male', business: true },
    { id: 4, first_name: 'Dane', last_name: 'Smith', phone_number: '9876543210',  gender: 'Female', business: false },
  ]);

   const [menCount, setMenCount] = useState(0);
  const [womenCount, setWomenCount] = useState(0);
  const [business, setBusiness] = useState(0);
  const [personal, setPersonal] = useState(0);
  const [change,setChange]=useState(false)
  const [add,setAdd]=useState(true)
  const [edit,setEdit]=useState({})
  const [update,setUpdate]=useState(false)

  return (
    <contactContext.Provider value={{contacts, setContacts,menCount, setMenCount,womenCount, setWomenCount,business, setBusiness,personal, setPersonal,change,setChange,add,setAdd,edit,setEdit,update,setUpdate}}>{children}</contactContext.Provider>
  )
}

export default ContactProvider