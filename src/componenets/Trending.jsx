import React from 'react'
import logo from '../assets/logo.png'
import goldenlines from '../assets/goldenlines.jpg'
import { motion, useAnimation, useIsPresent, delay } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

function Trending() {

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
        <section className={`h-screen bg-black mt-9`} id='useelite'>
            <img src={goldenlines} alt="" className='w-full h-screen object-fill absolute opacity-30 ' />
            <div className='relative z-[2]'>
                <div >
                    <div className='flex items-center justify-center'>
                        <span className='text-white font-poppins text-[4rem] font-bold'>
                            How to use
                            <span className='text-golden font-poppins text-[4rem] font-bold'> Elite</span>

                            <span className='text-white font-poppins text-[4rem] font-bold'>?</span>
                        </span>
                    </div>
                </div>


                {/* ---------------------------------------------------- */}


                <div className='mt-14 flex flex-row justify-evenly' ref={ref}>

                    <div className='flex flex-col'>
                        {/* 1st */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={animation}

                            className='text-white font-poppins font-semibold text-[1.75rem] flex justify-start m-[1.5rem]'>
                            1️⃣ Fill in the personal details and choose your desired brand and model

                        </motion.div>

                        {/* 2nd */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={animation}
                            className='text-white font-poppins font-semibold text-[1.75rem] flex justify-start m-[1.5rem]'>
                            2️⃣ Select the time period for requirement
                        </motion.div>

                        {/* 3rd */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={animation}
                            className='text-white font-poppins font-semibold text-[1.75rem] flex justify-start m-[1.5rem]'>
                            3️⃣ Select the payment option for advance payment
                        </motion.div>

                        {/* 4th */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={animation}
                            className='text-white font-poppins font-semibold text-[1.75rem] flex justify-start m-[1.5rem]'>
                            4️⃣ The car will be delivered within 24 hours to you
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={animation}
                        className='flex justify-center items-top mb-16'>
                        <img src={logo} alt="" />

                    </motion.div>
                </div>
            </div>

        </section>
    )
}

export default Trending