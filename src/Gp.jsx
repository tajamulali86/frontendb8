import React, { useContext } from 'react'
import Parent from './Parent'
import { TextContext } from './LoginContext'

const Gp = () => {
    let {setText} =useContext(TextContext)
    setText('tajamul')
  return (
    <div>Gp d
        <Parent/>
    </div>
  )
}

export default Gp