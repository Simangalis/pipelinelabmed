import React from "react";
import {motion} from "framer-motion"
import {fadeIn} from "../utilis/animationVariants"

const industries = [
  {
    name: "Industrial Laboratory",
    description: "We sell products focused on research, development, and quality control in various industrial sectors.",
    products: ["Materials Testing Labs", "Pharmaceutical Labs", "Environmental Testing Labs"],
  },
  {
    name: "Health",
    description: "Our health medical products encompass a wide range of items designed to support the diagnosis, treatment, and management of health conditions.",
    products: ["Diagnostic Equipment", "Therapeutic Devices", "Personal Protective Equipment (PPE)"],
  },
  {
    name: "Education",
    description: "Our medical and laboratory products for educational purposes are designed to enhance learning and hands-on training in academic and research settings.",
    products: ["Microscopes", "Lab Kits", "Anatomy Models"],
  },
];

const Industries = () => {
  const handleScrollToContact = () => {
    const targetElement = documentsElementById('contact');
    if(targetElement){
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      })
    }
  }
  return (
    <div id="industries" className="relative bg-cover bg-working-img">
      <motion.div
      variants={fadeIn('up',0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
       className="bg-heroBg pt-10 mx-auto px-8 bg-opacity-95 pb-20">
        <div className="text-white text-center mt-10">
          <h2 className="text-4xl font-bold font-secondary mb-3">
            Industries In Which We Sell Our Products
          </h2>
          <p className="text-lg mb-12 md:w-2/3 mx-auto">
          Our high-quality medical and laboratory products are tailored for health, 
          education, and industrial laboratories. Our extensive range includes state-of-the-art diagnostic tools, 
          precision laboratory equipment, and essential consumables designed to meet the highest standards of 
          accuracy and reliability.
          </p>
        </div>
        {/**industries */}
        <div className="flex flex-col md:w-5/6 mx-auto md:flex-row gap-8 pb-12">
          {industries.map((ind, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex-1 shadow-lg"
            >
              <h3 className="text-heroBg text-2xl font-semibold mb-4">
                {ind.name}
              </h3>
              <hr className="w-24 text-primary border-primary" />
              <p className="text-black text-md mb-4 mt-4">{ind.description}</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {ind.products.map((products, idx) => (
                  <li key={idx}>{products}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Industries;
