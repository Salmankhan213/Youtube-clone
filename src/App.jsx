import React, { useState } from 'react'
import Home from './Pages/Home/Home'
import Video from "./Pages/Video/Video"
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css';

function App() {



 
  return (
    <>

  
    <Router>
      <Routes>
        <Route  path='/' element={ <Home/>}/>
        <Route path='/video/:categoryId/:videoId' element={ <Video/>}/>
      </Routes>
    </Router>
    
    </>

  )
}

export default App
