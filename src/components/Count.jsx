import React, { useContext, useEffect, useState } from "react";
import { contactContext } from "./ContactProvider";

const Count = () => {
 
  const {contacts, setContacts,menCount, setMenCount,womenCount, setWomenCount,business, setBusiness,personal, setPersonal}=useContext(contactContext)


  const details = () => {
    const men = contacts.filter((contact) => contact.gender === "Male").length;
    const women = contacts.filter((contact) => contact.gender === "Female").length;
    const business = contacts.filter((contact) => contact.business === true).length;
    const personal = contacts.filter((contact) => contact.business === false).length;
    
    setBusiness(business);
    setMenCount(men);
    setWomenCount(women);
    setPersonal(personal);
  };

  useEffect(() => {
    details();
  }, [contacts]);



  return (<div style={{width:'300px'}}>
     <div style={{border:'1px solid black'}}>
       <h2>Total:{contacts.length }</h2>
        <h3>Male contacts :{menCount}</h3>
        <h3>FeMale contacts :{womenCount}</h3>
        <h3>Business contacts :{business}</h3>
        <h3>Personal Contacts:{personal}</h3>
      </div>
  </div>)
};

export default Count;
