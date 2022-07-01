import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Star from './Star'
import { useNavigate } from "react-router-dom";
import Body from './Body'

const Profile = ({data}) => {
  const[fill1,setfill1]=useState(false)
  const[fill2,setfill2]=useState(false)
  const[fill3,setfill3]=useState(false)
  const Data1=[
    {
      title:'FULL NAME',
      data:data.firstname
    },
    {
      title:'PHONE NUMBER',
      data:data.phone
    },
    {
      title:'EMAIL',
      data:data.email
    },
    {
      title:'BVN',
      data:data.phone
    },
    {
      title:'GENDER',
      data:data.gender
    },
    {
      title:'MARITAL STATUS',
      data:data.marital
    },
    ,
    {
      title:'CHILDREN',
      data:data.children
    },
    ,
    {
      title:'TYPE OF RESIDENCE',
      data:data.residence
    }
  ]
const Data2=[
    {
      title:'LEVEL OF EDUCATION',
      data:data.Education
    },
    {
      title:'EMPLOYMENT STATUS',
      data:data.employed
    },
    {
      title:'SECTOR OF EMPLOYMENT',
      data:data.sector
    },
    {
      title:'DURATION OF EMPLOYMENT',
      data:data.employment_dur
    },
    {
      title:'OFFICE EMAIL',
      data:data.email
    },
    {
      title:'MONTHLY INCOME',
      data:data.income
    },
    ,
    {
      title:'LOAN REPAYMENT',
      data:data.loan
    },
  
  ]
 const Data3=[
    {
      title:'TWITTER',
      data:data.social
    },
    {
      title:'FACEBOOK',
      data:data.firstname
    },
    {
      title:'INSTAGRAM',
      data:data.social
    }
  
  ]
 const Data4=[
    {
      title:'FULL NAME',
      data:data.guarantor
    },
    {
      title:'PHONE NUMBER',
      data:data.phone
    },
    {
      title:'EMAIL ADDRESS',
      data:data.email
    },
    {
      title:'RELATIONSHIP',
      data:data.rela
    }
  
  ]
  const Data5=[
    {
        title:'FULL NAME',
        data:data.guarantor
      },
      {
        title:'PHONE NUMBER',
        data:data.phone
      },
      {
        title:'EMAIL ADDRESS',
        data:data.email
      },
      {
        title:'RELATIONSHIP',
        data:data.rela
      }
  
  ]
  const navigate=useNavigate()
  useEffect(()=>{
    if(data.usertier==1){
      setfill1(false)
      setfill2(true)
      setfill3(true)
    }
    if(data.usertier==2){
      setfill1(false)
      setfill2(false)
      setfill3(true)
    }
    if(data.usertier==3){
      setfill1(false)
      setfill2(false)
      setfill3(false)
      }
    },[])
  const Black=()=>{
      navigate(-1)
    }
  const Active=()=>{
      navigate(-1)
    }
  return (
      <div className='Profile'>
      <div className='mainpart'>
      <div className='section'>
        <div>
        <div className='direct' onClick={()=>navigate('/Home')}><img src='/Logos/back.png'/><div>Back to Users</div></div>
        </div>
        <div className='userdetail'>
        <h1>User Detail</h1>
        <div className='button'>
        <div className='button1' onClick={Black}>BLACKLIST USER</div>
        <div className='button2' onClick={Active}>ACTIVATE USER</div>
        </div>
        </div>
        <div className='topbody'>
        <div className='topcollect'>
          <img src='/Logos/avatar.png'/>
          <div className='name'>
            <h3>{data.firstname}</h3>
            <h5>{data.code}</h5>
          </div>
        <div className='ut'>
            <h4>User's Tier</h4>
        <div>
            <Star fill={fill1}/>
            <Star fill={fill2}/>
            <Star fill={fill3}/>
          </div>
        </div>
          <div className='acc'>
            <h4>${parseInt(data.bankamount).toLocaleString()}</h4>
            <div>{data.bvn}/Providus Bank</div>
          </div>
        </div>
        <div className='downbody'>
          <div className='mainside'>General  Detail</div>
          <div>Document</div>
          <div>Bank Details</div>
          <div>Loans</div>
          <div>Savings</div>
          <div>App and System</div>
        </div>
        </div>
        <div className='profileb'>
        <Body info={Data1} info1={Data2} info2={Data3} info3={Data4} info4={Data5}/>
        </div>
        <div style={{height:100}}></div>
        </div>
      </div>
    </div>
  )
}

export default Profile