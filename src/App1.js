import './App.css';
import Navbar2 from './Components/Navbar7';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import Content1 from './Components/Content1';
import Content2 from './Components/Content2';
import Content3 from './Components/Content3';
import Footer from './Components/Footer';
import { useState } from 'react';
function App() {
  const [maindata,setMaindata] = useState("https://www.youtube.com/embed/IUN664s7N-c");
  const [like1,setlike] = useState("15");
  const [dislike1,setdislike] = useState("7");
  const getdata = (data)=>{
    console.log("App data is",data.url)
    setMaindata(data.url);
    setlike(data.like);
    setdislike(data.dislike)
  }

  return (
    <div className="container1">
      
      <div className='nav1'>
        <Navbar2/>
      </div>
      <div className='main1'>
       <Main mainDa ={maindata}/>
      </div>
      <div id="sidebar1">
       <Sidebar data1 ={getdata}/>
      </div>
      <div  id="Content1">
       <Content1/>
      </div>
      <div id="Content2">
       <Content2 like2 ={like1} dislike2 ={dislike1}/>
      </div>
      {/* <div id="Content3">
       <Content3 />
      </div> */}
      <div className='footer'>
       <Footer/>
      </div>
    </div>
  );
}

export default App;
