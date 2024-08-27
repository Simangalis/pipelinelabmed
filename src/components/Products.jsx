import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import serviceImg1 from "../assets/tall-micro.jpg";
import productImg2 from "../assets/furniture.jpg";
import productImg3 from "../assets/consumable.jpg";
import productImg4 from "../assets/Disposables.jpg";
import productImg5 from "../assets/testkit.jpg";
import productImg6 from "../assets/chemicals.jpg";
import productImg7 from "../assets/Reagents.jpg";
import productImg8 from "../assets/Consumables-lab.jpg";
import productImg9 from "../assets/Glassware.jpg";
import productImg10 from "../assets/instruments.jpg";
import { BiSolidContact } from "react-icons/bi";
import {motion} from "framer-motion"
import {fadeIn} from "../utilis/animationVariants"

const Products = () => {
  return (
    <div id="products" className="bg-[#f7f8fc]">
      <div className="pt-20 px-4 container mx-auto">
        <motion.div
        variants={fadeIn('up',0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}} 
        className="text-center space-y-5">
          <h2 className="text-4xl font-bold font-secondary text-heroBg">
            Medical Products
          </h2>
          <p className="md:w-1/2 mx-auto">
          We represent a number of leading manufacturers of various kinds of laboratory, 
          industrial, filtration, bioprocess and water testing equipment, reagents, 
          consumables and chemicals and therefore we are able to supply a variety of quality products.
          </p>
        </motion.div>

        {/**Products category */}

        <div className="py-12 md:w-4/5 mx-auto">
          <Tabs>
            <motion.TabList 
            variants={fadeIn('up',0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            className=" text-md flex flex-wrap justify-between items-center md:gap-2 gap-1">
              <Tab>Equipment </Tab>
              <Tab>Hospital Furniture</Tab>
              <Tab>Consumables </Tab>
              <Tab> Disposables</Tab>
              <Tab> Test kits</Tab>
            </motion.TabList>

            <TabPanel>
              <motion.div 
              variants={fadeIn('up',0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-2xl font-bold text-primary mb-4 mt-5">
                    Medical Equipment
                  </h3>
                  <p className="mb-8 text-md">
                  From state-of-the-art diagnostic devices to essential surgical instruments, 
                  our medical equipment is engineered to support the most demanding medical environments.
                  </p>
                  <h4 className="text-xl font-bold mb-4">
                    Products
                  </h4>
                  <ul className="list-disc list-inside space-y-3 text-md">
                    <li>Radiology ICU Equipment</li>
                    <li>Operation Room Assembly</li>
                    <li>Weighing Scale</li>
                    <li>and many more</li>
                  </ul>
                  <div>
                    <button className="bg-primary text-white py-3.5 px-8 font-bold rounded-md hover:bg-primary/90 space-y-3 mt-10">
                      <a href="#contact" className="flex gap-1 items-center">
                        <span>Contact Us</span>
                        <BiSolidContact />
                      </a>
                    </button>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={serviceImg1}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div 
              variants={fadeIn('up',0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2">
                  <img
                    src={productImg2}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-2xl font-bold text-primary mb-4 mt-5">
                    Hospital Furniture
                  </h3>
                  <p className="mb-8">
                  Elevate patient comfort and operational efficiency with our premium Hospital Furniture.
                  Designed with both form and function in mind, our range includes everything from 
                  ergonomic beds to versatile storage solutions.
                  </p>
                  <h4 className="text-xl font-bold mb-4">
                    Products
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Adjustable Hospital Beds</li>
                    <li>Overbed Tables</li>
                    <li>Bedside Cabinets</li>
                    <li>and many more</li>
                  </ul>
                  <div>
                    <button className="bg-primary text-white py-3.5 px-8 font-bold rounded-md hover:bg-primary/90 space-y-3 mt-10">
                      <a href="#contact" className="flex gap-1 items-center">
                        <span>Contact Us</span>
                        <BiSolidContact />
                      </a>
                    </button>
                  </div>
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div 
              variants={fadeIn('up',0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-2xl font-bold text-primary mb-4 mt-5">
                    Medical Consumables
                  </h3>
                  <p className="mb-8">
                  Our Medical Consumables are essential, single-use products designed to ensure hygiene, 
                  safety, and efficiency in healthcare settings. From syringes and gloves to wound dressings and
                   sterilization supplies.
                  </p>
                  <h4 className="text-xl font-bold mb-4">
                    Products
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Syringes and Needles</li>
                    <li>Surgical Gloves</li>
                    <li>Wound Dressings</li>
                    <li>and many more</li>
                  </ul>
                  <div>
                    <button className="bg-primary text-white py-3.5 px-8 font-bold rounded-md hover:bg-primary/90 space-y-3 mt-10">
                      <a href="#contact" className="flex gap-1 items-center">
                        <span>Contact Us</span>
                        <BiSolidContact />
                      </a>
                    </button>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={productImg3}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div 
              variants={fadeIn('up',0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2">
                  <img
                    src={productImg4}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-2xl font-bold text-primary mb-4 mt-5">
                    Medical Disposables
                  </h3>
                  <p className="mb-8">
                  Upgrade your healthcare facility with our premium Medical Disposables. These single-use products ensure top-notch hygiene and efficiency, minimizing cross-contamination and streamlining procedures.
                  </p>
                  <h4 className="text-xl font-bold mb-4">
                    Products
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Disposable Masks</li>
                    <li>IV Catheters</li>
                    <li>Single-Use Scalpels</li>
                    <li>and many more</li>
                  </ul>
                  <div>
                    <button className="bg-primary text-white py-3.5 px-8 font-bold rounded-md hover:bg-primary/90 space-y-3 mt-10">
                      <a href="#contact" className="flex gap-1 items-center">
                        <span>Contact Us</span>
                        <BiSolidContact />
                      </a>
                    </button>
                  </div>
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div 
              variants={fadeIn('up',0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-2xl font-bold text-primary mb-4 mt-5">
                    Medical Test Kits
                  </h3>
                  <p className="mb-8">
                  Our Medical Test Kits offer fast, accurate diagnostics for a range of health conditions. 
                  Designed for ease of use, these kits provide reliable results to support timely and 
                  effective patient care.
                  </p>
                  <h4 className="text-xl font-bold mb-4">
                    Products
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>COVID-19 Rapid Test Kits</li>
                    <li>Blood Glucose Test Kits</li>
                    <li>Pregnancy Test Kits</li>
                    <li>and many more</li>
                  </ul>
                  <div>
                    <button className="bg-primary text-white py-3.5 px-8 font-bold rounded-md hover:bg-primary/90 space-y-3 mt-10">
                      <a href="#contact" className="flex gap-1 items-center">
                        <span>Contact Us</span>
                        <BiSolidContact />
                      </a>
                    </button>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={productImg5}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>
          </Tabs>
        </div>
        <motion.div 
        variants={fadeIn('up',0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        className="text-center space-y-5">
          <h2 className="text-3xl font-bold font-secondary text-heroBg">
            Laboratory Products
          </h2>
        </motion.div>

        {/**Products category Two*/}

        <div className="py-12 md:w-4/5 mx-auto">
          <Tabs>
            <motion.TabList 
            variants={fadeIn('up',0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            className="text-md flex flex-wrap justify-between items-center md:gap-2 gap-1">
              <Tab>Chemicals</Tab>
              <Tab>Reagents</Tab>
              <Tab>Consumables </Tab>
              <Tab>Glassware/Plasticware</Tab>
              <Tab>Equipment and instruments</Tab>
            </motion.TabList>

            <TabPanel>
              <motion.div 
              variants={fadeIn('up',0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2">
                  <img
                    src={productImg6}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-2xl font-bold text-primary mb-4 mt-5">
                    Laboratory - Chemicals
                  </h3>
                  <p className="mb-8">
                  Our Laboratory Chemicals are essential for accurate research and experimentation. 
                  Carefully formulated and tested for purity, they support a wide 
                  range of applications from chemical analysis to complex scientific studies.
                  </p>
                  <h4 className="text-xl font-bold mb-4">
                    Products
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Sodium Chloride (NaCl)</li>
                    <li>Hydrochloric Acid (HCl)</li>
                    <li>Ethanol (C₂H₅OH)</li>
                    <li>and many more</li>
                  </ul>
                  <div>
                    <button className="bg-primary text-white py-3.5 px-8 font-bold rounded-md hover:bg-primary/90 space-y-3 mt-10">
                      <a href="#contact" className="flex gap-1 items-center">
                        <span>Contact Us</span>
                        <BiSolidContact />
                      </a>
                    </button>
                  </div>
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div 
              variants={fadeIn('up',0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-2xl font-bold text-primary mb-4 mt-5">
                    Laboratory Reagents
                  </h3>
                  <p className="mb-8">
                  Our Laboratory Reagents are high-quality chemicals used to facilitate precise chemical 
                  reactions and analyses. These reagents are essential for various testing and research applications, 
                  offering consistent performance and reliable results.
                  </p>
                  <h4 className="text-xl font-bold mb-4">
                    Products
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Phenolphthalein</li>
                    <li>Silver Nitrate (AgNO₃)</li>
                    <li>Barium Chloride (BaCl₂)</li>
                    <li>and many more</li>
                  </ul>
                  <div>
                    <button className="bg-primary text-white py-3.5 px-8 font-bold rounded-md hover:bg-primary/90 space-y-3 mt-10">
                      <a href="#contact" className="flex gap-1 items-center">
                        <span>Contact Us</span>
                        <BiSolidContact />
                      </a>
                    </button>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={productImg7}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div 
              variants={fadeIn('up',0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2">
                  <img
                    src={productImg8}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-2xl font-bold text-primary mb-4 mt-5">
                    Laboratory - Consumables
                  </h3>
                  <p className="mb-8 text-md">
                  Our Laboratory Consumables are essential, single-use items designed to support clean and efficient laboratory operations. 
                  These products ensure accurate results and maintain a sterile environment, 
                  covering everything from pipette tips to sample containers.
                  </p>
                  <h4 className="text-xl font-bold mb-4">
                    Products
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Pipette Tips</li>
                    <li>Petri Dishes</li>
                    <li>Test Tubes</li>
                    <li>and many more</li>
                  </ul>
                  <div>
                    <button className="bg-primary text-white py-3.5 px-8 font-bold rounded-md hover:bg-primary/90 space-y-3 mt-10">
                      <a href="#contact" className="flex gap-1 items-center">
                        <span>Contact Us</span>
                        <BiSolidContact />
                      </a>
                    </button>
                  </div>
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div
              variants={fadeIn('up',0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
               className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-2xl font-bold text-primary mb-4 mt-5">
                    Laboratory Glassware/Plasticware
                  </h3>
                  <p className="mb-8">
                  Our Laboratory glassware and plasticware come in a wide range of types and sizes to suit different scientific needs.
                  We offer both individual pieces and complete sets, catering to different laboratory setups and budget constraints.
                  </p>
                  <h4 className="text-xl font-bold mb-4">
                    Products
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Beakers</li>
                    <li>Flasks</li>
                    <li>Tubes</li>
                    <li>and many more</li>
                  </ul>
                  <div>
                    <button className="bg-primary text-white py-3.5 px-8 font-bold rounded-md hover:bg-primary/90 space-y-3 mt-10">
                      <a href="#contact" className="flex gap-1 items-center">
                        <span>Contact Us</span>
                        <BiSolidContact />
                      </a>
                    </button>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={productImg9}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div 
              variants={fadeIn('up',0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2">
                  <img
                    src={productImg10}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-2xl font-bold text-primary mb-4 mt-5">
                    Laboratory Equipment and instruments
                  </h3>
                  <p className="mb-8">
                    We offer laboratory instruments and equipment used to perform experiments, analyze samples, and collect data in scientific research.
                  </p>
                  <h4 className="text-xl font-bold mb-4">
                    Products
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Microscopes</li>
                    <li>Spectrophotometers</li>
                    <li>Pipettes and burettes</li>
                    <li>and many more</li>
                  </ul>
                  <div>
                    <button className="bg-primary text-white py-3.5 px-8 font-bold rounded-md hover:bg-primary/90 space-y-3 mt-10">
                      <a href="#contact" className="flex gap-1 items-center">
                        <span>Contact Us</span>
                        <BiSolidContact />
                      </a>
                    </button>
                  </div>
                </div>
              </motion.div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Products;
