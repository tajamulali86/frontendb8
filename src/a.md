how to use Context

first create a context file usually js
example: aContext.js

in this create the context 
    import  { createContext } from 'react'
    export const TextContext=createContext(null)

In you top file APP.jsx, Wrap everythibg inside this context provider
<TextContext >
</>    
 pass the context variables thoruhg value {{}}
<TextContext value={{a}} >

now this  a is accessible in side all child components
if udate reqquired,

const [a,setA]= useState()
pass boht of this into context
<TextContext value={{a,setA}} >

Using the context;

in any child component, get the values by using useContext from react and passing the created context 
 const {a,setA} =useContext(TextContext)

use this value anyhwere