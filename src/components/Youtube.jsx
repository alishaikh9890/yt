import React, { useEffect, useState } from 'react'
const key =  import.meta.env.VITE_YOUTUBE_KEY

const Youtube = () => {


    const [data, setData] = useState([])
    const [pageToken, setPageToken] = useState('')


       const fetchData =async (page) => {
            const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&maxResults=6${page ? `pageToken=${page}` : ''}&q=programming`)
            const newdata = await res.json();
            
            console.log(newdata)
            setPageToken(newdata.nextPageToken || '')
            setData([...data ,...newdata.items])
        }

    useEffect(()=>{
        fetchData()
    },[])

    console.log()
    return (
        <div>
        
        <div className="container my-5">
        <div className="row">
        {
            data.map((ele)=>(
                <div className='col-4'>
                
                <iframe width="100%" height="300px" src={`https://www.youtube.com/embed/${ele.id.videoId}?modestbranding=1&rel=0&showinfo=0`}></iframe>
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