import React, { useEffect } from 'react'
import { data, views } from './vid'
const Practice = () => {

useEffect(()=>{
     const newData = data.map((ele) => {
       let stat = views.find((el) => el.id === ele.id.videoId)
       if(stat){    
        
        let val = stat.snippet.viewCount

        (val < 1000 ) 
        ?
          val 
        :
        (val <  1000000)
        ?
          val = val/1000
        :
        (val < 100000000)
        ?
          val = val/1000000
        :
          val = val/100000000

        ele.snippet.viewCount = stat.statistics.viewCount;
       }

       return ele
      })

      newData.map((ele) => {

        // console.log(ele.snippet.viewCount)
        // console.log(ele.snippet.viewCount.length)

    
       
        
      })
},[])


  return (
    <div>Practice</div>
  )
}

export default Practice