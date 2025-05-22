
import { Fragment } from 'react'
import './App.css'
import Input from './components/Input'
import Youtube from './components/Youtube'
import Practice from './components/Practice'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="bg-[#0f0f0f] min-h-screen">
<Navbar/>

      {/* <Input/>*/} 

     <Youtube/>

    {/*
      <Practice/>
      */}

  
    </div>
  )
}

export default App
