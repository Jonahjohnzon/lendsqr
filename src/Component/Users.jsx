import React from 'react'
import Tab from './Tab'
import { data } from './data'
import Table from './Table'
import newdata from './newdata.json'
const Users = () => {
   const Tablet=()=>{
    const run=data.map((info)=>{
        return(
            <span key={info.id}>
            <Tab data={info} newdata={newdata}/>
            </span>
        )
    })
    return run
   }
  return (
    <div className='mainbody'>
        <div className='mainpart'>
        <div className='name'>
        <div>Users</div>
        </div>
        <div className='tablist'>
        <Tablet/>
        </div>
        <Table newdata={newdata}/>
        </div>
    </div>
  )
}

export default Users