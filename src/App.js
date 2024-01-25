//import logo from './logo.svg';
import './App.css';
//import PropsComponent from './Components/FuctionalComponents/propscomponent';
//import StateComponent from './Components/Classcomponents/StateComponents';
//import Testcomponent from './Components/FuctionalComponents/testComponents';
//import TestComp1 from './Components/FuctionalComponents/testComponents';
//import Login from './Components/Classcomponents/LoginComponent';
//import TestClasscomp from './Components/Classcomponents/testclassCoponents';
import NavBar from './Components/FuctionalComponents/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './Components/FuctionalComponents/About';
import Experience from './Components/FuctionalComponents/Experience';
import Login from './Components/FuctionalComponents/Login';
import Home from './Components/FuctionalComponents/Home';
import Footer from './Components/FuctionalComponents/Footer';
function App() {
  return (
     <div className="App">
      <BrowserRouter><NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/Exp" element={<Experience/>}></Route>
        <Route path="/login" element={<Login/>}></Route>

      </Routes>
      </BrowserRouter>
        {/* <PropsComponent name="Deepika" course="MERN"/>  */}
      
        {/* <StateComponent/> */}
        
    
    
    <BrowserRouter><Footer/></BrowserRouter>
    
    </div>
  );
}

export default App;
