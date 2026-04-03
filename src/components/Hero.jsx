import React, { useEffect, useState } from 'react';
import { 
    FaGithub, FaLinkedin, FaFacebook, FaEnvelope, 
    FaDownload, FaCode, FaReact, FaCss3Alt, FaHtml5,
    FaJsSquare, FaNodeJs, FaPython, FaArrowRight
} from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { TbBrandTailwind } from 'react-icons/tb';
import hero from '../assets/hero.png';
// import hi from '../assets/hi.png';


const Hero = ({ darkMode }) => {
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    
    const roles = ['Web Developer', 'React Specialist', 'Frontend Expert'];
    const period = 2000;

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];
            
            setTypedText(isDeleting 
                ? fullText.substring(0, typedText.length - 1)
                : fullText.substring(0, typedText.length + 1)
            );
            
            if (!isDeleting && typedText === fullText) {
                setTimeout(() => setIsDeleting(true), period);
            } else if (isDeleting && typedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };
        
        const timer = setTimeout(handleTyping, 100);
        return () => clearTimeout(timer);
    }, [typedText, isDeleting, loopNum]);

    // const socialIcons = [
    //     { icon: FaGithub, link: 'https://github.com/hageramadan', label: 'GitHub', color: 'hover:text-gray-900' },
    //     { icon: FaLinkedin, link: 'https://www.linkedin.com/in/hager-ramadan-27a919201/', label: 'LinkedIn', color: 'hover:text-blue-600' },
    //     { icon: FaFacebook, link: 'https://www.facebook.com/hager.ramadan.960511', label: 'Facebook', color: 'hover:text-blue-500' },
    // ];

    const techStack = [
        { icon: FaHtml5, color: 'text-orange-500', label: 'HTML5' },
        { icon: FaCss3Alt, color: 'text-blue-500', label: 'CSS3' },
        { icon: FaJsSquare, color: 'text-yellow-500', label: 'JavaScript' },
        { icon: FaReact, color: 'text-cyan-500', label: 'React' },
        { icon: TbBrandTailwind, color: 'text-sky-500', label: 'Tailwind' },
    ];

    const darkTheme = {
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        textMuted: 'text-gray-400',
        buttonPrimary: 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-lg hover:shadow-orange-500/50',
        buttonSecondary: 'border-2 border-orange-500 text-gray-800 dark:text-white hover:bg-orange-500 hover:text-white',
        decorativeCircle: 'bg-orange-500 opacity-10',
        bgGradient: 'from-orange-500/10 to-amber-500/10',
    };

    const lightTheme = {
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-700',
        textMuted: 'text-gray-500',
        buttonPrimary: 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-lg hover:shadow-orange-500/30',
        buttonSecondary: 'border-2 border-orange-500 text-gray-800 hover:bg-orange-500 hover:text-white',
        decorativeCircle: 'bg-orange-400 opacity-20',
        bgGradient: 'from-orange-500/5 to-amber-500/5',
    };

    const theme = darkMode ? darkTheme : lightTheme;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Hager_Ramadan_Software_Engineer.pdf';
    link.download = 'Hager_Ramadan_Software_Engineer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

    return (
        <div className='relative overflow-hidden min-h-screen flex flex-col'>
            {/* Animated Background */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse'></div>
                <div className='absolute bottom-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse delay-1000'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000'></div>
            </div>

            <section id='home' data-aos='fade-up' data-aos-delay='250' className='body-font z-10 relative'>
                <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-20 flex-col lg:flex-row items-center justify-between gap-12'>
                    
                    {/* Left Content */}
                    <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-start'>
                       

                        {/* Greeting */}
                        <div className='flex items-center gap-2 mb-4 mt-6'>
                           
                            <span className={`text-lg ${theme.textSecondary}`}>Hello, I'm</span>
                        </div>

                        {/* Name */}
                        <h1 className={`title-font sm:text-5xl text-4xl mb-4 font-bold ${theme.textPrimary}`}
                            data-aos='fade-up' data-aos-delay='500'>
                            Hager Ramadan
                        </h1>

                        {/* Typing Effect */}
                        <div className='flex items-center gap-2 mb-6'>
                            <FaCode className={`w-6 h-6 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                            <h2 className={`text-xl sm:text-2xl font-semibold ${theme.textSecondary}`}>
                                <span className='bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent'>
                                    {typedText}
                                </span>
                                <span className='animate-blink'>|</span>
                            </h2>
                        </div>

                        {/* Description */}
                        <p className={`mb-8 leading-relaxed max-w-md sm:max-w-lg text-lg ${theme.textMuted}`}
                            data-aos='fade-up' data-aos-delay='600'>
                            I'm a passionate web developer specializing in creating responsive, 
                            user-friendly applications with modern technologies and best practices.
                        </p>

                        {/* Tech Stack */}
                        <div className='mb-8 w-full'>
                            <p className={`text-sm font-medium mb-3 ${theme.textMuted}`}>
                                Tech Stack:
                            </p>
                            <div className='flex flex-wrap justify-center lg:justify-start gap-3'>
                                {techStack.map((tech, index) => (
                                    <div
                                        key={index}
                                        className='group relative'
                                        data-aos='fade-up'
                                        data-aos-delay={`${700 + index * 50}`}
                                    >
                                        <div className={`
                                            w-10 h-10 rounded-lg flex items-center justify-center
                                            transition-all duration-300
                                            ${darkMode ? 'bg-gray-800/80' : 'bg-gray-100'}
                                            hover:scale-110 hover:-translate-y-1
                                            border border-gray-700/30
                                        `}>
                                            <tech.icon className={`w-5 h-5 ${tech.color} transition-all duration-300`} />
                                        </div>
                                        <span className={`
                                            absolute -top-8 left-1/2 transform -translate-x-1/2
                                            text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100
                                            transition-opacity duration-300 whitespace-nowrap
                                            ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'}
                                        `}>
                                            {tech.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className='w-full'>
                            <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4'
                                data-aos='fade-up' data-aos-delay='800'>
                                
                                {/* <button
                                    onClick={handleDownload}
                                    className={`
                                        w-full sm:w-auto inline-flex items-center justify-center gap-2
                                        px-8 py-3 rounded-full font-semibold text-base sm:text-lg
                                        transition-all duration-300 transform hover:scale-105
                                        ${theme.buttonPrimary}
                                    `}
                                >
                                    <FaDownload className='w-4 h-4' />
                                    Download CV
                                </button> */}
                                
                                <a href='#contact' className='w-full sm:w-auto'>
                                    <button className={`
                                        w-full sm:w-auto inline-flex items-center justify-center gap-2
                                        px-8 py-3 rounded-full font-semibold text-base sm:text-lg
                                        transition-all duration-300 transform hover:scale-105
                                        ${theme.buttonSecondary}
                                    `}>
                                        <MdContactMail className='w-5 h-5' />
                                        Contact Me
                                        <FaArrowRight className='w-3 h-3 group-hover:translate-x-1 transition-transform' />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center'
                        data-aos='fade-left' data-aos-delay='400'>
                        <div className='relative'>
                            {/* Animated Border */}
                            <div className='absolute -inset-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full blur-xl opacity-20 animate-pulse'></div>
                            
                            {/* Image Container */}
                            <div className='relative rounded-full overflow-hidden bg-gradient-to-br from-orange-500/20 to-amber-500/20 p-2'>
                                <img 
                                    src={hero}
                                    alt="Hager Ramadan"
                                    className='w-full h-auto max-w-sm mx-auto rounded-full
                                    transform hover:scale-105 transition-transform duration-500'
                                />
                            </div>
                            
                            {/* Floating Elements */}
                            <div className='absolute top-10 -right-5 animate-float'>
                                <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center shadow-lg'>
                                    <FaReact className='w-6 h-6 text-white animate-spin-slow' />
                                </div>
                            </div>
                            
                            <div className='absolute bottom-10 -left-5 animate-float-delay'>
                                <div className='w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg'>
                                    <FaJsSquare className='w-5 h-5 text-white' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 rounded-full ${theme.decorativeCircle} mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000 hidden sm:block`} />
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 sm:w-64 sm:h-64 rounded-full ${theme.decorativeCircle} mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000 hidden sm:block`} />
            </section>

         
        </div>
    );
};

export default Hero;