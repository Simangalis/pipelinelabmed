import React from "react";
import {motion} from "framer-motion"
import {fadeIn} from "../utilis/animationVariants"

const Categories = () => {
  return (
    <div
      id="categories"
      className="relative bg-cover bg-center py-12 bg-working-img"
    >
      <div className="absolute inset-0 bg-heroBg bg-opacity-90 "></div>
      <motion.div 
      variants={fadeIn('up',0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
      className="relative container mx-auto px-4 py-20">
        <div className="text-white text-center mb-20">
          <h2 className="text-4xl font-bold font-secondary mb-4">
            Products Category
          </h2>
          <p className="text-lg md:w-1/2 w-full mx-auto">
            {" "}
            Our products are both high quality and affordable. Our products are expertly categorized into two essential fields: Medical and Laboratory. Whether you're in healthcare or scientific research, we have the products you need to excel.
          </p>
        </div>

        <div className="flex flex-col md:w-4/5 mx-auto md:flex-row gap-8">
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center">
              1
            </div>
            <h3 className="text-lg font-bold mt-8">Medical Products</h3>
            <p className="my-2 text-md">
            Our Medical range offers top-quality equipment and supplies designed to enhance patient care and streamline healthcare operations.
            </p>
          </div>
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center">
              2
            </div>
            <h3 className="text-lg font-bold mt-8">Laboratory Products</h3>
            <p className="my-2 text-md">
            our Laboratory category provides advanced tools and materials that empower precise research and reliable results.
            </p>
          </div>
        </div>
      </motion.div >
    </div>
  );
};

export default Categories;
