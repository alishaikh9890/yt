import React, { useEffect, useRef, useState } from 'react'

 const key =  import.meta.env.VITE_YOUTUBE_KEY1
// const key =  import.meta.env.VITE_YOUTUBE_KEY2
// const key =  import.meta.env.VITE_YOUTUBE_KEY3

// import {data } from './vid'

import Published from './Published'
import Video from "./Video"

const Youtube = () => {

    const [data, setData] = useState([])
    const [pageToken, setPageToken] = useState('')
    const [p, setP] = useState(false);
    const [loading, setLoading] = useState(true)

    const base_url = 'https://www.googleapis.com/youtube/v3'



       const fetchData =async (page) => {

        setLoading(true)
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

           setP(false)
           setLoading(false)
             
        } catch (error) {
          console.log(error)
        }


          
        }

    useEffect(()=>{
        fetchData(pageToken)
    },[p])

    const aref = useRef()

    window.onscroll = (e) => {

        let lastEle = aref.current.children[aref.current.children.length-1]

        let lastRect=  lastEle.getBoundingClientRect().top
        let mainRect = window.innerHeight
        console.log("lastRect " +lastRect)
        console.log("lastRect " +mainRect)

        console.log(window.scrollY)

        if(Math.round(lastRect) < mainRect)
        {
          setP(true)
        }
    }

    return (
        <>
        
        <div className="mx-auto pt-20 p-3">
        <h1 className='text-white bg-amber-500' >{p}</h1>
        <div  ref = {aref}  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {
            data.map((ele)=>(
                <div className='p-2' key={ele.id.videoId} >
                    <nav></nav>
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
         {/*
        //     pageToken && 
        //     <button className='bg-amber-600 block text-white mx-auto px-5 py-1 rounded-md' onClick={()=> fetchData(pageToken)}>Load More</button>
        // */}
        {
          loading && 
<div className='text-center'>
          <span className='block mx-auto w-8 h-8 rounded-full border-3 border-b-gray-900 text-white border animate-spin'></span>
    {/* <svg aria-hidden="true" className="border mx-auto  w-8 h-8 text-gray-500 animate-spin dark:text-white fill-gray-950" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg> */}
    <span class="sr-only">Loading...</span>
</div>

        }
    </div>
    
    </>
  )
      }

export default Youtube