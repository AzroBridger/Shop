import React, { useState } from 'react'
import Footer from './Footer';
import './styles/NavBar.css';
import './styles/Help.css'
import NavBar from './NavBar';



const Help = () => {
  const [message, setMessage] = useState(String)
  const [email, setEmail] = useState(String)
  const [name, setName] = useState(String)
  const [subject, setSubject] = useState(String)
  
  return (
    <div className='width'>
        <header>
            <span className='logo_header_header'>House Staff</span>
            <NavBar url = 'help'/>
            
          </header>      
        <section className="contact-section">
          <div >
            <div className='set_color'>
              <div className='setter_map'>
                <form className="form-contact" method="post" id="contactForm" >
                  <div>
                    <h2 className="contact-title">Связаться с нами</h2>
                  </div>
                  <div>
                    <div>
                      <div className="form-group">
                          <textarea className="form-control form_message" name="message" id="message" cols="30" rows="9" placeholder = 'Enter Message' onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                      </div>
                    </div>
                    <div >
                      <div className="form-group">
                        <input className="form-control" name="name" id="name" type="text" placeholder = 'Enter your name' onChange={(e) => setName(e.target.value)} value={name}/>
                      </div>
                    </div>
                    <div >
                      <div className="form-group">
                        <input className="form-control" name="email" id="email" type="email" placeholder = 'Enter email address' onChange={(e) => setEmail(e.target.value)} value={email}/>
                      </div>
                    </div>
                    <div >
                      <div className="form-group">
                        <input className="form-control" name="subject" id="subject" type="text"  placeholder = 'Enter Subject' onChange={(e) => setSubject(e.target.value)} value={subject}/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="button boxed-btn">Send Message</button>
                  </div>
                  <div>
                  
                  </div>
                </form>
                <div className='mapping_help'>
                    <iframe className='border_map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.9386218843433!2d38.956057276647876!3d45.06675615986843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f045f71605aaff%3A0xb60a5bc7dea7333!2z0L_RgC3Rgi4g0JrQvtC90YHRgtCw0L3RgtC40L3QsCDQntCx0YDQsNC30YbQvtCy0LAsIDI1LCDQmtGA0LDRgdC90L7QtNCw0YAsINCa0YDQsNGB0L3QvtC00LDRgNGB0LrQuNC5INC60YDQsNC5LCAzNTAwNzg!5e0!3m2!1sru!2sru!4v1690737299470!5m2!1sru!2sru" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title = 'My frame'></iframe>
                  </div>
              </div>

            </div>
              <div >
                <div className="media contact-info">
                  <span className="contact-info__icon"><i></i></span>
                  <div className="media-body">
                    <h3>Krasnodarskiy Kray, Russia.</h3>
                    <p>Krasnodar, 350078</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                  <div className="media-body">
                    <h3>8-(800)-555-35-35</h3>
                    <p>Mon to Fri 9am to 6pm</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon"><i className="ti-email"></i></span>
                  <div className="media-body">
                    <h3>support@housestaff.com</h3>
                    <p >Send us your query anytime!</p>
                  </div>
                </div>
              </div>
              
            
          </div>
        </section>
        
        <Footer/>
    </div>
    
  )
}

export default Help
