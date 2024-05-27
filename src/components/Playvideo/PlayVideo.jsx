import React, { useEffect, useState } from "react";
import {API_KEY, value_converter} from '../../data'
import moment, { isMoment } from 'moment/moment'
import "./PlayVideo.css";

function PlayVideo({videoId}) {

  const [apidata,setApidata] = useState(null)
  const [channelvideo,setChannelvideo] = useState(null)
  const [comments,setComments] = useState([])

  const fetchvideos = async()=>{
    const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
     await fetch(video_url).then(res => res.json()).then(data=>setApidata(data.items[0]))
   
  }
   const fetchchannel = async()=>{
    const channel_url =  `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata?.snippet.channelId}&key=${API_KEY}`
   await fetch(channel_url).then(res => res.json()).then(data => setChannelvideo(data.items[0]))
   

   const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=10&videoId=${videoId}&key=${API_KEY}`
   await fetch(comment_url).then(res => res.json()).then(data => setComments(data.items))
  
  }
  useEffect(()=>{ 
    fetchvideos()
    
  },[])
  useEffect(()=>{
    fetchchannel()
  },[apidata])

  return (

    <>
          <div className="play-video">
          
            <iframe className="w-100 " height='600px' src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h4 className="fw-bold fs-3 mt-2">
              {apidata?.snippet.title}
            </h4>
            <p className="text-secondary fw-medium mt-2 ms-1">{ value_converter(apidata?.statistics.viewCount)} Views &bull;  {moment(apidata?.snippet.publishedAt).fromNow()} </p>
          </div>
          <div className="row mb-3 mt-1">
            <div className="col-5">
            <div className="d-flex justify-content-between">
            <div className="mt-3 d-flex gap-3">
              <img
                width="40px"
                height="40px"
                className="rounded-3"
                src={channelvideo?.snippet.thumbnails.default.url}
                alt="logo"
              />
              <div className="video-sub-inner">
                <h2 className="fw-bold fs-5">{apidata?.snippet.channelTitle}</h2>
                <p className="text-secondary">{value_converter(channelvideo?.statistics.subscriberCount) } Subscribed</p>
              </div>
            </div>
            <div className="sub-btn mt-3">
            <button className="btn btn-dark px-2 py-1">Subscribe</button>
            </div>
           
          </div>
            </div>
            <div className="col-7">
             <div className="video-image d-flex gap-3 justify-content-end mt-3">
                <img width='30px' src="/assets/like.png" alt="like" />
                <span>{ value_converter(apidata?.statistics.likeCount) }</span>
                <img width='30px' src="/assets/dislike.png" alt="dislike" />
                <span></span>
                <img width='30px' src="/assets/share.png" alt="share" />
                <span>Share</span>
                <img width='30px' src="/assets/save.png" alt="save" />
                <span>Save</span>
             </div>
            </div>
          </div>
          <div className="video-desc my-3">
            <p className="fw-medium">{apidata?.snippet.localized.description}</p>
           
          </div>
          <hr />
            <h4 className="fw-bold my-3">{apidata?.statistics.commentCount} comments</h4>
            {comments?.map((item,index)=>{
              return (
                <div className="video-comments ps-4 pb-5" key={index}>
                <div className="video-comments-inner d-flex gap-2 align-items-center mt-3 ">
                  <img width='40xp' className="rounded-2" src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="User Image" />
                  <h4 className="fw-bold">{item.snippet.topLevelComment.snippet.authorDisplayName}</h4> 
                  <p className="fw-bold pt-2" >{moment(item.snippet.topLevelComment.snippet.updatedAt).fromNow() }</p>
                </div>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
               <div className="d-flex gap-2">
               <img width='20px' height='20px' src="/assets/like.png" alt="like" />
                <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                <img width='20px' height='20px' src="/assets/dislike.png" alt="dislike" />
               </div>
            </div>
              )
            })}
      
        </>
  );
}

export default PlayVideo;
