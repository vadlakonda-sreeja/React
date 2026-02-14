import { FaLaptopCode, FaCode, FaFileCode } from "react-icons/fa";
import './Style.css';
function Card() {
  return (
    <>
      <div className="div1">
        <h1>CSS Styling Challenge</h1>
        <p>Create a Profile Card to Match This Design!</p>
      </div>
      <div className="div2">
        <img src="/sreeja.jpeg" alt="" className='img'></img>
        <h1>Vadlakonda Sreeja</h1>
        <p><b>FullStack Developer</b></p>
        <p><b>Skills:</b>Java,HTML,CSS,JS,React,SQL</p>
        <button className="button">Follow</button>
      </div>
      <div className="div3">
        <div className="div4">
          <div className="head">
          <h3 style={{color:"white",backgroundColor:"brown"}}>Task 1:Inline Styling</h3>
          </div><br/>
          <FaLaptopCode  size={40}/>
          <p>-Use style={'{}'} in JSX</p>
          <p>-Directly in the code</p>
        </div>
        <div className="div5">
          <div className="head">
          <h3 style={{color:"white",backgroundColor:"orange"}}>Task 2:Object Styles</h3>
          </div><br/>
          <FaCode  size={40}/>
          <p>-Create a Styles Object</p>
          <p>-Reuse in Multiple Elements</p>
        </div>
        <div className="div6">
          <div className="head">
          <h3 style={{color:"white",backgroundColor:"green"}}>Task 3:External CSS</h3>
          </div><br />
          <FaFileCode size={40}/>
          <p>-Use a CSS file</p>
          <p>-Add Hover Effects</p>
        </div>
      </div><br />
      <div className="div7">
        <h3><b>Bonus Challenge:</b></h3>
        <p style={{fontSize:"18px"}}>-Change BG on Hover</p>
        <p style={{fontSize:"18px"}}>-Rounded Button Style</p>
      </div>
    </>
  )
}
export default Card;