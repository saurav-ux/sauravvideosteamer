import React, { useState } from 'react'
function Content1() {

  const [subs,setSubs] = useState(true)
  const [bell,setBell] = useState(true)
function handleClick(){
  setSubs(prevD => !prevD)
  setBell(prevD => !prevD)
}
  return (
    <div className='just'>
      <div className='subscribe'>  
        <p onClick={handleClick} className='sub1'>{subs ? <b >Subscribe</b>: <b>Subscribed</b>} </p>
        <p onClick={handleClick} className={bell ? "white1" : "Blue1"}><i class="fa-solid fa-bell"></i></p>    
      </div>


    

    </div>
  )
}

export default Content1
