import React, { useEffect, useState } from 'react'

const Published = ({time}) => {
const [publish, setPublish] = useState("")


useEffect(() => {

    let dt = Date.parse(time)
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
                setPublish(`${t} ${key}`)
                break;
            }
        }
    },[time])



  return (
    <div>{publish} ago</div>
  )
}

export default Published