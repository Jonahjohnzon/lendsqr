import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Listing = ({data}) => {
const [style,setStyle]=useState({opacity:0.6})
useEffect(()=>{
if(data.name=='Users'){
setStyle({opacity:1})
}
},[])
  return (
    <div className='list' style={style} onMouseOver={()=>setStyle({opacity:1})} onMouseLeave={()=>{
        if(data.name!='Users'){
            setStyle({opacity:0.6})
            }
        }}>
        <img src={data.logo}/>
        <div>{data.name}</div>
    </div>
  )
}

export default Listing