import React, { useState, useEffect } from 'react';
import { 
    FaGraduationCap, FaBriefcase, FaProjectDiagram, 
    FaAward, FaCode, FaMobile, FaDesktop, FaServer,
    FaArrowRight, FaHeart, FaStar, FaUserCheck,
    FaLaptopCode, FaRocket, FaShieldAlt, FaSmile
} from 'react-icons/fa';
import { MdOutlineEmojiEvents, MdOutlineWorkOutline } from 'react-icons/md';
import { TbCertificate } from 'react-icons/tb';
import about from '../assets/about.png';

const About = ({ darkMode }) => {
    const [counters, setCounters] = useState({
        education: 0,
        experience: 0,
        projects: 0,
        certificates: 0
    });

    const stats = [
        { 
            id: 'education', 
            value: 4, 
            label: 'Years of Education', 
            icon: FaGraduationCap,
            suffix: '+',
            color: 'text-purple-500',
            bgColor: 'from-purple-500/20 to-purple-600/10'
        },
        { 
            id: 'experience', 
            value: 2, 
            label: 'Years Experience', 
            icon: FaBriefcase,
            suffix: '+',
            color: 'text-blue-500',
            bgColor: 'from-blue-500/20 to-blue-600/10'
        },
        { 
            id: 'projects', 
            value: 10, 
            label: 'Projects Completed', 
            icon: FaProjectDiagram,
            suffix: '+',
            color: 'text-green-500',
            bgColor: 'from-green-500/20 to-green-600/10'
        },
        
    ];

    const qualities = [
        { icon: FaUserCheck, text: 'Creative Problem Solver', color: 'text-orange-500' },
        { icon: FaRocket, text: 'Fast Learner', color: 'text-blue-500' },
        { icon: FaShieldAlt, text: 'Detail Oriented', color: 'text-green-500' },
        { icon: FaHeart, text: 'Passionate Coder', color: 'text-red-500' },
    ];

    useEffect(() => {
        const animateCounters = () => {
            stats.forEach(stat => {
                let start = 0;
                const end = stat.value;
                const duration = 2000;
                const increment = end / (duration / 16);
                
                const timer = setInterval(() => {
                    start += increment;
                    if (start >= end) {
                        setCounters(prev => ({ ...prev, [stat.id]: end }));
                        clearInterval(timer);
                    } else {
                        setCounters(prev => ({ ...prev, [stat.id]: Math.floor(start) }));
                    }
                }, 16);
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    animateCounters();
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        const section = document.getElementById('about');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const darkTheme = {
        bg: 'bg-gray-900',
        cardBg: 'bg-gray-800/50',
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        textMuted: 'text-gray-400',
        border: 'border-gray-700/50',
        glow: 'shadow-orange-500/20',
    };

    const lightTheme = {
        bg: 'bg-gray-50',
        cardBg: 'bg-white/80',
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-700',
        textMuted: 'text-gray-500',
        border: 'border-gray-200/50',
        glow: 'shadow-orange-500/10',
    };

    const theme = darkMode ? darkTheme : lightTheme;

    return (
        <section id='about' className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 ${theme.bg} relative overflow-hidden`}>
            {/* Animated Background */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse'></div>
                <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000'></div>
            </div>

            <div className='max-w-6xl w-full mx-auto relative z-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
                    
                    {/* Image Section */}
                    <figure data-aos='fade-up' data-aos-delay='300' className='relative group'>
                        {/* Animated Border */}
                        <div className='absolute -inset-4 bg-gradient-to-r from-orange-500/50 via-amber-500/50 to-orange-500/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                        
                        <div className='relative'>
                            {/* Decorative Shapes */}
                            <div className='absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full blur-2xl animate-pulse'></div>
                            <div className='absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse delay-1000'></div>
                            
                            {/* Main Image Container */}
                            <div className='relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105'>
                                <div className='absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 z-10'></div>
                                <img
                                    src={about}
                                    alt="About Me"
                                    className='w-full h-auto object-cover transition-all duration-700 hover:scale-110'
                                />
                            </div>
                            
                            {/* Floating Badges */}
                            <div className='absolute top-5 -right-1 md:-right-5 animate-float'>
                                <div className='bg-gradient-to-r from-orange-500 to-amber-500 rounded-full px-4 py-2 shadow-lg'>
                                    <div className='flex items-center gap-1 md:gap-2'>
                                        <FaCode className='w-4 h-4 text-white' />
                                        <span className='text-white text-xs md:text-sm font-semibold'>4+ Years Code</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='absolute bottom-5 -left-1 md:-left-5 animate-float-delay'>
                                <div className='bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full px-4 py-2 shadow-lg'>
                                    <div className='flex items-center gap-1 md:gap-2'>
                                        <FaRocket className='w-4 h-4 text-white' />
                                        <span className='text-white text-xs md:text-sm font-semibold'>20+ Projects</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </figure>

                    {/* Content Section */}
                    <article data-aos='fade-left' data-aos-delay='300' className='relative'>
                        {/* Section Header */}
                        <div className='mb-8'>
                          
                            
                            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center md:text-start'>
                                <span className='bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent'>
                                    About
                                </span>
                                <span className={`${theme.textPrimary} ml-3`}>
                                    Me
                                </span>
                            </h2>
                            
                            <div className='flex justify-center lg:justify-start gap-2'>
                                <div className='w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full'></div>
                                <div className='w-8 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full'></div>
                                <div className='w-4 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full'></div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className={`text-base sm:text-lg leading-relaxed text-center md:text-start ${theme.textSecondary} mb-6`}
                            data-aos='fade-up' data-aos-delay='500'>
                            I'm a passionate front-end developer with a knack for crafting visually stunning and 
                            user-friendly websites. With a strong foundation in modern web technologies, I specialize 
                            in creating responsive designs that seamlessly adapt to various devices. I thrive on 
                            turning complex ideas into elegant solutions, ensuring an engaging user experience.
                        </p>

                        {/* Qualities Grid */}
                        <div className='grid grid-cols-2 gap-3 mb-8' data-aos='fade-up' data-aos-delay='600'>
                            {qualities.map((quality, index) => (
                                <div key={index} className={`flex items-center gap-2 p-2 rounded-lg ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100/50'} backdrop-blur-sm`}>
                                    <quality.icon className={`w-4 h-4 ${quality.color}`} />
                                    <span className={`text-sm ${theme.textSecondary}`}>{quality.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stats Section */}
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-8' data-aos='fade-up' data-aos-delay='700'>
                            {stats.map((stat, index) => (
                                <div key={index} className={`
                                    text-center p-4 rounded-xl transition-all duration-300
                                    hover:scale-105 hover:shadow-xl
                                    ${darkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-white/80 hover:bg-white'}
                                    border ${theme.border}
                                    group
                                `}>
                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.bgColor} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}>
                                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                                    </div>
                                    <div className={`text-2xl font-bold ${theme.textPrimary} mb-1`}>
                                        {counters[stat.id] || 0}{stat.suffix}
                                    </div>
                                    <div className={`text-xs ${theme.textMuted}`}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                       
                    </article>
                </div>
            </div>

         
        </section>
    );
};

export default About;