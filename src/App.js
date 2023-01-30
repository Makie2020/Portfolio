import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Navbar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/About/AboutPage';
import ProjectPage from './components/ProjectPage/ProjectPage';

import "./sass/mystyles.scss"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>  
            <Route exact path='/' element={< HomePage />}></Route>  
            <Route exact path='Portfolio/contact' element={< ContactPage />}></Route>  
            <Route exact path='Portfolio/about' element={< AboutPage />}></Route> 
            <Route exact path='Portfolio/projects' element={< ProjectPage />}></Route>  
          </Routes>
        <Footer/>  
      </BrowserRouter>
    </div>
  );
}

export default App;
