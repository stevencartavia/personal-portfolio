import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();

        if(contact === '' || email === '' || message === '') {
            alert('Please fill all the blanks.')
            return;
        }
    
        emailjs.sendForm('service_teasun8', 'template_nbt8b75', form.current, 'OowmON-GXnptQHvB2')
          .then((result) => {
              console.log(result.text);
              setContact('');
              setEmail('');
              setMessage('');
          }, (error) => {
              console.log(error.text);
          });
      };

      const handleContactChange = e => {
        setContact(e.target.value);
      }

      const handleEmailChange = e => {
        setEmail(e.target.value);
      }

      const handleMessageChange = e => {
        setMessage(e.target.value);
      }

    return (
        <div id="contact" className="contact-container">
            <div>
                <h2 className="contact-title">Contact</h2>
            </div>
            <div className="form-container">
                <form ref={form} className="form" onSubmit={sendEmail}>
                    <label>Name</label>
                    <input className='name-input' onChange={handleContactChange} value={contact} type="text" name="user_name" />
                    <label>Email</label>
                    <input className='email-input' onChange={handleEmailChange} value={email} type="email" name="user_email" />
                    <label>Message</label>
                    <textarea className='textarea' onChange={handleMessageChange} value={message} name="message" />
                    <input className='btn' type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}

export default Contact;