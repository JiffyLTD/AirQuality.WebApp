import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import NotFoundPage from '../pages/NotFoundPage'
import AboutPage from '../pages/AboutPage'
import MapPage from '../pages/MapPage'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/map' element={<MapPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/error' element={<NotFoundPage/>}/>
        <Route path="*" element={<Navigate replace to="/error"/>} />
    </Routes>
  )
}

export default Router