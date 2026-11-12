import React, { useEffect, useState } from 'react'
import ProductsTable from './ProductsTable'

const Fetching = () => {
    const [count,setCount] =useState(0)
    const [data, setData] = useState([])
    useEffect(()=>{
        fetchData()
    },[count])
    // useEffect(()=>{

    // },[])
    async function fetchData() {
        const json = await fetch('https://dummyjson.com/products')
        const res = await json.json()
        setData(res.products)
        console.log(res.products);
        
    }
    return (
        
           data.length > 0 ?
              <> <button onClick={()=>setCount(a=>a+1)}>count {count} Increase</button> <ProductsTable data={data} /></> :
<> 
{/* <button onClick={fetchData}>Fetch...</button> */}
               <div>Fetching ... Products</div></> 

        
    )
}

export default Fetching