import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Content from './components/content/Content'
import Education from './components/Education/Education'
import Project from './components/project/Project'
import Profile from './components/profile/Profile'
import Tech from './components/Tech/Tech'



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
      <Education/>
      <Project/>
      <Profile/>
      <Tech/>
    
    </div>
    </BrowserRouter>

   </div>
  )
}

export default App
