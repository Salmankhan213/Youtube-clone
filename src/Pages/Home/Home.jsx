import React, { useState ,useEffect} from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import Navbar from '../../components/Navbar/Navbar'
import { API_KEY } from '../../data'

function Home({handlechannel}) {
  const [sidebar,setSidebar] = useState(false)
  const [category , setCategory] = useState(0)
  const [inputdata,setInputdata] = useState('')
  const [data,setData] = useState([])
  const [searchfilter,setSearchfilter] = useState([])

  useEffect(()=>{
  const fetchdata = async ()=>{
   const videosList = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=500&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`).then(response => response.json()).then((data)=>{
   setData(data.items), setSearchfilter(data.items)})
    }

  fetchdata()
  },[category])

 
  const handlechange =(e)=>{
    setInputdata(e.target.value)
      const filter = data.filter(item => item.snippet.title.toLocaleLowerCase().includes(inputdata.toLocaleLowerCase()))
      setSearchfilter(filter)
   }
  return (
   <>
  <Navbar setSidebar={setSidebar} handlechange={handlechange} />
  <div className="container-fluid">
  <div className="row">
  <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} handlechannel={handlechannel}/>
  <div className={`${sidebar? 'col-11  ':'col-10 '} ps-5`}>
  <div className="row">
   <Feed data={searchfilter}/>
  
    </div>
    </div>
  
   
   </div>
  </div>
   </>
  )
}

export default Home
