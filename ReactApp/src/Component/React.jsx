let  college="Trinity";
let branch="CSE";
function React(){
  let name="sreeja";
  let place="Elkalapally";
  let price=500;
  let quantity=3;
  const student={
    name:"sony",
    age:"22",
    marks:"90"
  }
  return(
    <>
    <p>{name}</p>
    <p>{place}</p>
    <p>{college}</p>
    <p>{branch}</p>
    <p>{price*quantity}</p>
    <p>{student.name +" "+student.age+" "+student.marks}</p>
    <p>{student.marks>50?"pass":"fail"}</p>
    </>
  )
}
export default React;
