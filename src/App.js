import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Navbar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/ContactPage/ContactPage';
import AboutPage from './components/About/AboutPage';
import ProjectPage from './components/ProjectPage/ProjectPage';
import './App.css'

import "./sass/mystyles.scss"


function App() {
  return (
    <div className="App app">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar/>
          <div className='main'>
            <Routes>  
              <Route exact path='/' element={< HomePage />}></Route>  
              <Route exact path='/contact' element={< ContactPage />}></Route>  
              <Route exact path='/about' element={< AboutPage />}></Route> 
              <Route exact path='/projects' element={< ProjectPage />}></Route>  
            </Routes>
          </div>    
        <Footer/>  
      </BrowserRouter>
    </div>
  );
}

export default App;
