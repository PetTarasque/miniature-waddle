import './App.css';

const App = () => {
  const name = null;
  const isNameShowing = false;

  return (    
    <div className="App">
      <h1>Hello, {5*6}</h1>
      {name ? (
        <>
          whe know who you are {name}.
        </>
      ) : (
        <>
        <span> IDENTIFY YOURSELF TO THE DALEK</span>
        <div> or prepare to face destruction.</div>
        </>
      )}
    </div>
  );
}

export default App;
