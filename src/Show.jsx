import React, { useState } from 'react'

const Show = ({data,setData}) => {
    
    return (
        <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
                <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Sno</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Email</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Password</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ?
                    data.map((a,k) => {
                        return (
                            <tr>
                                <td className="px-4 py-3">{k+1}</td>
                                <td className="px-4 py-3">{a.email}</td>
                                <td className="px-4 py-3 text-lg text-gray-900">{a.password}</td>
                                <td className="px-4 py-3 text-lg text-gray-900"><button onClick={()=>setData(data.filter(b=>b.email!=a.email))}>delete</button></td>
                            </tr>
                        )
                    })
                    : "No items to show"}

            </tbody>
        </table >
    )
}

export default Show