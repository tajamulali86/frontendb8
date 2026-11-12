import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const SingleService = () => {
      let params = useParams();
      const [data,setData]=useState({})
useEffect(()=>{
    fetchdata(params.title)
},[])
async function fetchdata(id) {
    const res=await fetch(`https://dummyjson.com/products/${id}`)
    const data= await res.json()
    setData(data)
}
  return (<>
   {data.title ? 
   <><div>SingleService: {data.title}</div>
   <h1 className='text-4xl text-red-500'>{data.description}</h1>
   <img src={data.images[0]} alt="" />
   </>
   :" waitingg.."} 
</> 
)

}

export default SingleService