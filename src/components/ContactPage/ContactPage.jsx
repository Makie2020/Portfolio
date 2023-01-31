import './ContactPage.css'
import ContactForm from './ContactForm';

function ContactPage() {
  return (
    <div className='contact__section'>
      <span className="section__span"></span>
      <h2 className="section__header">Get in Touch</h2>

      <p className='mb-4'>I’m currently looking for any new opportunities, my inbox is always open. <br/> However, if you have other requests or questions, dont hesitate to contact me.</p>
      <ContactForm/>
    </div>
  );
}
export default ContactPage
