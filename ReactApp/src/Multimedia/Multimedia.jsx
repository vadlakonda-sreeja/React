import  Image from "../Multimedia/teddy.jpg"
import Audio from "../Multimedia/audio.mp3"
import Video from "../Multimedia/video.mp4"
function Multimedia(){
  return(
    <>
    <img src="teddy.jpg" alt="" style={{ width: "200px", height: "300px" }} />
    <img src={Image} alt="" style={{width:"200px",height:"300px"}}/><br></br>
    <audio controls>
      <source src={Audio}></source>
    </audio><br></br>
    <audio src="audio.mp3" controls></audio><br />
    <video src="video.mp4" controls style={{width:"300px",height:"300px"}}></video><br />
    <video controls style={{width:"300px",height:"300px"}}>
      <source src={Video}></source>
    </video>
    </>
  )
}
export default Multimedia;