import { useContext } from "react"
import { TextContext } from "./LoginContext"
import { countStore } from "../CountStore"

function MyComponent({number,title,desc}) {
   const {text}= useContext(TextContext)
   const {count,updateByInput,decrement}= countStore()
    return(
        <div className="flex flex-col gap-5">
        <span className={`font-bold ${number==3 ? ' text-green-500':'text-blue-500'}`}>{number}</span>
        <h2 className="font-bold text-lead text-2xl">{title}</h2>
        <p className="text-gray-500">{desc}</p>
        <p className="text-gray-500">{count}</p>
        <h2 className="bg-red-500">{text}</h2>
        <button onClick={()=>updateByInput(1000)} className="bg-red-500">Update the count to 1000</button>
        <button onClick={()=>decrement()} className="bg-green-500">Decrease</button>
        </div>
    )

}

export default MyComponent