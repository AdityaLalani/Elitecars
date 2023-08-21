import React from 'react';
import { motion, useInView, useAnimation, useIsPresent, delay } from 'framer-motion'
import { useEffect, useRef } from 'react'
import whiteluxury from '../assets/whiteluxury.png'
function Home() {
    return (
        <div className='h-screen flex flex-col justify-between items-center mt-0 bg-gradient-to-tl from-black to-silver  opacity-1  w-full overflow-none relative'>
            <img src="https://i.pinimg.com/736x/d2/02/59/d202595d71a6e8a71f6f2b28e5723604.jpg" alt="" className='w-full h-screen object-cover absolute mix-blend-overlay opacity-90 z-[1]' id='home' />

            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
                className='absolute  flex flex-col justify-center items-center bg-black   z-10 w-full  mt-5'>
                <span className='font-poppins text-silver font-thin text-[2rem] m-3'>
                    Meet Your New Car
                </span>
                <h1 className='font-poppins text-white font-bold text-[2.5rem] m-3 border px-5 py-2 opacity-100'>
                    Audi A5 Cabriolet
                </h1>
            </motion.div>
            <motion.div className='mt-auto'
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1 }}
            >
                <img src={whiteluxury} alt="" className='relative z-[2] mb-10 ' />
            </motion.div>
        </div>
    );
}

export default Home;
