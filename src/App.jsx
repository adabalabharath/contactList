import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'

import { Link } from 'react-router-dom'
import { contactContext } from './components/ContactProvider'
import Count from './components/Count'
import Add from './components/Add'

function App() {

  const {change,setChange,add,setAdd,update}=useContext(contactContext)

  const addRend=()=>{
    setChange(true)
    setAdd(false)
  }

  const homeRend=()=>{
    setChange(false)
    setAdd(true)
  }
 return(<>
 <h1>Contact List</h1>
 <button onClick={addRend} disabled={!add}>Add</button>
 <button onClick={homeRend}disabled={add}>Back</button>
 
  {!change ? <Home/>:<Add/>}
  <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
 <Count/>
 </div>
 </>)
}

export default App
