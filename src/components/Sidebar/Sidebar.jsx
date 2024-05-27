import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
import { API_KEY } from '../../data'

function Sidebar({sidebar,setCategory,category}) {
 
  return (
    <>
            
            <div className={` ${sidebar? 'col-1  sidebar-top  gap-2 px-2 d-none':'col-2  sidebar gap-2 py-2'}  d-flex flex-column`}>
              <div className={`${category===0? 'active':''} sidebar-inner d-flex align-center gap-2 p-2 rounded-2 mx-auto mx-lg-0`} onClick={()=>setCategory(0)}>
                <img width='20px' height='20px' src="/assets/home.png" alt="home" />
                <p className='mb-0 fw-medium p-0 d-none d-lg-block'>Home</p>
              </div>

              <div className={`${category===20? 'active':''} sidebar-inner d-flex align-center gap-2 p-2  rounded-2 mx-auto mx-lg-0 `} onClick={()=>setCategory(20)}>
                <img width='20px' height='20px' src="/assets/game_icon.png" alt="home" />
                <p className='mb-0 fw-medium d-none d-lg-block'>Gaming</p>
              </div>

              <div className={`${category===2? 'active':''} sidebar-inner d-flex align-center gap-2 p-2 rounded-2 mx-auto mx-lg-0`} onClick={()=>setCategory(2)}>
                <img width='20px' height='20px' src="/assets/automobiles.png" alt="home" />
                <p className='mb-0 fw-medium d-none d-lg-block'>Automobile</p> 
              </div>
              

              <div className={`${category===17? 'active':''} sidebar-inner d-flex align-center gap-2 p-2 rounded-2 mx-auto mx-lg-0`} onClick={()=>setCategory(17)}>
                <img width='20px' height='20px' src="/assets/sports.png" alt="home" />
                <p className='mb-0 fw-medium d-none d-lg-block'>Sports</p>
              </div>

              <div className={`${category===24? 'active':''} sidebar-inner d-flex align-center gap-2 p-2 rounded-2 mx-auto mx-lg-0`} onClick={()=>setCategory(24)}>
                <img width='20px' height='20px' src="/assets/entertainment.png" alt="home" />
                <p className='mb-0 fw-medium d-none d-lg-block'>Entertainment</p>
              </div>

              <div className={`${category===28? 'active':''} sidebar-inner d-flex align-center gap-2 p-2 rounded-2 mx-auto mx-lg-0`} onClick={()=>setCategory(28)}>
                <img width='20px' height='20px' src="/assets/tech.png" alt="home" />
                <p className='mb-0 fw-medium d-none d-lg-block'>Technology</p>
              </div>

              <div className={`${category===10? 'active':''} sidebar-inner d-flex align-center gap-2 p-2 rounded-2 mx-auto mx-lg-0`} onClick={()=>setCategory(10)}>
                <img width='20px' height='20px' src="/assets/music.png" alt="home" />
                <p className='mb-0 fw-medium d-none d-lg-block'>Music</p>
              </div>

              <div className={`${category===22? 'active':''} sidebar-inner d-flex align-center gap-2 p-2 rounded-2 mx-auto mx-lg-0`} onClick={()=>setCategory(22)}>
                <img width='20px' height='20px' src="/assets/blogs.png" alt="home" />
                <p className='mb-0 fw-medium d-none d-lg-block'>Blogs</p>
              </div>


              <div className={`${category===25? 'active':''} sidebar-inner d-flex align-center gap-2 p-2 rounded-2 mx-auto mx-lg-0`} onClick={()=>setCategory(25)}>
                <img width='20px' height='20px' src="/assets/news.png" alt="home" />
                <p className='mb-0 fw-medium d-none d-lg-block'>News</p>
              </div>

              <hr />
               <p  className=' mx-1 px-2  d-md-block d-lg-block w-100 my-3 mx-2' >Subscribed</p>

               <div className="sidebar-inner d-flex align-center  gap-2 p-2 rounded-2 mx-auto mx-lg-0">
                <img width='20px' height='20px' src="/assets/jack.png" alt="home" />
                <p className='mb-0 fw-medium d-none d-lg-block'>PewDiePie</p>
              </div>
              <div className="sidebar-inner d-flex align-center  gap-2 p-2 rounded-2 mx-auto mx-lg-0">
                <img width='20px' height='20px' src="/assets/simon.png" alt="home" />
                <p className='mb-0 fw-medium d-none d-lg-block'>MrBeast</p>
              </div>
              <div className="sidebar-inner d-flex align-center  gap-2 p-2 rounded-2 mx-auto mx-lg-0">
                <img width='20px' height='20px' src="/assets/tom.png" alt="home" />
                <p className='mb-0 fw-medium d-none d-lg-block'>Justin Bieber</p>
              </div>

              <div className="sidebar-inner d-flex align-center  gap-2 p-2 rounded-2 mx-auto mx-lg-0">
                <img width='20px' height='20px' src="/assets/megan.png" alt="home" />
                <p className='mb-0 fw-medium d-none d-lg-block'>5-minutes Craft</p>
              </div>

              <div className="sidebar-inner d-flex align-center  gap-2 p-2 rounded-2 mx-auto mx-lg-0">
                <img width='20px' height='20px' src="/assets/cameron.png" alt="home" />
                <p className='mb-0 fw-medium d-none d-lg-block '>PewDiePie</p>
              </div>
            </div>
  
    </>
  )
}

export default Sidebar
