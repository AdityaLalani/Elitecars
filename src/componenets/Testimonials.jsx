import React from 'react';
import rev1 from '../assets/rev1.jpg';
import rev2 from '../assets/rev2.jpg';
import rev3 from '../assets/rev3.jpg';
import { motion, useAnimation, useIsPresent, delay } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

function TestimonialCard({ imageSrc, name, content }) {


    return (
        <div className='w-full md:w-[20rem] mx-auto md:mx-[3rem] mb-10 md:mb-0 md:mr-8 shadow-lg shadow-white'>
            <div className='flex justify-center items-center mt-[1rem]' >
                <img src={imageSrc} alt="" className='w-[11rem] h-[14rem] rounded-full flex justify-center items-center' />
            </div>
            <div className='text-white mt-[2rem] flex justify-center font-medium text-lg'>{name}</div>

            <p className='text-white mt-[2rem] p-5'>{content}</p>
        </div>
    );
}

function Testimonials() {
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
    const testimonials = [
        { imageSrc: rev1, name: 'James Tyson', content: "Experience opulence with Elite's luxury car rental. Unmatched elegance, impeccable service, and prestige on wheels. Elevate your journey today." },
        { imageSrc: rev2, name: 'Aman Sharma', content: "Experience opulence with Elite's luxury car rentals. Choose from our exquisite fleet for a memorable drive of sophistication." },
        { imageSrc: rev3, name: 'Kiara Smith', content: "Experience elegance with Elite's luxury car rentals. Unmatched style, exceptional service. Your journey, our prestige. Elevate your drive." },
    ];

    return (
        <section className='mt-10 bg-black w-full py-10' id='testimonials' ref={ref}>
            <motion.div animate={animation}>
                <div className='text-white font-poppins font-bold mb-11 text-center text-2xl md:text-3xl mt-[2rem]'>Testimonials</div>
                <div className='flex flex-col md:flex-row justify-center items-center md:items-stretch'>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Testimonials;
