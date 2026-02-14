import React from "react";
class ClassComponent extends React.Component{
  render(){
    let college="Trinity";
    let Location="Peddapalli";
    let academic=2025;
    const contact={
      "Address":"Elkalapally",
      "PhoneNumber":8976576898
    }
    return(
      <>
      <p>College Name:{college}<br></br>Location:{Location}</p><br></br>
      <h1>List of Departments:</h1>
      <section>
        <select>
          <option>Computer Science</option>
          <option>Electronics</option>
          <option>Mechanical</option>
          <option>Civil</option>
        </select>
      </section><br/>
      <h1>List of Courses:</h1>
      <section>
        <select>
          <option>JavaFullStack</option>
          <option>React Development</option>
          <option>Python Programming</option>
          <option>Mechanical</option>
          <option>Civil</option>
        </select>
      </section>
      <p>Academic Year:{academic}</p>
      <p>Address:{contact.Address}</p>
      <p>Phone Number:{contact.PhoneNumber}</p>
      </>
    )
  }
}
export default ClassComponent;