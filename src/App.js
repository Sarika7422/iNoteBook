import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import NoteState from './Context/Notes/noteState'
import Alert from './Components/Alert'
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useState } from 'react';
import ModeState from './Context/Dark_lightMode/modeState';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type, color) => {
    setAlert({
      msg: message,
      type: type,
      color: color
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }


  return (
    <>
    {/* All states will be available to all components between this NoteState. */}
      <ModeState>
      <NoteState> 
        <Router>
        <Navbar showAlert = {showAlert}/>
          <Alert alert={alert}/>
          <div className="container">
          <Routes>
            <Route exact path='/' element={<Home showAlert = {showAlert}/>} ></Route>
          
            <Route exact path='/about' element={<About />} ></Route>

            <Route exact path='/login' element={<Login showAlert = {showAlert}/>} ></Route>

            <Route exact path='/signup' element={<Signup showAlert = {showAlert}/>} ></Route>

            <Route path="*" element={<MatchAllRoute />} />
          </Routes>
          </div>
        </Router>
      </NoteState>
      </ModeState>
    </>
  );
}


export default App;


function MatchAllRoute() {
  return <h2>The requested page does not exist</h2>;
}