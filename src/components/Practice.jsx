import React, { useEffect } from 'react'
import { data, views, channels } from './vid'
const Practice = () => {

useEffect(()=>{
    //  const newData = data.map((ele) => {
    //    let stat = views.find((el) => el.id === ele.id.videoId)
    //    if(stat){         
    //     let val = stat.snippet.viewCount
    //     (val < 1000 ) 
    //     ?
    //       val 
    //     :
    //     (val <  1000000)
    //     ?
    //       val = val/1000
    //     :
    //     (val < 100000000)
    //     ?
    //       val = val/1000000
    //     :
    //       val = val/100000000

    //     ele.snippet.viewCount = stat.statistics.viewCount;
    //    }

    //    return ele
    //   })

    //   newData.map((ele) => {
    //     // console.log(ele.snippet.viewCount)
    //     // console.log(ele.snippet.viewCount.length)
  
    //   })




  // const  newData = data.map((ele)=>{
  //    const chan = channels.find((el) =>el.id == ele.snippet.channelId)
  //   if(chan)
  //   {
  //     ele.snippet.channelThumb = chan.snippet.thumbnails
  //   }

    // return ele;
    // })
    // console.log(newData)

    data.map((ele) => {

      let dt = Date.parse(ele.snippet.publishTime)

      let dn = Date.now()

    let d = Math.floor((dn-dt)/1000);

        const intervals = {
            year: 31536000,
            month: 2592000,
            week: 604800,
            day: 86400,
            hour: 3600,
            minute: 60,
          };

          for(let key in intervals)
          {
            let t = Math.floor(d/intervals[key])

            if( 1 <= t){
              console.log(t, key, " ago");
              break;
            }
          }

 })


},[])


  return (
    <div>Practice</div>
  )
}

export default Practice