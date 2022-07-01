import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import Listtable from './Table/Listtable'

function Table({newdata}) {
    const[click,setclick]=useState(1)
    const[total,settotal]=useState(100)
    const[newlist,setnewlist]=useState()
    const[fliternewdata,setfliter]=useState()
    const[Loadings,setLoadings]=useState(false)
   const Start=()=>{ 
    localStorage.setItem('data',JSON.stringify(newdata))  
   setfliter(newdata.slice(0,total))
   const data=newdata.slice(0,total)
    const jsonarray=Math.ceil(data?.length/9)
    setnewlist(Array.from({length:jsonarray},(v,k)=>k+1))
    setLoadings(true)
  
    }
   const Newinfo=({data})=>{
    const array=[]
    for(let i=0;i<data.length;i+=9){
    const chunk=data.slice(i,i+9)
    array.push(chunk)}
    const datas=array[click-1]?.map((data)=>{
        return <div key={data.id} className='tablelist' ><Listtable data={data} setfliter={(fliternewdata)=>setfliter(fliternewdata)} /></div>
   })
        return datas}

  const Arraylist=({newlist})=>{
     const data=newlist?.map((data)=>{
        if(click==data&& newlist.length>1){
        return(<div className='click' key={data} style={{opacity:1}} onClick={()=>{setclick(data)}}>
               <div>{data}</div>
               </div>)}
         if(click!=data && newlist.length>1){
         return(<div className='click' key={data} style={{opacity:0.6}} onClick={()=>{setclick(data)}}>
                <div>{data}</div>
                </div>)}
     })
     return data.slice(0,3)
  }

  const Arraylastlist=({newlist})=>{
        const data=newlist?.map((data)=>{
        if(click==data  && newlist.length>1){
         return(<div className='click' key={data}style={{opacity:1}} onClick={()=>{setclick(data)}} >
              <div>{data}</div>
              </div>)}
        if(click!=data && newlist.length>1){
        return(<div className='click' key={data}style={{opacity:0.6}} onClick={()=>{setclick(data)}} >
             <div>{data}</div>
             </div>)}
        })
        return data.slice(-3)
 }
  useEffect(()=>{
  Start()
   },[total])

  return (
  <>{Loadings?<>
    <div className='table'>
        <div className='tables'>
        <div className='tablehead' id='org'>
            <div>ORGANIZATION</div>
            <img src='/Logos/tabdrop.png'/>
        </div>
        <div className='tablehead'>
            <div>USERNAME</div>
            <img src='/Logos/tabdrop.png'/>
        </div>
        <div className='tableemail'>
            <div>EMAIL</div>
            <img src='/Logos/tabdrop.png'/>
        </div>
        <div className='tablehead'>
            <div>PHONE NUMBER</div>
            <img src='/Logos/tabdrop.png'/>
        </div>
        <div className='tablehead' id='date'>
            <div>DATE JOINED</div>
            <img src='/Logos/tabdrop.png'/>
        </div>
        <div className='tablehead'>
            <div>STATUS</div>
            <img src='/Logos/tabdrop.png'/>
        </div>
        </div>
         <Newinfo data={fliternewdata} />
      
    </div>
     <section className='section'>
     <div className='foot'>
        <div className='show'>
            <div className='showtext' >Showing</div>
                <select onChange={(e)=>{settotal(e.target.value)}}>
                    <option>100</option>
                    <option>200</option>
                    <option>300</option>
                    <option>400</option>
                    <option>500</option>
                </select>
       
            <div className='showtext'>out of {newdata.length}</div>
            </div>
            <div className='limit' >
            <div className='left' ><img src='/Logos/btn.png' onClick={()=>{
                if(click>0){
                setclick(click-1)}
                else{setclick(click)}
            }}/></div>
            <Arraylist newlist={newlist}/>
            <div>...</div>
            <Arraylastlist  newlist={newlist}/>
            <div  className='right'><img src='/Logos/btn.png' onClick={()=>{
                 if(click<newlist.length){
                    setclick(click+1)}
                    else{setclick(click)}
            }}/></div>
            </div>

            </div>
         </section>
    
            <div style={{height:300}}></div>
             </>:<div>loading</div>}</>
)}

export default Table