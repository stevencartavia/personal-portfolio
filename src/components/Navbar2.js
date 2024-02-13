import React from 'react'
import { Link } from 'react-router-dom';

const Navbar2 = () => {
    return (
        <div className='text-white'>
            <h1 className='text-3xl sm:text-5xl'>Steven Cordero</h1>
            <p className='text-1xl py-2'>Front End Developer</p>
            <div className='sm:py-8 w-fit'>
                <ol>
                    <li className='py-2 w-fit'> <Link to="/" duration={500}>Home</Link></li>
                    <li className='py-2 w-fit'><Link to="skills" duration={500}>Skills</Link></li>
                    <li className='py-2 w-fit'><Link to="work" duration={500}>Work</Link></li>
                    <li className='py-2 w-fit'><Link to="contact" duration={500}>Contact</Link></li>
                </ol>
            </div>
        </div>
    );
}

export default Navbar2