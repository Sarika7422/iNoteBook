import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
        </Routes>
        <Routes>
          <Route path='/about' element={<About />} ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
