
import { Fragment, useState } from 'react'
import './App.css'
import Input from './components/Input'
import Youtube from './components/Youtube'
import Practice from './components/Practice'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  const [side, setSide] = useState(false)

  console.log(side)

  return (
    <div className="bg-youtube min-h-screen">
<Navbar side={side} setSide={setSide}/>

    <Sidebar side={side} setSide={setSide}/>

      {/* <Input/>*/} 

     <Youtube/>

    {/*
      <Practice/>
      */}

  
    </div>
  )
}

export default App
