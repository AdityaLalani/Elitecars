import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll'

function Navbar() {
    return (
        <section>
            <div>
                <ul className='flex justify-center md:justify-between items-center bg-black md:h-[6rem] px-5 py-2'>
                    <div className='mt-3 md:m-0'>
                        <a href="/"><img className='h-[5rem] w-[4.5rem]' src={logo} alt="" /></a>
                    </div>
                    <li className={`p-5 md:p-10 text-white font-poppins text-sm md:text-base cursor-pointer hover:text-golden transition-all`}><Link activeClass="active" to="useelite" spy={true} smooth={true} offset={50} duration={500}>How to Use Elite?</Link></li>
                    <li className={`p-5 md:p-10 text-white font-poppins text-sm md:text-base cursor-pointer hover:text-golden transition-all`}><Link activeClass="active" to="cars" spy={true} smooth={true} offset={50} duration={500}>Cars Available</Link></li>
                    <li className={`p-5 md:p-10 text-white font-poppins text-sm md:text-base cursor-pointer hover:text-golden transition-all`}><Link activeClass="active" to="aboutus" spy={true} smooth={true} offset={50} duration={500}>About Us</Link></li>
                    <li className={`p-5 md:p-10 text-white font-poppins text-sm md:text-base cursor-pointer hover:text-golden transition-all`}><Link activeClass="active" to="testimonials" spy={true} smooth={true} offset={50} duration={500}>Testimonials</Link></li>
                </ul>
                <div className='border-b border-white'></div>
            </div>
        </section>
    );
}

export default Navbar;
