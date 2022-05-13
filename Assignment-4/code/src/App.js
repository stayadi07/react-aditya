import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import "./App.css"
import LandingPage from './Components/LandingPage'
import Postview from './Postview'

export default function App() {
  return (
    <div className='App-wrapper'>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path='/postview' element={<Postview/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
