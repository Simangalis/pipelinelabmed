import React from "react";
import labmed from "../assets/labmed.jpg";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="py-12 bg-heroBg px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center space-x-2">
            <img
              src={labmed}
              alt="footer-logo"
              width={100}
              height={60}
              className="rounded-md"
            />
          </div>

          <p className="text-white mt-4 text-md">
            "We are your laboratory and medical solution"
          </p>
          <p className="text-white mt-4 text-md">Copyright <span className="text-primary text-md">© 2024 Pipeline Labmed Supplies.</span> All Rights Reserved.</p>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-3">
            <li className="text-md">
              <a href="#home" className="text-white hover:underline ">
                Home
              </a>
            </li>
            <li className="text-md">
              <a href="#about" className="text-white hover:underline ">
                About Us
              </a>
            </li>
            <li className="text-md">
              <a href="#categories" className="text-white hover:underline ">
                Categories
              </a>
            </li>
            <li className="text-md">
              <a href="#products" className="text-white hover:underline ">
                Products
              </a>
            </li>
            <li className="text-md">
              <a href="#industries" className="text-white hover:underline">
                Industries
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4 text-white">Customer Service</h3>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="text-white text-md">
                info@pipelinelabmedsupplies.com
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
            <FaLocationDot className="text-primary"/>
            <p className="text-white text-md">Manzini, Matsapha, next to PicknPay </p>
            </li>
            <li className="flex items-center gap-2">
            <FaPhoneSquareAlt className="text-primary"/>
            <p className="text-white text-md">(+268)7618 3484</p>
            </li>
            <li className="flex items-center gap-2">
            <IoLogoWhatsapp className="text-primary"/>
            <p className="text-white text-md">(+268) 7618 3484</p>
            </li>
          </ul>
        </div>
      </div>
      <hr className="text-primary mt-4" />
    </div>
  );
};

export default Footer;
