import React from 'react';
import about from '../assets/about.png';
import blackandgold from '../assets/blackandgold.jpg';
import { motion, useAnimation, useIsPresent, delay } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

function Deals() {
    const backgroundStyle = {
        backgroundImage: `url(${blackandgold})`,
    };

    const { ref, inView } = useInView()
    const animation = useAnimation()

    useEffect(() => {
        // console.log(inView)
        if (inView) {
            animation.start({
                opacity: 1,
                transition: {
                    delay: 1.5
                }
            })
        }

    }, [inView])
    return (
        <section className='mt-[-2rem]' id='aboutus' >

            <div className='realtive z-[5] mt-[3rem] bg-no-repeat bg-cover h-screen w-full' style={backgroundStyle} >
                <div ref={ref}>
                    <motion.div className='flex justify-center flex-col items-center '
                        initial={{ opacity: 0 }}
                        animate={animation}
                    >
                        <div className='text-white font-poppins font-medium text-[2rem]'>About Us</div>
                        <div className='text-white font-poppins font-bold text-[3rem]'> Best Customer Experience</div>
                    </motion.div>
                </div>
                <motion.div className='flex flex-row justify-between mt-[5rem]' initial={{ opacity: 0 }}
                    animate={animation}>
                    <div><img src={`${about}`} alt="" className='h-[20rem] w-[29rem]' /></div>
                    <p className='text-white w-[50rem] mt-[3rem] font-normal text-[1.2rem]'>Elevate your driving experience with Elite. Offering an exclusive fleet of meticulously maintained luxury vehicles, we bring you the epitome of style and performance. Whether it's a special occasion, a weekend getaway, or a desire for luxury, our handpicked selection of high-end cars caters to your every need. From elegant sedans to powerful SUVs, experience the thrill of driving iconic brands. Our seamless booking process ensures convenience, while our exceptional service guarantees a flawless journey. Discover the joy of driving without ownership commitments. Make a statement, create memories, and relish the prestige of luxury with our top-tier car rental service. Your extraordinary ride awaits.</p>

                </motion.div>
            </div>
        </section>
    )
}

export default Deals;
