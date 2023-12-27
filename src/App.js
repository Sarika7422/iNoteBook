import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import NoteState from './Context/Notes/noteState'
import Alert from './Components/Alert'

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
          <Alert/>
          <div className="container">
          <Routes>
            <Route exact path='/' element={<Home/>} ></Route>
          
            <Route exact path='/about' element={<About />} ></Route>

            <Route path="*" element={<MatchAllRoute />} />
          </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}


export default App;


function MatchAllRoute() {
  return <h2>The requested page does not exist</h2>;
}