import React from 'react'
import Info from './Info'
const Body = ({info,info1,info2,info3,info4}) => {
    const Run=({info})=>{
    const Tab=info.map((data)=>{
    return(
        <div key={data.id} className='runbody'><Info data={data.data} title={data.title}/></div>
    )
    })
    return Tab
    }
return (
    <>
    <div className='pb'>
        <div className='pbody'>
    <div className='profiletitle'>Personal Information</div>
    <div className='run'><Run info={info} /></div>
        </div>
        <div className='pbody'>
    <div className='profiletitle'>Education and Employment</div>
    <div className='run'><Run info={info1} /></div>
        </div>
        <div className='pbody'>
    <div className='profiletitle'>Socials</div>
    <div className='run'><Run info={info2}/></div>
        </div>
        <div className='pbody'>
    <div className='profiletitle'>Guarantor</div>
    <div className='run'><Run info={info3}/></div>
        </div>
        <div className='pbody'>
    <div className='profiletitle'></div>
    <div className='run'><Run info={info4} /></div>
        </div>
    </div>
    
    </>
    )
}

export default Body