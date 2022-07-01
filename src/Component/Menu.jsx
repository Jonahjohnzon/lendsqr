import React from 'react'
import { useState } from 'react'
import { customer,business,settings } from './data'
import Listing from './List'
import { useNavigate } from 'react-router-dom'
const Menu = () => {
    const navigate=useNavigate()
    const [custom,setcustom]=useState(false)
    const [busines,setbusines]=useState(false)
    const [set,setset]=useState(false)
    const Lists=({work})=>{
        const info=work.map((datas)=>{
            return (<div key={datas.id}>
                <Listing data={datas}/>
                </div>)
        })
        return info
    }
    const Runc=()=>{
        setset(false)
        setbusines(false)
       setcustom(!custom) 
    }
    const Runb=()=>{
        setcustom(false) 
        setset(false)
        setbusines(!busines)
    }
    const Runs=()=>{
        setbusines(false)
        setcustom(false) 
        setset(!set)
    }
  return (
    <div className='menufixed'>
        <div className='menu_body'>
            <div className='profiles'>
                <div className='profile'>
                <div className='doc'><p>Docs</p></div>
                <div className='bgnotice'><img src='/Notice.png'/></div>
                <div className='bgprofile'><img src='/profile.png'/></div> 
                <div className='name'><p>Adedeji</p><img src='/drop.png'/></div>
                </div>
            </div>
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
            <div onClick={Runc}>
                <div className='head'>CUSTOMERS</div>
                {custom&&<Lists work={customer}/>}
            
            </div>
            <div onClick={Runb}>
                <div className='head' >BUSINESSES</div>
                {busines&&<Lists work={business}/>}
                
            </div>
            <div  onClick={Runs}>
                <div className='head'>SETTINGS</div>
                {set&&<Lists work={settings}/>}
                
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
    </div>
  )
}

export default Menu