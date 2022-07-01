import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import newdata from '../newdata.json'
function Listtable({ data,setfliter}) {
  const [body, setbody] = useState('')
  const [color, setcolor] = useState('')
  const [colors, setcolors] = useState('')
  const [display, setdisplay] = useState(false)
  const [styles, setStyles] = useState('none')
  const [org, setorg] = useState('')
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [no, setno] = useState('')
  const [date, setdate] = useState('')
  const [sta, setsta] = useState('')
  const[refresh,setrefresh]=useState(true)
  const navigate = useNavigate()
  const Load = (display) => {
    if (display) {
      setStyles('none')
      console.log(display)
      setdisplay(!display)
    }
    if (display == false) {
      setStyles('flex')
      setdisplay(!display)
    }
  }
  const Detail = () => {
      navigate('/detail', { state: { datatranfer: data.id } })
  }
  useEffect(() => {
    if (data.usertier == 1) {
      setbody('Blacklisted')
      setcolor('#E4033B')
      setcolors('rgb(252,230,233)')
    }
    if (data.usertier == 2) {
      setbody('Pending')
      setcolor('#E9B200')
      setcolors('rgb(253,247,229)')
    }
    if (data.usertier == 3) {
      setbody('Active')
      setcolor('#39CD62')
      setcolors('rgb(243,256,247)')
    }
  }, [refresh])
    const Update=async(e)=>{
    e.preventDefault();
    const dataall=await localStorage.getItem('data')
    const dataa=JSON.parse(dataall)
    if(email||no||date||org||sta||name){

      const  info=dataa.filter((Data)=>{
      return Data.sector==org&&Data.firstname.toLowerCase()==name.toLowerCase()&&Data.email.toLowerCase()==email.toLowerCase()&&Data.phone==no&&Data.date==date&&Data.usertier==sta
    })
    if(info.length!=0){
      console.log(info)
      setfliter(info)}
    if(info.length==0){
      const  info2=dataa.filter((Data)=>{
      return Data.usertier.toLowerCase()==sta.toLowerCase()||Data.date==date||Data.phone==no||Data.firstname.toLowerCase().includes(name.toLowerCase())|| Data.sector==org
      })      
      setfliter(info2)
    }}
    else setfliter(newdata.slice(0,100))
    }
    const Blacklist=async()=>{
    
      const dataa=newdata
      dataa.map((Data)=>{
      if(Data.id==data.id){
        data.usertier=1
        setrefresh(!refresh)
        Load(display)
      }})
  }
  const Activate=async()=>{
    
    const dataa=newdata
    dataa.map((Data)=>{
      if(Data.id==data.id){
        data.usertier=3
        setrefresh(!refresh)
        Load(display)
      }}) 
  }
  const Reset=()=>{
      setemail('')
      setname('')
      setno('')
      setdate('')
  }
  return (
    <div className='tablelists'>
      <div id='data3'>{data.sector}</div>
      <div >{data.firstname}</div>
      <div className='email'>{data.email}</div>
      <div>{data.phone}</div>
      <div id='data2'>{data.date}</div>
      <section className='touch'><section style={{ color: color, backgroundColor: colors }}>{body}</section><img src='/Logos/touch.png' style={{ cursor: 'pointer' }} onClick={() => {
        Load(display)
      }} /></section>
      <div className='fixed' style={{ display: styles }}>
        <div className='form'>
          <form className='input' onSubmit={(e) => Update(e)}>
            <div>
              <div className='header'>Organization</div>
              <select className='inputstyle' value={org} onChange={(e) => { setorg(e.target.value) }}>
                <option>Fintech</option>
                <option>Banking</option>
                <option>Education</option>
              </select>
            </div>
            <div>
                <div className='header'>Username</div>
                <input type='text' className='inputstyle' value={name} onChange={(e) => { setname(e.target.value) }} />
            </div>
            <div>
                <div className='header'>Email</div>
                <input type='text' className='inputstyle' value={email} onChange={(e) => { setemail(e.target.value) }} />
            </div>
            <div>
                <div className='header'>Phone Number</div>
                <input type='tel' className='inputstyle' value={no} onChange={(e) => { setno(e.target.value) }} />
            </div>
            <div>
                <div className='header'>Date Joined</div>
                <input type='data' className='inputstyle' value={date} onChange={(e) => { setdate(e.target.value) }} />
            </div>
            <div>
                <div className='header'>Status</div>
                <select className='inputstyle' onChange={(e) => { setsta(e.target.value) }}>
                <option disabled selected >Select</option>
                <option value={2}>Pending</option>
                <option value={3}>Active</option>
                <option value={1}>Blacklisted</option>
                </select>
            </div>
            <div className='submit'>
                <div onClick={Reset}>Reset</div>
                <input type='submit' value='Fliter' />
            </div>
          </form>
        </div>

        <span className='smallmenu'  >
            <footer className='menubody'>
              <div onClick={Detail}><img src='Logos/eye.png' /><div>View Detail</div></div>
              <div  onClick={Blacklist}><img src='Logos/blacklist.png'/><div>Blacklist User</div></div>
              <div  onClick={Activate}><img src='Logos/activate.png' /><div>Activate User</div></div>
            </footer>
        </span>
      </div>
    </div>
  )
}

export default Listtable