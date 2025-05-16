import React, { useEffect, useState } from 'react'

const Youtube = () => {

    const [data, setData] = useState([])
    const [limit, setLimit] = useState(6)
    const [pageToken, setPageToken] = useState('')


       const fetchData =async (page) => {
            const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBHWjK-Tkv3N6kPkHMOLV7pbVKRodV_2N4&part=snippet&maxResults=${limit}&pageToken=${page}&q=programming`)
            const newdata = await res.json();
            
            console.log(newdata)
            setPageToken(newdata.nextPageToken || '')
            setData([...data ,...newdata.items])
        }

    useEffect(()=>{
 
        fetchData()
    },[])
    return (
        <div>
        
        <div className="container my-5">
        <div className="row">
        {
            data.map((ele)=>(
                <div className='col-4'>
                
                <iframe width="100%" height="300px" src={`https://www.youtube.com/embed/${ele.id.videoId}`}></iframe>
                </div>
            ))
        }
        <button className='btn btn-warning btn-sm' onClick={()=> fetchData(pageToken)}>Load More</button>
      
      </div>
    </div>
    
    </div>
  )
}

export default Youtube