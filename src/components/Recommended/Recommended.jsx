import React from 'react'
import { value_converter } from '../../data'

function Recommended({item,key}) {
  return (
  <>

    <div className="row" key={key}>
        <div className="col-4">
        <img className='rounded-1 img-fluid w-100 h-100'  src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
        </div>
        <div className="col-8 d-flex flex-column gap-1 ps-2">
            <h6 className='fw-medium fs-6'>{item.snippet.title}</h6>
            <p className=' text-secondary fw-small'>{item.snippet.channelTitle}</p>
            <p className=' text-secondary fw-small '>{value_converter(item.statistics.viewCount)}</p>
        </div>
    </div>
  </>
  )
}

export default Recommended
