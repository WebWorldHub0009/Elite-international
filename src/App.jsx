import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import FloatingButtons from "./components/FloatingButtons"
import ScrollToTop from "./components/ScrollToTop"
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Service from './pages/Service'
import Video from './pages/Video'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import ServiceDetailPage from './pages/ServiceDetail'

const App = () => {
  return (
 <BrowserRouter>
 <ScrollToTop/>
 <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
    <Route path='/services' element={<Service/>}/>
    <Route path='/services/:route' element={<ServiceDetailPage/>}/>
   <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/video' element={<Video/>}/>
   <Route path='/contact' element={<Contact/>}/>
   <Route path='/privacy' element={<Privacy/>}/>
   <Route path='/terms&condition' element={<Terms/>}/>
 </Routes>
 <Footer/>
 <FloatingButtons/>
 </BrowserRouter>
  )
}

export default App