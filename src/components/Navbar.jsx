import "./Navbar.css";
import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    const sections = ["home", "about", "categories", "products", "industries"];
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  };

  const navLinks = (
    <ul className="font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-y-2 space-x-4 md:space-y-0 p-4 md:p-0">
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("home");
          }}
          href="#home"
          className={`text-white ${activeSection === "home" ? "isActive" : ""}`}
        >
          Home
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#about"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("about");
          }}
          className={`text-white ${
            activeSection === "about" ? "isActive" : ""
          }`}
        >
          About Us
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#categories"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("categories");
          }}
          className={`text-white ${
            activeSection === "categories" ? "isActive" : ""
          }`}
        >
          Categories
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#products"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("products");
          }}
          className={`text-white ${
            activeSection === "products" ? "isActive" : ""
          }`}
        >
          Products
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#industries"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("industries");
          }}
          className={`text-white ${
            activeSection === "industries" ? "isActive" : ""
          }`}
        >
          Industries
        </motion.a>
      </li>
    </ul>
  );
  return (
    <header className="bg-heroBg text-white py-6 px-2 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/**logo */}
        <div className="text-white text-lg font-normal">
          <a href="/" className="flex items-center">
            <div className="bg-white rounded-md">
              <img src="/pipe.png" width={70} height={60} alt="logo" />
            </div>
            <div className="ml-1 leading-tight hidden sm:block">
              <span className="font-semibold text-md tracking-wide">
                Pipeline Labmed Supplies
              </span>
              <br />
              <span className="text-xxs tracking-tight">
                "We are your laboratory & medical solution"
              </span>
            </div>
          </a>
        </div>

        {/**navitems */}
        <div className="hidden md:flex flex-grow justify-center">
          <nav>{navLinks}</nav>
        </div>

        {/**button */}
        <div className="hidden md:block">
          <a
          onClick={e => {
            e.preventDefault();
            handleScrollTo('contact')
          }}
            href="#contact"
            className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
          >
            Contact Us
          </a>
        </div>

        {/* hamburger menu*/}
        <div className="block md:hidden">
          <button
            onClick={handleToggle}
            className={`text-white focus:outline ${
              isOpen ? "border border-white" : ""
            }`}
          >
            <HiMenuAlt3 className="size-6" />
          </button>
        </div>
      </div>

      {/* mobile nav items*/}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-heroBg z-20 md:hidden ">
          <ul className=" flex flex-col p-4 space-y-3">
            {navLinks.props.children}
            <li className="py-2">
              <a
                href="#contact"
                className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
                onClick={(e) => {
                  e.preventDefault();
                  handleCloseMenu();
                  handleScrollTo('contact')
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
