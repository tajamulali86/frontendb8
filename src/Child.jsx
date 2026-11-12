import React, { useContext } from 'react'
import { TextContext } from './LoginContext'

export const Child = () => {
const {text}=useContext(TextContext)
    return (
    <div className='bg-blue-500'>Child: {text}</div>
  )
}
