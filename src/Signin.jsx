import React, { useContext, useState } from 'react'
import  { LogingContext } from './LoginContext'

const Signin = () => {
    // const [sing,setSing]=useState(false)
    const {loggedIn,setLoggedIn} = useContext(LogingContext)
  return (
   <button className='bg-red-500 text-white' onClick={()=>setLoggedIn((a)=>!a)}>{loggedIn?"Out" :"In"}</button>
  )
}

export default Signin