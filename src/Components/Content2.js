import React, { useState } from 'react'

function Content2(props) {

  const [countplus,setCountplus] = useState(props.like2)
  const [countminus,setCountminus] = useState(props.dislike2)
  const [likecolor,setLikecolor] = useState("white")
  const [dislikecolor,setdisLikecolor] = useState("white")
  function handleClick(){
   setCountplus(parseInt(countplus)+1)
   setLikecolor("Blue")
  }
  function handleClick2(){
    setCountminus(parseInt(countminus)+1)
    setdisLikecolor("Blue")
  }
  return (
    <div className='btn'>
      <div onClick={handleClick} className={likecolor}> <p><i class="fa-solid fa-thumbs-up th1"></i> {countplus}</p></div>
      <div onClick={handleClick2} className={dislikecolor}><p><i class="fa-solid fa-thumbs-down th1"></i> {countminus}</p></div>
    </div>
  )
}

export default Content2
