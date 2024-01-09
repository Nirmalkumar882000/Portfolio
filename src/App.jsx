import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Content from "./components/Content"
import Education from './components/Education'




function App() {
  return (
   <div >
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-center bg-no-repeat bg-cover bg-hero-pattern'>
        <Navbar/>
        <Hero/>
      </div>
      <Content/>
      {/* <Education/> */}

    </div>
    </BrowserRouter>

   </div>
  )
}

export default App
