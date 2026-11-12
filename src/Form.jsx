import React, { useState } from 'react'

const Form = ({ formData, setForm, setData, data }) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    function handleSumbit(a) {
        a.preventDefault()
        console.log(name, age, formData);
        setData([...data,formData])
        setForm({email:'',password:''})
        // xyz
        // await fetch('xyz/user',{
        //     method:"POST",
        //     body:JSON.stringify(formData),
        //     headers:{}
        // })
    }
    return (
        <form onSubmit={(a) => handleSumbit(a)}>
            <div className="">
                Enter your Name

                <input
                    className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    onChange={(a) => setName(a.target.value)} type="text" name="name" id="" value={name} />
            </div>
            <div className="">
                Enter your age

                <input
                    className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    onChange={(a) => setAge(a.target.value)} type="text" name="age" id="" value={age} />
            </div>
            <div className="">
                Enter your EMail

                <input
                    className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    onChange={(a) => setForm({ ...formData, email: a.target.value })} type="email" name="email" id="" value={formData.email} />
            </div>
            <div className="">
                Enter your password

                <input
                    className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    onChange={(a) => setForm({ ...formData, password: a.target.value })} type="password" name="password" id="" value={formData.password} />
            </div>
            <button className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>Submit</button>
        </form>
    )
}

export default Form