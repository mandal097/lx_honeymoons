import React from 'react'
import Home from './pages/Home'
import Planning from './pages/Planning'
import { Routes, Route } from 'react-router-dom'
import Inspiration from './pages/Inspiration'
import AboutUs from './pages/AboutUs'
  
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='/planning' element={<Planning />} />
          <Route path='/inspiration' element={<Inspiration />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
