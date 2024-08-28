import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Contact from './routes/Contact'
import About from './routes/About'
import Projects from './routes/Projects'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projects' element={<Projects></Projects>} />
        <Route path='/contact' element={<Contact></Contact>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/experience' element={<About></About>} />
        <Route path='/skills' element={<About></About>} />
      </Routes>
    </>
  )
}

export default App
