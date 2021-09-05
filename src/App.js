import logo from './logo.svg';
import './App.css';
import Tilt from 'react-tilt'
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App"> 
    <Tilt className="Tilt" options={{ max : 1 , scale: 1, perspective: 1500,}}  >
    <div  className="App">
        <img  src={logo} alt="" />
    </div>
       
       
   </Tilt>
   <Home/>
   </div> 
  );
}

export default App;
