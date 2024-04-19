import { useNavigate } from "react-router-dom"

const About = () => {
    const navigate=useNavigate();
    const getroute = ()=>{
        navigate("/");
    };
  return (
    <div className="container">
        <h1>This is the Example of React Router DOM</h1>
        <button onClick={getroute}>home</button>
    </div>
  )
}

export default About