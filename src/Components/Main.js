import React from 'react'

function Main(props) {
  return (
    <div className='main1'>
     <iframe width="100%" height="502" src={props.mainDa} className='iframe' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default Main
