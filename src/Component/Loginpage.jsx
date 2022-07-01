import React,{useState} from 'react'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";


const Loginpage = () => {
   const [pass,setPass]=useState('password')
   const [SHOW,setSHOW]=useState('SHOW')
   const [toggle,setToggle]=useState(false)
   const navigator=useNavigate()

   const NavigatePage=()=>{
      navigator('/Home')
      }
   const Change=()=>{
      setToggle(!toggle)
      }
   useEffect(()=>{
      if(toggle){
         setPass('text')
         setSHOW('HIDE')
         }
      else{
         setPass('password')
         setSHOW('SHOW')
         }
         },[toggle])
   return (
      <div className='app'>
      <div className='image'>
         <div className='logo'>
            <img src='/Union.png' className='first'/>
            <img src='../public/lendsqr.png'/>
         </div>
      <div className='img'>
            <img src='/Log.png'/>
      </div>
      </div>
      <div className='main'>
      <div className='word'>
         <div className='logtext'>
            Welcome!
         </div>
         <div className='text'>
            Enter details to login.
         </div>
      </div>
      <form onSubmit={NavigatePage}>
         <div className='style'>
         <input type='email' placeholder='Email' className='email' required/>
         </div>
         <div className='style'>
         <input type={pass} placeholder='Password' className='password' required/>
         <div className='show' onClick={Change}>{SHOW}</div>
         </div>
         <div className='fp'>FORGOT PASSWORD? </div>
         <input type='submit' value='LOG IN' className='loginbutton'/>
      </form>
      </div>
   </div>
   )
}

export default Loginpage