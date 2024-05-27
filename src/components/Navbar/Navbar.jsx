
import React, { useState } from 'react'
import './Navbar.css'


function Navbar({setSidebar,handlechange}) {



  return (
   <>
   <div className="container-fluid bg-white p-4 ">
    <div className="row align-items-center">
        <div className="col-lg-3 col-md-6 col-12 justify-content-center">
            <div className="d-flex nav gap-2">
            <img onClick={()=> setSidebar(prev => !prev)} src="/assets/menu.png" alt="menu" />
            <img className='w-25' src="/assets/logo.png" alt="menu" />
            </div>
          
        </div>
        <div className="col-lg-6 col-md-6 col-12 mt-5 mt-md-0" >
           <div className='d-flex  nav align-items-center'>
            <input className=' ps-3'  type="text" placeholder='search' onChange={(e)=> handlechange(e)}/>
            <div className='icon-main'><img className='search-icon' src="/assets/search.png" alt="search" /></div>
            
           </div>
        </div>
        <div className="col-lg-3 col-12 mt-5 mt-lg-0">
          <div className="d-flex nav gap-2 justify-content-lg-end">
            <img src="/assets/upload.png" alt="upload" />
            <img src="/assets/more.png" alt="more" />
            <img src="/assets/notification.png" alt="notification" />
            <img className='rounded-5' src="/assets/jack.png" alt="notification" />
          </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Navbar
