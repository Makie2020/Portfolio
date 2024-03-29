import './ProjectPage.css'

function ProjectPage() {
  return (
    <div className='projects'>
      <section>
        <div className="projects-header">
          <span className="projectpage__section__span "></span>
          <h2 className="projectpage__section__header">Projects</h2>
        </div>
        <div className="projects card mt-6">
          <img src={"../../Portfolio/assets/images/OxygenShop.png"} alt='OxygenShop App' className="card-image"/>
          <div className="projects-container card-content pl-6">
            <div className="projects-text">
              <h2 className='title'>OxygenShop</h2>
              <p className='subtitle'>OXYGENShop is the first project that is part of the training at OXYGEN Academy.</p> 
              <p className='subtitle is-6'>A 100% responsive landing page, made with HTML5, CSS3 and JavaScript, using SASS and BEM. The second part of the project was adding functionalities with JavaScript.</p>

              <p className='has-text-weight-semibold is-size-6'>The page has the following features:</p>
              <ul>
                <li className='is-size-6'>- Validation of the form</li>
                <li className='is-size-6'>- Collect form data and send it to a JSON server for testing.</li>
                <li className='is-size-6'>- Popup (/modal) of 'Subscribe to our newsletter' that appears after 5 seconds, or when the user scrolls down 25% of the page. </li>
                <li className='is-size-6'>- Currency selector (EUR, USD, GBP), get exchange rates from an API.</li>
                <li className='is-size-6'>- An image slider.</li>
              </ul>
              <div className="is-flex mt-4">
                <div>
                  <a className="button mr-4" href="https://makie2020.github.io/OxygenShop/">Live Site</a>
                </div>
                <div><a className="button" href='https://github.com/Makie2020/OxygenShop'>See Code</a></div>
              </div>
            </div>
          </div>
        </div> 
        <div className="projects card mt-6">
          <img src={"../../Portfolio/assets/images/BuscoPhoto.png"} alt='Buscophoto App' className="card-image"/>          
          <div className="projects-container card-content pl-6">
            <div className="projects-text">
                <h2 className='title'>Buscophoto</h2>
                <p className='subtitle'>OXYGENShop is the next project that is part of the training at OXYGEN Academy.</p> 
                <p className='subtitle is-6'>This app is created with Create-React-App, React-Router, Redux (with redux template). It is a dashboard to download and manage images. You have the option to save you favourite images in a Gallery.</p>
                <p className='has-text-weight-semibold is-size-6'>The page has the following features:</p>
                <ul>
                  <li className='is-size-6'>- A dashboard to download and manage images.</li>
                  <li className='is-size-6'>- The page has a 'Search' page, where the user can search for images on Unsplash using its API.</li>
                  <li className='is-size-6'>- You can select 'Add to my photos' and import the image to your personal collection.  </li>
                  <li className='is-size-6'>- On the page 'My photos' you can view the images you have imported and details of the images like: width, height, likes, date added.</li>
                  <li className='is-size-6'>- - You are able to filter the photos with a 'Search descriptions' field, and see only the images whose descriptions contain what you searched for.</li>
                  <li className='is-size-6'>- You are able to delete images from your collection, and modify the description.</li>
                  <li className='is-size-6'>- You are able to sort images by import date, width, height and likes. </li>
                  <li className='is-size-6'>- There is a 'Download' option that downloads the image from its 'full' URL.</li>
                </ul>
                <div className="is-flex mt-4">
                  <div>
                    <a className="button mr-4" href="https://makie2020.github.io/PhotoSearchReactApp/">Live Site</a>
                  </div>
                  <div><a className="button" href='https://github.com/Makie2020/PhotoSearchReactApp'>See Code</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="projects card mt-6">
          <img src={"../../Portfolio/assets/images/WebsiteMiranda.png"} alt='Buscophoto App' className="card-image"/>             
          <div className="projects-container card-content pl-6">
            <div className="projects-text">
              <h2 className='title'>Website Hotel Miranda</h2>
              <p className='subtitle'>The dahboard Hotel Miranda project is the second part of the Sprints at OXYGEN Academy.</p> 
                <p className='subtitle is-6'>The website is build with HTML, CSS and Javascript. The styling of the site is done with SASS with a BEM pattern. There is a version mobile and a Desktop version. SwiperJs is used for the Swipers. </p>
              <div className="is-flex mt-4">
                <div>
                  <a className="button mr-4" href="https://makie2020.github.io/Miranda-Website/">Live Site</a>
                </div>
                <div><a className="button" href='https://github.com/Makie2020/Miranda-Website'>See Code</a></div>
              </div>
            </div>
          </div>
        </div>  
        <div className="projects card mt-6">
          <img src={"../../Portfolio/assets/images/Dashboard.png"} alt='Buscophoto App' className="card-image"/>             
          <div className="projects-container card-content pl-6">
            <div className="projects-text">
              <h2 className='title'>Dashboard Hotel Miranda</h2>
              <p className='subtitle'> Dashboard Hotel Miranda is the second project of the Sprints at OXYGEN Academy.</p> 
                <p className='subtitle is-6'>This app is also created with Create-React-App, React-Router, Redux, Typescript. The idea for the dashboard is to make an interactive platform for the employees to see what rooms are availible or booked, create new bookings, search for a specific booking or editing a booking. Also you have to possibilty to add new employees and see the reviews of the clients. All the data is stored in an database from MongoDb, see the next project. </p>
              <div className="is-flex mt-4">
                <div>
                  <a className="button mr-4" href="https://makie2020.github.io/dashboard/">Live Site</a>
                </div>
                <div><a className="button" href='https://github.com/Makie2020/dashboard'>See Code</a></div>
              </div>
            </div>
          </div>
        </div>  
        <div className="projects card mt-6">
          <img src={"../../Portfolio/assets/images/Database.jpg"} alt='Buscophoto App' className="card-image"/>             
          <div className="projects-container card-content pl-6">
            <div className="projects-text">
              <h2 className='title'>Backend Hotel Miranda</h2>
              <p className='subtitle'> Database Hotel Miranda is the last project of the Sprints at OXYGEN Academy.</p> 
                <p className='subtitle is-6'>This application is made in Node Express and the database is hosted in MongoDb. There is also a version of the database in MySQL. </p>
              <div className="is-flex mt-4">
                <div><a className="button" href='https://github.com/Makie2020/Miranda-Node'>See Code</a></div>
              </div>
            </div>
          </div>
        </div>  
      </section>    
    </div>
  );
}
export default ProjectPage
