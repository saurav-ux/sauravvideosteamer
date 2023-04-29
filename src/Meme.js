import React from "react";
import App1 from "./App1";
import memesData from "./memesData";
export default function Meme(prop)
{
    let url
    function handleClick()
    {
       return prompt("Clicked")
    }
    function handleOnMouse()
    {
        console.log("Hover!")
      
    }
    const [getimg,func]= React.useState("")
    function getMemeImage()
    {
        
        const memeArray= memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
         url = memeArray[randomNumber].url
        console.log(url)
        func(url)

    }
const [data,setData] = React.useState("");
  function data7(item){
    //    alert("Saurav");
        setData(item.url)
//    alert(item.url)
   
  }
  let arr = [1,2,3,4];

    return(
        <div className="top">
            <nav className="nav-top">
                <img src="troll-face.png" className="meme-img"></img>
                <h3>Meme Generator</h3>
            </nav>
            <div className="form-top">
                <div className="form">
                   
                       <input type="text" placeholder="Shut up" className="input1"></input>
                       <input type="text" placeholder="and take my money" className="input1"></input>
                       {/* <img src={data}/> */}
                      <iframe width="892" height="502" src={data} title="Learn HTML video in 2 minutes 🎥" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                       <button className="button1" id="181913649" onClick={()=>{getMemeImage()}}>Get a new meme image 🖼️</button>     
                       {/* <button onClick={this.data7.bind(this)}> Data</button>  
                        */}
                        {
                           
                            memesData.data.memes.map((item)=>{
                                return <button onClick={()=>{data7(item)}}> Data</button>  
                            })
                        }
                       
                </div>
            </div>
            <div className="meme1">
                <img src={getimg} className="img2" onMouseOver={handleOnMouse} ></img>
            </div>
        </div>
    )
}