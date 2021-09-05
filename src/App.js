import logo from './logo.svg';
import './App.css';
import Tilt from 'react-tilt'
import Home from './pages/Home/Home';

function App() {
  return (
    <Tilt className="Tilt" options={{ max : 1 , scale: 1, perspective: 1500,}}  >
    <div className="Tilt-inner">  <div className="App">
        <Home/>
       </div> </div>
   </Tilt>
  );
}

export default App;
