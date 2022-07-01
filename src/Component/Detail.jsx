import React from 'react'
import { useLocation } from 'react-router-dom';
import Profile from './Profile';
function Detail() {
    const location=useLocation()
 const index=location.state.datatranfer
 const data=localStorage.getItem('data')
 const info=JSON.parse(data)
const newdata=info.filter(element=>element.id==index)

  return (
    <>
    <Profile data={newdata[0]}/>
    </>
  )
}

export default Detail