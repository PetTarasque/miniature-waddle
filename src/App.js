import './App.css';

const App = () => {
  const name = "Hugo";
  const isNameShowing = false;

  return (    
    <div className="App">
      <h1>Hello, {isNameShowing ? name+"!" : "who are you?"}</h1>
    </div>
  );
}

export default App;
