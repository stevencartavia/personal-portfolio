import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const Contact = () => {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            toast.info('Please fill in all the fields.')
            return;
        }
    
        emailjs.sendForm('service_6f5omsd', 'template_mu2xr6i', form.current, 'OowmON-GXnptQHvB2')
          .then((result) => {
              console.log(result.text);
              toast.success('Email sent successfully!');
          }, (error) => {
              console.log(error.text);
        });

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div name='contact' className='ov absolute bottom-0 right-0 p-4 sm:w-[300px] w-[250px]'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
                <p className='pb-3 text-white'>Contact</p>
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Name' name='user_name' className='bg-[#e7eaf5] p-2 rounded' />
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' name='user_email' className='my-4 p-2 bg-[#e7eaf5] rounded' />
                <textarea value={message} onChange={e => setMessage(e.target.value)} name="message" rows={5} className='bg-[#e7eaf5] p-2 rounded' placeholder='Message'></textarea>
                <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2 mt-3">Send</button>
            </form>
        </div>
    )
}

export default Contact