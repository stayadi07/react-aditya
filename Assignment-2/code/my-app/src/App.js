
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container"> 
  <img src= {employee.profileImg} alt="avatar"/>
  <h1>{employee.name}</h1>

  <div className='main'>
    <p><b> Location</b></p>
    <h2>{employee.location}</h2>
  </div>

  <div className='main'>
    <p> <b>Blood Group</b></p>
    <h2>{employee.bloodGroup}</h2>
  </div>

  <div className='main'>
    <p><b> Age</b></p>
    <h2>{employee.age}</h2>
  </div>
</div>
)
}



export default App;
