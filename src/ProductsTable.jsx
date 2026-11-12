import React from 'react'
import { Link } from 'react-router'

const ProductsTable = ({data}) => {
    // console.log(data);
    
  return (

    <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
                <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Id</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Title</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Desc</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ?
                    data.map(a => {
                        return (
                            <tr>
                                <td className="px-4 py-3">{a.id}</td>
                                <td className="px-4 py-3"><Link to={`/services/${a.id}`}> {a.title}</Link></td>
                                <td className="px-4 py-3 text-lg text-gray-900">{a.description.slice(0,15)}</td>
                                <td className="px-4 py-3 text-lg text-gray-900">{a.price}</td>
                                {/* <td className="px-4 py-3 text-lg text-gray-900"><button onClick={()=>setData(data.filter(b=>b.email!=a.email))}>delete</button></td> */}
                            </tr>
                        )
                    })
                    : "No items to show"}

            </tbody>
        </table >
  )
}

export default ProductsTable