import React, { useEffect, useRef, useState } from 'react'

// const key =  import.meta.env.VITE_YOUTUBE_KEY1
// const key =  import.meta.env.VITE_YOUTUBE_KEY2
const key =  import.meta.env.VITE_YOUTUBE_KEY3

// import {data } from './vid'
import Video from './video'
import Published from './Published'

const Youtube = () => {

    const [data, setData] = useState([])
    const [pageToken, setPageToken] = useState('')

    const base_url = 'https://www.googleapis.com/youtube/v3'



       const fetchData =async (page) => {

        try {
            // const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&maxResults=6&videoDuration=medium${page ? `pageToken=${page}` : ''}&q=programming`)
            const res = await fetch(`${base_url}/search?key=${key}&part=snippet&type=video&maxResults=8&videoDuration=medium&q=marvel${page ? `&pageToken=${page}` : ''}`)
            const newdata = await res.json();


            if(!newdata.items) {
              return
            }
           
              console.log(newdata)
              const stats = newdata.items.map((ele)=>ele.id.videoId)
              const vidIds = stats.join()

              const channels = newdata.items.map((ele)=>ele.snippet.channelId)
              const chanId = channels.join()

              const viewRes = await fetch(`${base_url}/videos?key=${key}&part=statistics,contentDetails&id=${vidIds}`)
              const viewCount = await viewRes.json()
              console.log(viewCount)

              const chanThumb = await fetch(`${base_url}/channels?key=${key}&part=snippet&id=${chanId}`)
              const thumb = await chanThumb.json()

           
          
             
             
             //  let viewStat = viewCount.items.map((ele) =>{
              //  ele.statistics.id =ele.id
              //  return ele.statistics;
              //  })
              // console.log(newdata.items)
              // console.log(viewCount.items)
              
              



             const updateData = newdata.items.map((ele) => {
               let stat = viewCount.items.find((el) => el.id === ele.id.videoId)
               if(stat){
                 ele.snippet.viewCount = stat.statistics.viewCount;
                 ele.snippet.duration = stat.contentDetails.duration
               }
               let chan = thumb.items.find((el) =>el.id == ele.snippet.channelId)
               if(chan)
                 {
                   ele.snippet.channelThumb = chan.snippet.thumbnails.default
                 }
                 return ele
               })
               

               console.log(updateData)
           setPageToken(newdata.nextPageToken || '')
           setData([...data ,...updateData])
             
        } catch (error) {
          console.log(error)
        }

          
        }

    useEffect(()=>{
        fetchData()
    },[])

    const aref = useRef()

    window.onscroll = (e) => {

        let lastEle = aref.current.children[aref.current.children.length-1]

        let lastRect=  lastEle.getBoundingClientRect().top
        let mainRect = window.innerHeight
        console.log("lastRect " +lastRect)
        console.log("lastRect " +mainRect)

        console.log(window.scrollY)

        if(lastRect < mainRect && pageToken)
        {
         fetchData(pageToken)
        }
    }

    return (
        <>
        
        <div className="mx-auto pt-20 p-3">
        <div  ref = {aref}  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {
            data.map((ele)=>(
                <div className='p-2' key={ele.id.videoId} >
                    
                  <Video  vidId={ele.id.videoId}  title={ele.snippet.title} thumb={ele.snippet.thumbnails}/>
                {/* <iframe width="100%" height="300px" src={`https://www.youtube.com/embed/${ele.id.videoId}?modestbranding=1&rel=0&showinfo=0`}></iframe> */}
                <div className="flex gap-4 my-3">
                    <div className="pt-1">
                      <img className='rounded-full'  style={{width:"40px", height:"40px"}} src={ele.snippet.channelThumb.url} alt="" />
                    </div>
                    <div className="">
                        <h2 className='text-white text-lg font-medium'>{ele.snippet.title}</h2>
                        <h4 className='text-gray-400 text-sm font-medium cursor-pointer hover:text-gray-100 w-fit'>{ele.snippet.channelTitle}</h4>
                        <h4 className='text-gray-400 text-sm font-medium flex items-center gap-1'>
                          {
                                 (ele.snippet.viewCount < 1000 ) 
                                  ?
                                    (ele.snippet.viewCount)
                                  :
                                  (ele.snippet.viewCount <  1000000)
                                  ?
                                   (ele.snippet.viewCount/1000).toFixed(1) + " K" 
                                  :
                                  (ele.snippet.viewCount < 100000000)
                                  ?
                                    (ele.snippet.viewCount/1000000).toFixed(1) + " M" 
                                  :
                                    (ele.snippet.viewCount/100000000).toFixed(1) + " B"
                          } views

                          <span>•</span>

                          <Published time={ele.snippet.publishTime}/>
                      </h4>
                    </div>
                </div>
                </div>
            ))
        }
      
      </div>
        {
            pageToken && 
            <button className='bg-amber-600 block text-white mx-auto px-5 py-1 rounded-md' onClick={()=> fetchData(pageToken)}>Load More</button>
        }
    </div>
    
    </>
  )
}

export default Youtube