import React, { useEffect, useState } from 'react'
import './Video.css'
import PlayVideo from '../../components/Playvideo/PlayVideo'
import { API_KEY } from '../../data'
import Recommended from '../../components/Recommended/Recommended'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
function Video() {
  let {videoId,categoryId} = useParams()
  let [apidata,setApidata] = useState([])

  const fetchvideos = async()=>{
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
    await fetch(url).then(res => res.json()).then(data => setApidata(data.items))
  }

  useEffect(()=>{
   fetchvideos()
  },[])
  return (
   <>
    <Navbar/>
    <div className="container-fluid px-4">
    <div className="row">
    <div className="col-12 col-lg-8 col-md-8">
    <PlayVideo videoId={videoId}/>
    </div>
    <div className="col-12 col-lg-4 col-md-6 d-flex flex-column gap-2 ps-5" >
    {apidata?.map((item,index)=>{
      return(
       
        <Recommended key={index} item={item}/>
       
      )
    })}
     </div>
   
   </div>
   </div>
   </>
  )
}

export default Video
