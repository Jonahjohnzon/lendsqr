import React from 'react'

const Info = ({data,title}) => {
  return (
    <>
        <div className='bodytitle'>{title}</div>
        <div className='bodyname'>{data}</div>
    </>
  )
}

export default Info