import Card from "../Project/Card";
import React from "../Component/React";
function App(){
  let college="Trinity";
  let location="Peddapalli";
  return(
    <>
    <Card/>
    <React/>
    <h1>College Info:</h1>
    <p>College Name:{college}<br></br>College Location:{location}</p>
    <h1>List of Courses:</h1>
    <section>
      <select>
        <option>Java Full Stack</option>
        <option>React Development</option>
        <option>Python Programming</option>
      </select>
    </section>
    </>
  )
}
export default App;