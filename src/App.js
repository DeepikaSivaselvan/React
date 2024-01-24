import logo from './logo.svg';
import './App.css';
//import Testcomponent from './Components/FuctionalComponents/testComponents';
import TestComp1 from './Components/FuctionalComponents/testComponents';
import Login from './Components/Classcomponents/LoginComponent';


function App() {
  return (
    <div className="App">
       <TestComp1/>
      <header className="App-header">
        <Login/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
