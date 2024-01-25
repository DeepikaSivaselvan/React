import logo from './logo.svg';
import './App.css';
import PropsComponent from './Components/FuctionalComponents/propscomponent';
import StateComponent from './Components/Classcomponents/StateComponents';
//import Testcomponent from './Components/FuctionalComponents/testComponents';
//import TestComp1 from './Components/FuctionalComponents/testComponents';
//import Login from './Components/Classcomponents/LoginComponent';
//import TestClasscomp from './Components/Classcomponents/testclassCoponents';


function App() {
  return (
    <div className="App">
       <PropsComponent name="Deepika" course="MERN"/>
      <header className="App-header">
        <StateComponent/>
        <img src={logo} className="App-logo" alt="logo" />
      
        <p>
          Edit<code>src/App.js</code> and save to reload.
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
