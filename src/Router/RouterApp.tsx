import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'

const RouterApp = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={ <Home/> } />
    </Routes>
    </BrowserRouter>
  )
}

export default RouterApp
