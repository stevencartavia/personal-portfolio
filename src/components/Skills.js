import React from 'react'
import { skills } from '../Data';

const Skills = () => {
    return (
        <div name='skills' className='max-w-[220px] sm:max-w-[600px] absolute bottom-0 right-0 p-4 text-white'>
            <p className='px-2'>Technologies I've worked with</p>
            <div className='ov grid grid-cols-2 sm:grid-cols-3 gap-4 text-center p-2 overflow-y-auto scroll'>
                {skills.map(skill => (
                    <div key={skill.name} className='cd rounded shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto p-2 mt-3' src={skill.img} alt={skill.name} />
                        <p className='my-2'>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills