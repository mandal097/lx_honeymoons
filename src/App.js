import React from 'react'
import Home from './pages/Home'
import Planning from './pages/Planning'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='/planning' element={<Planning />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
