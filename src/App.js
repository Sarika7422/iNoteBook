import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import NoteState from './Context/Notes/noteState'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
    {/* All states will be available to all components between this NoteState. */}
      <NoteState> 
        <Router>
          <Navbar />
          <div className="container">
          <Routes>
            <Route exact path='/' element={<Home />} key={"/home"} ></Route>
          </Routes>
          <Routes>
            <Route exact path='/about' element={<About />} key={"/about"} ></Route>
          </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
