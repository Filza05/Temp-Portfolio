import React, { useState } from 'react'
import logo from '../Assets/lizz.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [menubtn, setMenuBtn] = useState(false);

    function handleClick() {
        setMenuBtn(!menubtn);
    }

    return (
        <div className='fixed h-[80px] w-full flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={logo} alt='logo' style={{ width: '100px' }} />
            </div>

            {/*menu*/}
            <ul className='hidden md:flex'>
                <li className='hover:text-pink-600 duration-700'>
                    <Link to="home" smooth={true} duration={800}>
                        Home
                    </Link>
                </li>
                <li className='hover:text-pink-600 duration-700'>
                    <Link to="about" smooth={true} duration={800}>
                        About
                    </Link>
                </li>
                <li className='hover:text-pink-600 duration-700'>
                    <Link to="skills" smooth={true} duration={800}>
                        Skills
                    </Link>
                </li>
                <li className='hover:text-pink-600 duration-700'>
                    <Link to="work" smooth={true} duration={800}>
                        Work
                    </Link>
                </li>
                <li className='hover:text-pink-600 duration-700'>
                    <Link to="contact" smooth={true} duration={800}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/*Hamburger*/}
            <div className='md:hidden z-10' onClick={handleClick}>
                {menubtn ? <FaTimes size={20} /> : <FaBars />}
            </div>
            {/*mobileMenu*/}
            <ul className={menubtn ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' : 'hidden'}>
                <li className='py-6 text-4xl hover:text-pink-600 duration-700'>
                <Link onClick={handleClick} to="about" smooth={true} duration={800}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600 duration-700'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={800}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600 duration-700'>
                <Link onClick={handleClick} to="home" smooth={true} duration={800}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600 duration-700'>
                <Link onClick={handleClick} to="work" smooth={true} duration={800}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600 duration-700'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={800}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/*SocialIcons*/}
            <div className='flex flex-col fixed top-[35%] left-0'>
                <ul>
                    <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                            Gmail <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-amber-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar