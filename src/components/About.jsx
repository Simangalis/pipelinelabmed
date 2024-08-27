import { color } from 'framer-motion';
import React from 'react';
import {motion} from "framer-motion"
import {fadeIn} from "../utilis/animationVariants"

const About = () => {

  const cardData = [
    {
      heading: 'Compassion',
      paragraph: 'Provide the best diagnostic services by fulfilling our customers.',
      color:'blue',
    },
    {
      heading: 'Value',
      paragraph: 'Be disciplined, have good character and positive attitudes.',
    },
    {
      heading: 'Team Based Care',
      paragraph: 'Execute all assigned tasks and duties with a strong team spirit.',
    },
    {
      heading: 'Commitment',
      paragraph: 'Acquire technical skill and expertise in all areas of operation. Practice modern management principles',
    },
    {
      heading: 'Excellence',
      paragraph: 'Diligently follow all standard operating procedures to deliver high performance. Apply advanced technology and quality control measures to provide standardized and reproducible data.',
    },
    {
      heading: 'Quality',
      paragraph: 'Delivering what is required with the best standards',
    },
    {
      heading: 'Integrity',
      paragraph: 'Being Honest & doing what is right.',
    },
  ];

  const colors = [
    'bg-[#C5E7F9]',
    'bg-[#8AB4F8]',
    'bg-[#76B9D5]',
    'bg-[#CDE7DB]',
    'bg-[#69CFCB]',
    'bg-[#BADAE1]',
    'bg-[#00AEEF]',
  ];
  return (
    <div id='about' className='bg-[#f7f8fc] '>
      <motion.div 
      variants={fadeIn('up',0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}} 
      className='pt-28 px-4 container mx-auto mb-12'>
        <div className='text-center space-y-5'>
          <h2 className='text-3xl font-bold font-secondary text-heroBg'>Our Mission</h2>
          <p className='md:w-1/2 mx-auto text-md'>
            Pipeline Labmed Supplies is committed to ensuring the expectations and requirements of
            our customers are consistently met and exceeded through continuous improvement,
            innovation and expansion.
          </p>
          <h3 className='text-2xl font-bold font-secondary text-heroBg'>Our Core Values</h3>
        </div>
        <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {cardData.map((card, index) => (
            <div key={index}  className={`shadow-lg border rounded-lg p-6 text-black cursor-pointer hover:bg-white hover:-translate-y-4 translate-all duration-300 ${colors[index % colors.length]}`}>
              <h4 className='text-md font-bold mb-4'>{card.heading}</h4>
              <p className='text-gray-900 text-md'>{card.paragraph}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default About;
