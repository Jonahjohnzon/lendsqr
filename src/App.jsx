import { useState } from 'react'
import './App.css'
import Loginpage from './Component/Loginpage'
import Userpage from './Component/Userpage'
import Detail from './Component/Detail'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Menu from './Component/Menu'
import Header from './Component/Header'
import Navbar from './Component/Navbar'
function App() {
  const [view,setview]=useState(false)
  return (
    <div className="App">
    <Router>
          
      <Routes>
       <Route exact path='/' element={<Loginpage/>}/>
       <Route exact path='/Home' element={<><Userpage/>  <Header setview={(view)=>setview(view)} view={view}/>
            <Navbar/>
            {view&&<Menu/>}</>}/>
       <Route exact path='/detail' element={<><Detail/>  <Header setview={(view)=>setview(view)} view={view}/>
            <Navbar/>
            {view&&<Menu/>}</>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
