import React, { useEffect, useState } from 'react'

// const key =  import.meta.env.VITE_YOUTUBE_KEY1
const key =  import.meta.env.VITE_YOUTUBE_KEY2
// const key =  import.meta.env.VITE_YOUTUBE_KEY3

import {data } from './vid'
import Video from './video'

const Youtube = () => {

    // const [data, setData] = useState([])
    const [pageToken, setPageToken] = useState('')


       const fetchData =async (page) => {
            // const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&maxResults=6&videoDuration=medium${page ? `pageToken=${page}` : ''}&q=programming`)
            const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&type=video&maxResults=6&videoDuration=medium&q=programming${page ? `&pageToken=${page}` : ''}`)
            const newdata = await res.json();
            
            console.log(newdata)
            setPageToken(newdata.nextPageToken || '')
            setData([...data ,...newdata.items])
        }

    // useEffect(()=>{
    //     fetchData()
    // },[])

    console.log()
    return (
        <div className=''>
        
        <div className=" mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {
            data.items.map((ele)=>(
                <div key={ele.etag} className=''>
                    
                  <Video vidId={ele.id.videoId}  title={ele.snippet.title} thumb={ele.snippet.thumbnails}/>
                {/* <iframe width="100%" height="300px" src={`https://www.youtube.com/embed/${ele.id.videoId}?modestbranding=1&rel=0&showinfo=0`}></iframe> */}
                </div>
            ))
        }
        {
            pageToken && 
            <button className='btn btn-warning btn-sm' onClick={()=> fetchData(pageToken)}>Load More</button>
        }
      
      </div>
    </div>
    
    </div>
  )
}

export default Youtube