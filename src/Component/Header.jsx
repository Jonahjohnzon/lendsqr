import React from 'react'

const Header = ({setview,view}) => {
  return (
    <header>
        <div className='head'>
        <div className='homelogo'>
           <img src='/Union.png' className='first'/>
           <img src='/lendsqr.png'/>
        </div>
            <div className='style'>
        <input type='text'placeholder='Search for anything' className='searchbar'/>
        <div className='search_icon' ><img src='/searchicon.png'/></div>
        </div>  
            <div className='profiles'>
                <div className='profile'>
                <div className='doc'><p>Docs</p></div>
                <div className='bgnotice'><img src='/Notice.png'/></div>
                <div className='bgprofile'><img src='/profile.png'/></div> 
                <div className='name'><p>Adedeji</p><img src='/drop.png'/></div>
                </div>
            </div>
            <div className='dropmenu' onClick={()=>setview(!view)}>
            <svg  x="0px" y="0px"
	            viewBox="0 0 401.141 401.141" fill='#213F7D'>
              <g>
              <path d="M101.847,160.827v64.423h299.294v-64.423H101.847z M382.435,206.544H120.553v-27.012h261.882V206.544z M101.847,300.074
	              h299.294V235.65H101.847V300.074z M120.553,254.356h261.882v27.012H120.553V254.356z M101.847,374.379h299.294v-64.423H101.847
		            .379z M120.553,328.662h261.882v27.012H120.553V328.662z M299.294,138.997h81.059V26.762h-81.059h-18.706H0v112.235h280.588
		            H299.294z M299.294,45.467h62.353v74.824h-62.353V45.467z M18.706,120.291V45.467h261.883v74.824H18.706z M311.235,73.843h40.962
		            l-20.484,26.04L311.235,73.843z"/>
              </g>

              </svg>
            </div> 
        </div>
    </header>
  )
}

export default Header