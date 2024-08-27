import "./App.css";
import Categories from "./components/categories";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Products from "./components/Products";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="font-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Categories />
      <Products />
      <Industries />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
