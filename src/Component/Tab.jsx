import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Tab = ({data,newdata}) => {
    const [no,setno]=useState(0)
    const [number,setnumber]=useState(400)
    useEffect(()=>{
      if(data.name=='USERS'){
        setnumber(newdata.length)
      }
      if(data.name=='ACTIVE USERS'){
        const total=newdata.filter((dat)=>{
        return dat.usertier==3
        })
        setnumber(total.length)
      }
      if(data.name=='USERS WITH LOANS'){
        const total=newdata.filter((dat)=>{
        return dat.loan
        })
        setnumber(total.length)
      }
      if(data.name=='USERS WITH SAVINGS'){
        const total=newdata.filter((dat)=>{
        return dat.bankamount
        })
        setnumber(total.length)

      }
      if(no<number){
        setno(no+1)
         }
         else{
        setno(number)
         }
    },[no])
  return (
    <div className='tab'>
        <div className='tabbody'>
          <div className='tabbodys'>
            <img src={data.logo}/>
            <div className='tabname'>{data.name}</div>
            <div className='tabno'>{no}</div>
            </div>
        </div>
    </div>
  )
}

export default Tab