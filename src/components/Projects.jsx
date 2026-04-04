import React, { useState } from "react";
import { 
  FaExternalLinkAlt, FaGithub, FaCode, FaEye, 
  FaStar, FaHeart, FaArrowRight, FaTimes,
  FaLaptopCode, FaMobileAlt, FaTabletAlt
} from "react-icons/fa";
import { MdOutlineReadMore } from "react-icons/md";
import { TbBrandNextjs, TbBrandTailwind, TbBrandReact, TbBrandLaravel } from "react-icons/tb";
import { SiTypescript, SiAngular, SiBootstrap, SiHtml5, SiPhp } from "react-icons/si";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

const Projects = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Waytmiah",
      desc: `Water Delivery Project - Developed a scalable water delivery application enabling efficient ordering and real-time tracking. Implemented features for bulk order placement with a seamless user experience. Designed a driver assignment system allowing drivers to accept and manage delivery requests.`,
      fullDesc: `Water Delivery Project - Developed a scalable water delivery application enabling efficient ordering and real-time tracking. Implemented features for bulk order placement with a seamless user experience. Designed a driver assignment system allowing drivers to accept and manage delivery requests. Enabled scheduled deliveries to ensure timely order fulfillment. Integrated real-time tracking to provide users with live order status updates. Focused on delivering a responsive and user-friendly interface across the application.`,
      tags: ["Next.js", "Laravel", "Tailwind CSS"],
      tagIcons: [TbBrandNextjs, TbBrandLaravel, TbBrandTailwind],
      link: "https://waytmiah.com",
      github: "#",
      image: project1,
      category: "fullstack",
      featured: true,
    },
    {
      id: 2,
      title: "Flashicard",
      desc: `Products Management System - Built a scalable E-Commerce REST API using Node.js, Express, and MongoDB with MVC architecture. Implemented JWT authentication, product & category management, cart, orders, and Stripe/PayPal payment integration.`,
      fullDesc: `Products Management System - Built a scalable E-Commerce REST API using Node.js, Express, and MongoDB with MVC architecture. Implemented JWT authentication, product & category management, cart, orders, and Stripe/PayPal payment integration. Included advanced features like pagination, filtering, and real-time order status tracking.`,
      tags: ["React", "Node.js", "Tailwind CSS"],
      tagIcons: [TbBrandReact, TbBrandTailwind, FaCode],
      link: "https://flashicard.com",
      github: "#",
      image: project2,
      category: "fullstack",
      featured: false,
    },
    {
      id: 3,
      title: "Samraabayaa",
      desc: `Built a fully functional e-commerce platform for an abaya fashion brand, providing seamless product browsing, categorization, and online purchasing. Designed a responsive UI and implemented core features such as product management, cart functionality, and secure checkout flow.`,
      fullDesc: `Built a fully functional e-commerce platform for an abaya fashion brand, providing seamless product browsing, categorization, and online purchasing. Designed a responsive UI and implemented core features such as product management, cart functionality, and secure checkout flow. Enhanced user experience through optimized performance and intuitive navigation.`,
      tags: ["HTML", "PHP", "Bootstrap"],
      tagIcons: [SiHtml5, SiPhp, SiBootstrap],
      link: "https://samraabayaa.com",
      github: "#",
      image: project3,
      category: "frontend",
      featured: false,
    },
    {
      id: 4,
      title: "Talaaljazeera",
      desc: `Built a scalable e-commerce web application focused on delivering a seamless shopping experience, including product browsing, order management, and real-time order tracking. Designed an intuitive UI and optimized performance.`,
      fullDesc: `Built a scalable e-commerce web application focused on delivering a seamless shopping experience, including product browsing, order management, and real-time order tracking. Designed an intuitive UI and optimized performance to ensure efficient and user-centric interactions.`,
      tags: ["Next.js", "TypeScript", "Laravel"],
      tagIcons: [TbBrandNextjs, SiTypescript, TbBrandLaravel],
      link: "https://talaaljazeera.com/",
      github: "#",
      image: project4,
      category: "fullstack",
      featured: true,
    },
    {
      id: 5,
      title: "Movie App",
      desc: `Developed a responsive movie application using Angular, TypeScript, and Tailwind CSS. Implemented features for browsing, searching, and filtering movies with a user-friendly interface.`,
      fullDesc: `Developed a responsive movie application using Angular, TypeScript, and Tailwind CSS. Implemented features for browsing, searching, and filtering movies with a user-friendly interface. Integrated third-party APIs for real-time movie data and optimized performance for seamless user experience across devices.`,
      tags: ["Angular", "TypeScript", "Tailwind CSS"],
      tagIcons: [SiAngular, SiTypescript, TbBrandTailwind],
      link: "https://angular-movie-app-fawn.vercel.app",
      github: "#",
      image: project5,
      category: "frontend",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: FaCode },
    { id: "frontend", label: "Frontend", icon: FaLaptopCode },
    { id: "fullstack", label: "Full Stack", icon: FaCode },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const darkTheme = {
    bg: "bg-gray-900",
    cardBg: "bg-gray-800/80",
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    textMuted: "text-gray-400",
    border: "border-gray-700",
    glow: "shadow-orange-500/20",
  };

  const lightTheme = {
    bg: "bg-gray-50",
    cardBg: "bg-white",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    textMuted: "text-gray-500",
    border: "border-gray-200",
    glow: "shadow-orange-500/10",
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <section id="projects" className={`relative py-24 overflow-hidden ${theme.bg}`}>
      {/* Animated Background */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse delay-1000'></div>
      </div>

      <div className='container mx-auto px-4 max-w-6xl relative z-10'>
        {/* Section Header */}
        <header className='text-center mb-12' data-aos='fade-up'>
          <div className='inline-block mb-4'>
            <div className='flex items-center justify-center gap-2'>
              <div className='w-12 h-12 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 flex items-center justify-center'>
                <FaLaptopCode className='w-6 h-6 text-orange-500' />
              </div>
            </div>
          </div>
          
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6'>
            <span className='bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent'>
              My
            </span>
            <span className={`${theme.textPrimary} ml-4`}>
              Projects
            </span>
          </h2>
          
          <div className='flex justify-center gap-2 mb-6'>
            <div className='w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full'></div>
            <div className='w-8 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full'></div>
            <div className='w-4 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full'></div>
          </div>

          <p className={`max-w-2xl mx-auto ${theme.textMuted}`}>
            Here are some of my recent projects. I've worked on a variety of web
            applications, from simple landing pages to complex e-commerce platforms.
          </p>
        </header>

        {/* Filter Buttons */}
        <div className='flex flex-wrap justify-center gap-4 mb-12' data-aos='fade-up' data-aos-delay='200'>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`
                flex items-center gap-2 px-6 py-2 rounded-full font-medium
                transition-all duration-300 transform hover:scale-105
                ${filter === cat.id
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/50'
                  : `${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`
                }
              `}
            >
              <cat.icon className='w-4 h-4' />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`
                group rounded-2xl overflow-hidden
                transition-all duration-500 transform
                hover:-translate-y-2 hover:shadow-2xl ${theme.glow}
                ${darkMode ? 'bg-gray-800/80' : 'bg-white'}
                border ${theme.border} hover:border-orange-500/50
              `}
              data-aos='fade-up'
              data-aos-delay={index * 100}
            >
              {/* Image Container */}
              <div className='relative overflow-hidden h-52'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className='absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-amber-500 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg'>
                    <FaStar className='w-3 h-3 inline mr-1' />
                    Featured
                  </div>
                )}
                
                {/* Action Buttons Overlay */}
                <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className=' hidden w-10 h-10 rounded-full bg-white text-gray-900 md:flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:bg-orange-500 hover:text-white'
                  >
                    <FaEye className='w-4 h-4' />
                  </button>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:bg-orange-500 hover:text-white'
                  >
                    <FaExternalLinkAlt className='w-4 h-4' />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className='p-6'>
                <h3 className={`text-xl font-bold mb-2 ${theme.textPrimary}`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm mb-4 line-clamp-3 ${theme.textMuted}`}>
                  {project.desc}
                </p>
                
                {/* Tags */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag, idx) => {
                    const Icon = project.tagIcons[idx];
                    return (
                      <span
                        key={idx}
                        className={`
                          flex items-center gap-1 text-xs px-2 py-1 rounded-full
                          ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}
                        `}
                      >
                        {Icon && <Icon className='w-3 h-3' />}
                        {tag}
                      </span>
                    );
                  })}
                </div>

                {/* Read More Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className={`
                    hidden md:flex items-center gap-2 text-sm font-medium
                    transition-all duration-300 group-hover:gap-3
                    ${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-600 hover:text-orange-700'}
                  `}
                >
                  Read More
                  <MdOutlineReadMore className='w-4 h-4' />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className='text-center' data-aos='fade-up' data-aos-delay='500'>
          <a
            href='https://github.com/hageramadan?tab=repositories'
            target='_blank'
            rel='noopener noreferrer'
            className='
              inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold
              bg-gradient-to-r from-orange-500 to-amber-500 text-white
              transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/50
              group
            '
          >
            <FaGithub className='w-5 h-5' />
            <span>View All on GitHub</span>
            <FaArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
          </a>
        </div>
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className='fixed inset-0  z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn' onClick={() => setSelectedProject(null)}>
          <div 
            className={`
              relative max-w-2xl w-full rounded-2xl overflow-hidden
              ${darkMode ? 'bg-gray-800' : 'bg-white'}
              shadow-2xl transform animate-scaleIn
            `}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className='absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-orange-500 transition-all duration-300'
            >
              <FaTimes className='w-5 h-5' />
            </button>
            
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title}
              className='w-full h-64 object-cover'
            />
            
            <div className='p-6'>
              <h3 className={`text-2xl font-bold mb-4 ${theme.textPrimary}`}>
                {selectedProject.title}
              </h3>
              
              <p className={`mb-6 leading-relaxed ${theme.textSecondary}`}>
                {selectedProject.fullDesc}
              </p>
              
              <div className='flex flex-wrap gap-2 mb-6'>
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`text-xs px-3 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className='flex gap-4'>
                <a
                  href={selectedProject.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold transition-all duration-300 hover:scale-105'
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
                {selectedProject.github && selectedProject.github !== '#' && (
                  <a
                    href={selectedProject.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-2 font-semibold transition-all duration-300 hover:scale-105 ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                  >
                    <FaGithub />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

   
    </section>
  );
};

export default Projects;