import data7 from '../data7';
function Sidebar(props) {

    function handleClick(item){   
          props.data1(item);
    }
  return (
    <div className='containerA'>
      <p className='heading'>Lectures</p>
      {
        data7.data.data7a.map((item)=>{
         return <div onClick={()=>handleClick(item)} className='sectionA'>lecture {item.id}</div>
        })
      }
    </div>
  )
}

export default Sidebar
