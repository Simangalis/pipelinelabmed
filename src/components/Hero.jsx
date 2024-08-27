import React from 'react'
import heroImg from "../assets/homecircle-1.png"
import { FaCircleArrowRight } from "react-icons/fa6";
import {motion} from "framer-motion"
import {fadeIn} from "../utilis/animationVariants"

const Hero = () => {
  const handleScroll = () => {
    document.querySelector('#products').scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <section id='home' className=' relative bg-cover bg-center py-0 bg-working-img'>
      <div className='bg-heroBg text-white flex items-center pt-28 md:h-screen bg-opacity-95'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full'>
        {/*left side */}

        <motion.div 
        variants={fadeIn('down',0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        className='md:w-1/2'>
        <h1 className='text-4xl font-secondary font-bold mb-4 mdw-3/5 leading-snug'>
        Your Reliable Lab Solutions For Every Scientific Discipline
        </h1>
        <p className='text-md mb-12 md:pr-8'>
        Pipeline Labmed Supplies (PTY) LTD is a company based in Eswatini (Swaziland) which specializes in providing a comprehensive range of
        scientific instruments, glassware, chemicals, and lab supplies to research, educational, and
        industrial laboratories.
        </p>
        <button 
              className='bg-primary text-white py-3.5 px-8 font-bold rounded-md hover:bg-primary/90'
              onClick={handleScroll}
            >
              <div className='flex gap-1 items-center'>
                <span>Find Out More</span>
                <FaCircleArrowRight />
              </div>
            </button>

        </motion.div>

        {/*right side */}

        <motion.div 
         variants={fadeIn('left',0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.7}}
        className='md:w-1/2 h-full'>
        <img
          src={heroImg}
          alt="hero image"
          className="w-full object-cover rounded-t-[80px] shadow-[0px_4px_15px_rgba(0,0,0,0.3)]"
          style={{ borderRadius: '40%', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)' }}
        />
       

        </motion.div>
      </div>
      </div>
   
    </section>
  )
}

export default Hero
