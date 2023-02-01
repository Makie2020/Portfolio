import './HomePage.css'
import { NavLink } from 'react-router-dom';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import AboutPage from '../About/AboutPage';
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt} from "react-icons/fa";
import DownloadButton from './DownloadButton';

function HomePage() {
  
  return (
    <div className='mb-6 homepage'>
      <div className='homepage__hero is-flex is-flex-direction-row is-align-items-center is-justify-content-center'>
        <div className="homepage__hero__text is-flex is-flex-direction-column mr-6">
          <h2 className='is-size-3 mt-6'>PORTFOLIO</h2>
          <h1 className='is-size-1 pb-6' id='homepage__hero__h1'>Marieke Linneman</h1>
          <div className='homepage__hero__details is-flex is-flex-direction-row pb-6 is-justify-content-center'>
            <h2 className='is-size-4'>JUNIOR FRONT-END DEVELOPER</h2>
          </div>
          <div>
            <DownloadButton className="home-hero-view-resume"/>
            <a className="mx-4" href="https://github.com/makie2020"><BsGithub className='icon is-medium'/></a>
            <a  href="https://www.linkedin.com/in/marieke-linneman-ba9a6062/"><BsLinkedin className='icon is-medium'/></a>
          </div>
        </div>
        <div className="homepage__hero__photo"><img src={"../../Portfolio/assets/images/PhotoLaptopSmall_dviswi_c_scale,w_576.png"} alt='laptop' id='img'/></div>
      </div>
      <AboutPage/>
      <section className="homepage__projects">
        <span className="homepage__section__span"></span>
        <h2 className="homepage__section__header">Projects</h2>
        <div className="homepage__project mt-6">
          <img src={"../../Portfolio/assets/images/OxygenShop.png"} alt='OxygenShop App' className="homepage__project__img"/>
          <div className="homepage__project__text-container pl-6">
            <div className="homepage__project-text">
              <h2 className='title'>OxygenShop</h2>
              <p>OXYGENShop is the first project that is part of the training at OXYGEN Academy.</p>
              <div className="homepage__project__links is-flex mt-4">
                <div>
                  <a className="button mr-4" href="https://makie2020.github.io/OxygenShop/">Live Site</a>
                </div>
                <div><a className="button" href='https://github.com/Makie2020/OxygenShop'>See Code</a></div>
              </div>
            </div>
          </div>
        </div>  

        <div className="homepage__project my-6">
          <img src={"../../Portfolio/assets/images/BuscoPhoto.png"} alt='Buscophoto App' className="homepage__project__img"/>          
          <div className="homepage__project__text-container pl-6">
            <div className="homepage__project-text">
              <h2 className='title'>Buscophoto</h2>
              <p>The Search Photo App is the third project that is part of the training at OXYGEN Academy.It is a dashboard to download and manage images. You have the option to save you favourite images in a Gallery.</p>
              <div className="homepage__project__links is-flex mt-4">
                <div>
                  <a className="button mr-4" href="https://makie2020.github.io/PhotoSearchReactApp/">Live Site</a>
                </div>
                <div><a className="button" href='https://github.com/Makie2020/PhotoSearchReactApp'>See Code</a></div>
            </div>
           </div>
          </div>
        </div>
        <div className="homepage__project mb-6">
          <img src={"../../Portfolio/assets/images/Coming soon.png"} alt='Buscophoto App' className="homepage__project__img"/>             
          <div className="homepage__project__text-container pl-6">
            <div className="homepage__project-text">
              <h2 className='title'>Hotel Miranda</h2>
              <p>Coming soon....</p>
              <div className="homepage__project__links is-flex mt-4">
                <div>
                  <a className="button mr-4" href="">Live Site</a>
                </div>
                <div><a className="button">See Code</a></div>
              </div>
            </div>
          </div>
        </div>  
        <NavLink className='is-size-4 ml-6 button is-centered' to='/projects'>See more</NavLink>
      </section>  
      <section className="homepage__technologies">
        <div className='homepage__section'>
          <span className="homepage__section__span__tech"></span>
          <h2 className="homepage__section__header">Technologies</h2>
        </div>
        <div className="homepage__tech__container">
          <div className="homepage__tech is-flex is-justify-content-center">
            <FaReact className='homepage__icon'/>
            <FaJsSquare className='homepage__icon'/>
            <FaHtml5 className='homepage__icon'/>
            <FaCss3Alt className='homepage__icon'/>
          </div>
        </div>
      </section>    
    </div>
  );
}
export default HomePage
