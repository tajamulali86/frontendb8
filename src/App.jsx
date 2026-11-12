
import { createContext, useContext, useRef, useState } from 'react'
import Card from './Card'
import Count from './Count'
import Header from './Header'
import Heading from './Heading'
import WhatSection from './WhatSection'
import Form from './Form'
import Show from './Show'
import Fetching from './Fetching'
import Signin from './Signin'
import { LogingContext, TextContext } from './LoginContext'
import Gp from './Gp'

function App() {
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  const [formData, setForm] = useState({
    email: '',
    password: ''
  })
  const [data, setData] = useState([])
  // const {loggedIn,setLoggedIn} =useContext(LoginContext)
  const [loggedIn, setLoggedIn] = useState(false)
  const [text, setText] = useState('')

  let institute = 'Sdhub Mehdipatnam'
  return (
    <>
      <LogingContext value={{ loggedIn, setLoggedIn }}>
        <TextContext value={{ text,setText }}>
          <Gp />
          <Header />
          <Signin />
          <h1 ref={ref}>Hello</h1>
          <button onClick={() => ref.current.textContent = 'Bye'}>click Me</button>
          <Form formData={formData} setForm={setForm} setData={setData} data={data} />
          <Show data={data} setData={setData} />
          <Fetching />
          <Count count={count} setCount={setCount} />
          <Count count={count} setCount={setCount} />
          <Count count={count} setCount={setCount} />
          <Count count={count} setCount={setCount} />
          <Card title={'Hello world'} desc={'as df safd sadf asd fasd fasfd afdd f'} imgsrc={'https://dummyimage.com/720x400'} />
          <Card isRight={true} title={'Hello world'} desc={'as df safd sadf asd fasd fasfd afdd f'} imgsrc={'https://dummyimage.com/720x400'} />
          <WhatSection />
          <Header islogged={true} />
          <Heading />
        </TextContext>
      </LogingContext>
    </>
  )
}

export default App
