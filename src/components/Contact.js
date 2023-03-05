import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        user_name: '', user_email: '', message: ''
    });
    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();

        if(formData.user_name === '' || formData.user_email === '' || formData.message === '') {
            alert('Please fill all the blanks.')
            return;
        }
    
        emailjs.sendForm('service_teasun8', 'template_nbt8b75', form.current, 'OowmON-GXnptQHvB2')
          .then((result) => {
              console.log(result.text);
              setFormData({
                user_name: '', user_email: '', message: ''
            });
          }, (error) => {
              console.log(error.text);
          });
      };

      const handleChange = e => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        });
      }

    return (
        <div id="contact" className="contact-container">
            <div>
                <h2 className="contact-title">Contact</h2>
            </div>
            <div className="form-container">
                <form ref={form} className="form" onSubmit={sendEmail}>
                    <label>Name</label>
                    <input className='name-input' onChange={handleChange} value={formData.user_name} type="text" name="user_name" />
                    <label>Email</label>
                    <input className='email-input' onChange={handleChange} value={formData.user_email} type="email" name="user_email" />
                    <label>Message</label>
                    <textarea className='textarea' onChange={handleChange} value={formData.message} name="message" />
                    <input className='btn' type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}

export default Contact;