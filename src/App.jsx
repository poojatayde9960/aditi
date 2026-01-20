import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aditi from './pages/Aditi'
import AditiLanding from './pages/AditiLanding'

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AditiLanding />} />
        {/* <Route path='/' element={<Aditi />} /> */}
        {/* <Route path='/' element={<AditiLanding />} /> */}
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App
