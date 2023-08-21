import { motion, useAnimation, useIsPresent, delay } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import React from 'react'
import car1 from '../assets/car1.jpg'
import car2 from '../assets/car2.jpg'
import car3 from '../assets/car3.jpg'
import car4 from '../assets/car4.jpg'
import car5 from '../assets/car5.jpg'
import car6 from '../assets/car6.jpg'
import blackGold from '../assets/blackGold.jpg'

function Sellers() {
    const backgroundStyle = {
        backgroundImage: `url(${blackGold})`,
        opacity: 1
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
        <section style={backgroundStyle} className='object-fill bg-cover mt-10 h-full bg-repeat-y z-[1]' id='cars'>
            <div className='relative z-[2]'>
                <div className='flex flex-col justify-center align-middle items-center '>
                    <span className='text-white font-light text-[2rem] bg-slate-500 w-[15rem] flex justify-center'>Best Services</span>
                    <span className='text-white font-bold text-[3rem]'> Explore Out Top Deals </span>
                    <span className='text-white font-bold text-[3rem]'> From Top Rated Sellers </span>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={animation}
                    className='flex flex-row flex-wrap  justify-between' ref={ref} >
                    <div className='h-[25rem] w-[20rem] m-[2rem] mx-[3rem] bg-slate-200 hover:shadow-lg hover:shadow-zinc-50'>
                        <img src={car1} alt="" />
                        <div className='flex flex-col mt-[1rem] mx-[0.5rem]'>
                            <span className="text-black font-poppins w-[10rem] h-[2.7rem] text-[1.5rem] font-medium">Honda Civic</span> <hr /> <br />
                            <span className='text-darkOrange font-poppins text-[1.2rem] mb-7 font-medium'>Rate: ₹500/hr</span> <br />
                            <button className='bg-blue-700 w-full font-poppins text-[1.1rem] my-[-2rem] text-white font-normal hover:bg-golden transition-all ease-in-out '>Rent Now</button>
                        </div>
                    </div>
                    <div className='h-[25rem] w-[20rem] m-[2rem] mx-[3rem] bg-slate-200 hover:shadow-lg hover:shadow-zinc-50'>
                        <img src={car2} alt="" />
                        <div className='flex flex-col mt-[1rem] mx-[0.5rem]'>
                            <span className="text-black font-poppins w-[10rem] h-[2.7rem] text-[1.5rem] font-medium">Honda Civic</span> <hr /> <br />
                            <span className='text-darkOrange font-poppins text-[1.2rem] mb-7 font-medium'>Rate: ₹500/hr</span> <br />
                            <button className='bg-blue-700 w-full font-poppins text-[1.1rem] my-[-2rem] text-white font-normal hover:bg-golden transition-all ease-in-out '>Rent Now</button>
                        </div>
                    </div><div className='h-[25rem] w-[20rem] m-[2rem] mx-[3rem] bg-slate-200 hover:shadow-lg hover:shadow-zinc-50'>
                        <img src={car3} alt="" className='w-full h-[13rem]' />
                        <div className='flex flex-col mt-[1rem] mx-[0.5rem]'>
                            <span className="text-black font-poppins w-[10rem] h-[2.7rem] text-[1.5rem] font-medium">Honda Civic</span> <hr /> <br />
                            <span className='text-darkOrange font-poppins text-[1.2rem] mb-7 font-medium'>Rate: ₹500/hr</span> <br />
                            <button className='bg-blue-700 w-full font-poppins text-[1.1rem] my-[-2rem] text-white font-normal hover:bg-golden transition-all ease-in-out '>Rent Now</button>
                        </div>
                    </div><div className='h-[25rem] w-[20rem] m-[2rem] mx-[3rem] bg-slate-200 hover:shadow-lg hover:shadow-zinc-50'>
                        <img src={car4} alt="" />
                        <div className='flex flex-col mt-[1rem] mx-[0.5rem]'>
                            <span className="text-black font-poppins w-[10rem] h-[2.7rem] text-[1.5rem] font-medium">Honda Civic</span> <hr /> <br />
                            <span className='text-darkOrange font-poppins text-[1.2rem] mb-7 font-medium'>Rate: ₹500/hr</span> <br />
                            <button className='bg-blue-700 w-full font-poppins text-[1.1rem] my-[-2rem] text-white font-normal hover:bg-golden transition-all ease-in-out '>Rent Now</button>
                        </div>
                    </div><div className='h-[25rem] w-[20rem] m-[2rem] mx-[3rem] bg-slate-200 hover:shadow-lg hover:shadow-zinc-50'>
                        <img src={car5} alt="" />
                        <div className='flex flex-col mt-[1rem] mx-[0.5rem]'>
                            <span className="text-black font-poppins w-[10rem] h-[2.7rem] text-[1.5rem] font-medium">Honda Civic</span> <hr /> <br />
                            <span className='text-darkOrange font-poppins text-[1.2rem] mb-7 font-medium'>Rate: ₹500/hr</span> <br />
                            <button className='bg-blue-700 w-full font-poppins text-[1.1rem] my-[-2rem] text-white font-normal hover:bg-golden transition-all ease-in-out '>Rent Now</button>
                        </div>
                    </div><div className='h-[25rem] w-[20rem] m-[2rem] mx-[3rem] bg-slate-200 hover:shadow-lg hover:shadow-zinc-50'>
                        <img src={car6} alt="" />
                        <div className='flex flex-col mt-[1rem] mx-[0.5rem]'>
                            <span className="text-black font-poppins w-[10rem] h-[2.7rem] text-[1.5rem] font-medium">Honda Civic</span> <hr /> <br />
                            <span className='text-darkOrange font-poppins text-[1.2rem] mb-7 font-medium'>Rate: ₹500/hr</span> <br />
                            <button className='bg-blue-700 w-full font-poppins text-[1.1rem] my-[-2rem] text-white font-normal hover:bg-golden transition-all ease-in-out '>Rent Now</button>
                        </div>
                    </div>


                </motion.div>
            </div>
        </section>
    )
}

export default Sellers