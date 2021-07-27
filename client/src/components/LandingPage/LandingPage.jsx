import { Link, useHistory } from "react-router-dom";
import "./LandingPage.css";

function LandingPage({setColor}) {

  const history = useHistory();

  return (
    <div className = 'body'>
      <div className = "main">
      {/* <Link to="/home"> */}
      <div className = 'column' onClick = {() => {setColor('teamR'); history.push('/home')}}></div>
      <div className = 'column' onClick = {() => {setColor('teamY'); history.push('/home')}}></div>
      <div className = 'column' onClick = {() => {setColor('teamB'); history.push('/home')}}></div>
      {/* </Link> */}
      </div>        
    </div>
  );
}


export default LandingPage;