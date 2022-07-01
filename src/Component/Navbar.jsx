import React from 'react'
import Listing from './List'
import { customer,business,settings } from './data'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate=useNavigate()
    const Lists=({work})=>{
        const info=work.map((datas)=>{
            return (<div key={datas.id}>
                <Listing data={datas}/>
                </div>)
        })
        return info
    }
  return (
    <div className='nav'>
        <div className='side'>
            <div className='home'>
                <img src='/Logos/brief.png' className='drop'/>
                <div>Switch Organization</div>
                <img src='/Logos/dropped.png' />
            </div>
            <div className='dash'>
                <img src='/Logos/home.png'/>
                <div>Dashboard</div>
            </div>
            <div>
                <div className='head'>CUSTOMERS</div>
                <Lists work={customer}/>
            </div>
            <div>
                <div className='head'>BUSINESSES</div>
                <Lists work={business}/>
            </div>
            <div>
                <div className='head'>SETTINGS</div>
                <Lists work={settings}/>
            </div>
            <div className='logout'>
                <img src='/Logos/signout.png'/>
            </div>
            <div className='log' onClick={()=>{navigate('/')}}>
                Logout
            </div>
            <div style={{height:10}}></div>
        </div>
    </div>
  )
}

export default Navbar