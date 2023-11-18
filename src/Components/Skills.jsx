import React from 'react'
import cpp from '../Assets/c++.png'
import css from '../Assets/css.png'
import github from '../Assets/github.png'
import html from '../Assets/html.png'
import java from '../Assets/java.png'
import js from '../Assets/javascript.png'
import node from '../Assets/node.png'
import react from '../Assets/react.png'
import sql from '../Assets/sql.png'
import tw from '../Assets/tailwind.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies i've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-lg shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html} alt='html icon' />
                    <p className='my-2'>HTML</p>
                </div>
                <div className='shadow-lg shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css} alt='html icon' />
                    <p className='my-2'>CSS</p>
                </div>
                <div className='shadow-lg shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={js} alt='html icon' />
                    <p className='my-2'>Javascript</p>
                </div>
                <div className='shadow-lg shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={tw} alt='html icon' />
                    <p className='my-2'>Tailwind CSS</p>
                </div>
                <div className='shadow-lg shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt='html icon' />
                    <p className='my-2'>React</p>
                </div>
                <div className='shadow-lg shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
                    <img className='w-[8rem] mx-auto' src={java} alt='html icon' />
                    <p className='my-2'>Java</p>
                </div>
                <div className='shadow-lg shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={cpp} alt='html icon' />
                    <p className='my-2'>C++</p>
                </div>
                <div className='shadow-lg shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={sql} alt='html icon' />
                    <p className='my-2'>SQL</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills