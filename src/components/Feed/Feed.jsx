import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { value_converter } from '../../data'
import './Feed.css'
import moment from 'moment/moment'

function Feed({data}) {

  return (
   <>
        {data?.map((item,index)=>{
          return (
            <div className='col-lg-4 col-12 col-md-6 px-2 mt-3' key={index}>
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="card rounded-2">
                <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
                <h3 className='fw-medium fs-5 px-2 py-2'>{item.snippet.title}</h3>
                <h6 className='fw-bold fs-6 px-2'>{item.snippet.channelTitle}</h6>
                <p className=' px-2 my-1 text-secondary'>{value_converter(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
            </Link>
            </div>
          )
        })}
      
        

   </>
  )
}

export default Feed
