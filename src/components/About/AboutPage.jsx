import './AboutPage.css'

function AboutPage() {
  return (
    <div className='about has-background-grey-lighter py-4'>
      <section className="about__section is-flex is-flex-direction-row" id="about">
        <div className="about__text is-flex is-flex-direction-column">
          <span className="section__span"></span>
          <h2 className="section__header">About Me</h2>
          <p>Hi, my name is Marieke Linneman, a  Junior Full-Stack Web Developer from Palma de Mallorca, Spain.</p><br/>
          <p>The technlogies I work with are HTML, Javascript, Css and React.</p>
        </div>
        <div className="about__image"><img src={"../../Portfolio/assets/images/Photo Marieke.jpg"} alt='Marieke' id='img'/></div>
      </section>
    </div>
  );
}
export default AboutPage
