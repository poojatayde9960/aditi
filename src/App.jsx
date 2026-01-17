import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aditi from './pages/Aditi'

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Aditi />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App
