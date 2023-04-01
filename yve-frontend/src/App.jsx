import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Explore from './components/Explore'

function App() {
  return(
    <>
      <Navbar />
      <Home />
      <Explore />
    </>
  )
}

export default App
