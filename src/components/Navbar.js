import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from 'react-icons/hi'
import Logo from '../assets/logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);
    // bg-[#0a192f]
    return (
        <div className='w-full bg-[#0a192f] flex justify-between items-center px-4 text-gray-300'>
            <div>
                <Link to="/" duration={500}>
                    <img src={Logo} alt="Logo Image" className='w-[70px] cursor-pointer' />
                </Link>
            </div>

            {/* Menu */}
            <ul className='flex'>
                <li className='hidden sm:block'>
                    <Link to="/" duration={500}>Home</Link>
                </li>
                {/* <li>
                    <Link to="about" duration={500}>About</Link>
                </li> */}
                <li>
                    <Link to="skills" duration={500}>Skills</Link>
                </li>
                <li>
                    <Link to="work" duration={500}>Work</Link>
                </li>
                <li>
                    <Link to="contact" duration={500}>Contact</Link>
                </li>
            </ul>

            {/* <div className='md:hidden flex justify-center items-center gap-9 w-full'>
                <a className='hover:text-gray-500' href="https://www.linkedin.com/in/stevencartavia/" target='_blank'><FaLinkedin size={30}/></a>
                <a className='hover:text-gray-500' href="https://github.com/stevencartavia" target='_blank'><FaGithub size={30}/></a>
                <a className='hover:text-gray-500' href="https://twitter.com/stevencartavia" target='_blank'><FaSquareXTwitter size={30}/></a>
                <a className='hover:text-gray-500' href="mailto: corderosteven6@gmail.com" target='_blank'><HiOutlineMail size={30}/></a>
            </div> */}

            {/* Hamburguer */}
            {/* <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars className='cursor-pointer' /> : <FaTimes className='cursor-pointer' />}
            </div> */}

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" duration={500}>Home</Link>
                </li>
                {/* <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" duration={500}>About</Link>
                </li> */}
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" duration={500}>Skills</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" duration={500}>Work</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" duration={500}>Contact</Link>
                </li>
            </ul>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                        <a 
                            href="https://www.linkedin.com/in/stevencartavia/" target='_blank'
                            className='flex justify-between items-center w-full text-gray-300'
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a 
                            href="https://github.com/stevencartavia" target='_blank'
                            className='flex justify-between items-center w-full text-gray-300'
                        >
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[black]'>
                        <a 
                            href="https://twitter.com/stevencartavia" target='_blank'
                            className='flex justify-between items-center w-full text-gray-300'
                        >
                            X <FaSquareXTwitter size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a 
                            href="mailto: corderosteven6@gmail.com" target='_blank'
                            className='flex justify-between items-center w-full text-gray-300'
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar