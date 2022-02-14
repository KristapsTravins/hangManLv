import "../css/drawing.css"; 

const Drawing = (props) => {
  return (
    <div className="main_window">
        {props.loseRes>=1?<div className='step1' ></div>:<></>}
        {props.loseRes>=2?<div className='step2'></div>:<></>}
        {props.loseRes>=3?<div className='step3'></div>:<></>}
        {props.loseRes>=4?<div className='step4'></div>:<></>}
        {props.loseRes>=5?<div className='step5'></div>:<></>}
        {props.loseRes>=6?<div className='step6'></div>:<></>}
        {props.loseRes>=7?<div className='step7'></div>:<></>}
        {props.loseRes>=8?<div className='step8'></div>:<></>}
    </div>
  )
}

export default Drawing