import logo from './logo.svg';
import './App.css';
import Tilt from 'react-tilt'
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="Appz"> 
    <Tilt className="Tilt" options={{ max : 2 , scale: 1, perspective: 900,}}  >
    <div  className="App">
        <img style={{opacity: '0'}} src={logo} alt="" />
    </div>
       
       
   </Tilt>
   <Home/>
   </div> 
  );
}

export default App;
