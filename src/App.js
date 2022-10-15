import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Footer from './components/Footer';
import ProjectDisplay from "./pages/ProjectDisplay";
import ContactUs from './pages/ContactUs';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';



function App() {
  const [theme,setTheme]=useState('blue')


  const toggle=()=>{
    setTheme((prev)=>(prev==='blue'?'black':'blue'))


  }
  return (
    <div className="App">

    <Router>
    <nav>
    
    <div className="navbar " id={theme}>
      <div className="toggleButton">
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/project"> Projects </Link>
        <Link to="/experience"> LearningExperience </Link>
        <Link to="/contactus"> Contact </Link>
        <DarkModeIcon styles={{cursor:'pointer'}} onClick={toggle}/>
      </div>
    </div>


    </nav>
      <Routes>
        <Route path='/' element={<Home theme={theme}/>}/>
        <Route path='/project' element={<Projects/>}/>
        <Route path="/project/:id" element={<ProjectDisplay/>} />
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
      <Footer/>
    </Router>
  
    </div>
  );
}

export default App;
