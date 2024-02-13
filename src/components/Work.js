import React from 'react'
import { projects } from '../Data'

const Work = () => {
    return (
        <div name='work' className='max-w-[500px] absolute bottom-0 right-0 p-4 text-white'>
            <p className='hidden sm:block p-2'>Some of my recent work/projects.</p>
            <div className='ov grid grid-cols-1 sm:grid-cols-2 gap-4 text-center h-[350px] p-2 overflow-y-auto scroll'>
                {projects.map(project => (
                    <div key={project.name} className="cd p-5 rounded-lg shadow">
                        <h5 className="mb-2 text-2xl font-bold">{project.name}</h5>
                        <p className="mb-3 h-[150px] sm:h-[200px]">{project.desc}</p>
                        <a href={project.code} target='_blank' className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">
                            Code
                        </a>
                        <a href={project.demo} target='_blank' className="text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-l font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">
                            Demo
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work