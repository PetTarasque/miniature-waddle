import './App.css';

const Threat = (props) => {
  return (
    <>
      <h1> IDENTIFY YOURSELF TO THE {props.name ? props.name : "default"}</h1>
      <h3> or prepare to face {props.threat ? props.threat : "destruction"}.</h3>
    </>
  )
}

const App = () => {
  return (    
    <div className="App">
        <Threat name = {"Dalek"} threat = {"annihilation"}/>
        <Threat name = {"CyberMen"} />
        <Threat name = {"Dark lord"} />
        <Threat threat = {2+2}/>
        <Threat/>
    </div>
  );
}

export default App;
