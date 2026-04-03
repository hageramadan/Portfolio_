import { use, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
    document.documentElement.classList.add("dark");
  }, []);
  useEffect(()=>{
    Aos.refresh();
  } , [darkMode])
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div
      className={
        darkMode
          ? "bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 text-white min-h-screen transition-colors duration-500"
          : "bg-linear-to-br from-gray-50 to-blue-50 text-gray-900 min-h-screen transition-colors duration-500"
      }
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode}  />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode}/>
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
