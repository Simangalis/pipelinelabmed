import React, { useState } from "react";
import { IoCodeWorkingSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import {motion} from "framer-motion"
import {fadeIn} from "../utilis/animationVariants"


const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [country, setCountry] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            phone,
            country,
            subject,
            message
        }
        //console.log(data);
        if(!data){
            alert("Please fill all fields")
            return;
        }
        setShowModal(true)
    }

    const closeModal = ()=>{
        setShowModal(false)
        setName("")
        setEmail("")
        setPhone("")
        setCountry("")
        setSubject("")
        setMessage("")
    }
  return (
    <div
      className="bg-[#f7f8fc] flex items-center justify-center py-28 px-8"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8 text-heroBg ">
          {/**left side */}
          <motion.div
          variants={fadeIn('down',0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}} 
          className="space-y-8">
            <h2 className="text-3xl font-bold font-secondary mb-4 text-heroBg">
              Need Any Product? Reach Out To Us By Filling Up The Form
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-heroBg">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-heroBg p-3">
                  <IoCodeWorkingSharp className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Open Monday To Friday</h3>
                  <p className="text-md">We open from 8am - 5pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-heroBg p-3">
                  <FaEnvelope className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Find Us</h3>
                  <p className="text-md">We are reachable through our email address</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-heroBg p-3">
                  <FaPhoneSquareAlt className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Call Us</h3>
                  <p className="text-md">You can call us during working hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-heroBg p-3">
                  <FaGlobe className="text-primary font-bold" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">For More Info</h3>
                  <p className="text-md">Visit our website for more information</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/**right side */}

          <motion.div 
          variants={fadeIn('left',0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}
          className="space-y-8 p-8 bg-heroBg shadow-xl rounded-md">
            <h3 className="text-white text-2xl font-bold mb-4">Talk To Us</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="flex sm:flex-row flex-col gap-4">
                    <input onChange={e => setName(e.target.value)} type="text" placeholder="Name" className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow" />
                    <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Your Email Address" className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow" />
                </div>
                <div className="flex sm:flex-row flex-col gap-4">
                    <input onChange={e => setPhone(e.target.value)} type="tel" placeholder="Contact Number" className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow" />
                    <input onChange={e => setCountry(e.target.value)} type="text" placeholder="Country" className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow" />
                </div>
                <div className="flex sm:flex-row flex-col gap-4">
                <input onChange={e => setSubject(e.target.value)} type="text" placeholder="Subject" className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow" />
                </div>

                <textarea
                onChange={e => setMessage(e.target.value)}
                rows="5"
                   placeholder="Write Your Message here" className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow">
                  
                </textarea>

                <button
                type="submit"
                className="w-full p-3 bg-primary text-white rounded-md hover:bg-primary/80"
                >Send Message</button>


            </form>

          </motion.div>
        </div>
      </div>
      {
        showModal && (
            <div className="fixed insert-0 flex items-center justify-center bg-black bg-opacity-90">
            <div className="bg-white p-8 rounded-md shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Thank you</h2>
                <p>Thank you, {name}, for your message, our experienced marketing team will contact you soonest. </p>
                <button
                onClick={closeModal}
                 className="mt-4 px-4 py-2 text-white rounded-md">Close</button>
            </div>
            </div>
        )
      }
    </div>
  );
};

export default Contact;
