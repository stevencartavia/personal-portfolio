import React from 'react'
import { Link } from 'react-router-dom'
import { social } from '../Data';

const Home = () => {
    return (
        <div className="max-w-[250px] absolute bottom-0 right-0 p-4 text-white">
            <p className='py-4'>Based in Costa Rica, I'm a Front-End Developer passionate about crafting visually appealing and user-friendly digital experiences. Excited about opportunities to learn and contribute.</p>
            <Link to='work'>
            <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">View Work</button>
            </Link>
            <div className='py-3'>
                <ul className='flex flex-row justify-center items-center gap-4 text-white'>
                    {social.map(soc => (
                        <li key={soc.link}>                        
                            <a href={soc.link} target='_blank'>
                                {soc.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Home