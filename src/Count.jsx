import React, { useState } from 'react'

const Count = ({count, setCount}) => {
    // let count=0
    const [data, setData]= useState('')
    const [ob1,setOb1]=useState({name:'',age:''})

    function handle() {
        setCount((a)=>a+1)
        setCount((a)=>a+3)
        setCount((a)=>a+6)
        console.log(count);
        setOb1({...ob1,age:34})
        setData('tajamul')
    }

  return (
    <>
    <div>Count: {count}</div>
    <div className="">{data}{ob1.name+ ob1.age}</div>
    <button onClick={handle}>Increase</button>
    </>
)
}

export default Count