import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Typed from 'react-typed';
import { Link } from 'react-scroll'


const Hero = () => {
    return (
        <div name='home' className='bg-[#0a192f] h-screen w-full text-gray-300'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600 text-2xl'>Hi, My Name is </p>
                <Typed
                    className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'
                    strings={['Filza Khan Tareen']}
                    typeSpeed={200} backSpeed={60} onComplete={(self) => self.cursor.remove()}
                />
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a Front-end Web-Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>But I must explain to you how all this mistaken idea of denouncing pleasure and
                    praising pain was born and I will give you a complete account of the system, and
                    expound the actual teachings of the great explorer of the truth, the master-builder
                    of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it
                    is pleasure, but because those who do not know how to pursue pleasure rationally
                    encounter consequences that are extremely painful. </p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex justify-between gap-2 items-center hover:bg-red-500 hover:border-red-500'><Link to="work" smooth={true} duration={800}>
                      View Work
                    </Link>
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight />
                    </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero