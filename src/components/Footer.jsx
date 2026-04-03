import React from 'react';
import { 
    FaGithub, FaLinkedin, FaFacebook, FaEnvelope, 
    FaHeart, FaArrowUp, FaTwitter, FaInstagram, FaMapMarkerAlt,
    FaPhone, FaCode
} from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail, MdArrowUpward } from 'react-icons/md';

const Footer = ({ darkMode }) => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaGithub, link: 'https://github.com/hageramadan', label: 'GitHub', color: 'hover:text-gray-900' },
        { icon: FaLinkedin, link: 'https://www.linkedin.com/in/hager-ramadan-27a919201/', label: 'LinkedIn', color: 'hover:text-blue-600' },
        { icon: FaFacebook, link: 'https://www.facebook.com/hager.ramadan.960511', label: 'Facebook', color: 'hover:text-blue-500' },
        { icon: FaEnvelope, link: 'mailto:hagerramadan440@gmail.com', label: 'Email', color: 'hover:text-red-500' },
        // { icon: FaTwitter, link: 'https://twitter.com/', label: 'Twitter', color: 'hover:text-sky-500' },
        // { icon: FaInstagram, link: 'https://instagram.com/', label: 'Instagram', color: 'hover:text-pink-500' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer 
            style={{
                background: darkMode 
                    ? 'linear-gradient(to bottom, #000000, #111827)' 
                    : 'linear-gradient(to bottom, #f3f4f6, #e5e7eb)',
                borderColor: darkMode ? '#374151' : '#d1d5db'
            }}
            className='border-t relative'
        >
            <div className='container mx-auto px-4 py-12'>
                {/* Main Footer Content */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
                    {/* Brand Section */}
                    <div className='text-center md:text-left'>
                        <h3 className='text-2xl font-bold mb-3'
                            style={{
                                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                            Hager Ramadan
                        </h3>
                        <p className='text-sm mb-4'
                            style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}>
                            Front End Developer
                        </p>
                        <p className='text-xs'
                            style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
                            Building responsive and user-friendly web applications
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className='text-center'>
                        <h4 className='font-semibold mb-4'
                            style={{ color: darkMode ? '#f3f4f6' : '#374151' }}>
                            Quick Links
                        </h4>
                        <ul className='space-y-2 text-sm'>
                            {['Home', 'Skills', 'Projects', 'Contact'].map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={`#${link.toLowerCase()}`}
                                        className='transition-all duration-300 hover:translate-x-1 inline-block'
                                        style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
                                        onMouseEnter={(e) => e.target.style.color = '#f97316'}
                                        onMouseLeave={(e) => e.target.style.color = darkMode ? '#d1d5db' : '#6b7280'}
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className='text-center md:text-right'>
                        <h4 className='font-semibold mb-4'
                            style={{ color: darkMode ? '#f3f4f6' : '#374151' }}>
                            Contact Info
                        </h4>
                        <div className='space-y-2 text-sm'>
                            <div className='flex items-center justify-center md:justify-end gap-2'>
                                <FaEnvelope className='w-4 h-4 text-orange-500' />
                                <a href="mailto:hager.ramadan@example.com"
                                    style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
                                    className='hover:text-orange-500 transition-colors'>
                                    hagerramadan440@gmail.com
                                </a>
                            </div>
                            <div className='flex items-center justify-center md:justify-end gap-2'>
                                <HiLocationMarker className='w-4 h-4 text-orange-500' />
                                <span style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
                                    Egypt
                                </span>
                            </div>
                            <div className='flex items-center justify-center md:justify-end gap-2'>
                                <FaCode className='w-4 h-4 text-orange-500' />
                                <span style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
                                    Open for opportunities
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className='border-t border-gray-700/30 pt-8 mb-8'>
                    <div className='flex flex-col items-center gap-6'>
                        <h4 className='font-semibold text-sm uppercase tracking-wider'
                            style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
                            Connect With Me
                        </h4>
                        <div className='flex flex-wrap justify-center gap-4'>
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={`
                                        group relative
                                        transform transition-all duration-300 
                                        hover:scale-110 hover:-translate-y-1
                                    `}
                                >
                                    <div className={`
                                        w-10 h-10 rounded-full 
                                        flex items-center justify-center
                                        transition-all duration-300
                                        ${darkMode 
                                            ? 'bg-gray-800 hover:bg-gray-700' 
                                            : 'bg-gray-200 hover:bg-gray-300'
                                        }
                                        ${social.color}
                                    `}>
                                        <social.icon className={`
                                            w-5 h-5 transition-all duration-300
                                            ${darkMode ? 'text-gray-300' : 'text-gray-700'}
                                            group-hover:scale-110
                                        `} />
                                    </div>
                                    {/* Tooltip */}
                                    <span className={`
                                        absolute -top-8 left-1/2 transform -translate-x-1/2
                                        text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100
                                        transition-opacity duration-300 whitespace-nowrap
                                        ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'}
                                    `}>
                                        {social.label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='border-t border-gray-700/30 pt-8'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                        <div className='text-center md:text-left'>
                            <p className='text-xs'
                                style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
                                © {currentYear} Hager Ramadan. All rights reserved.
                            </p>
                        </div>
                        
                        <div className='flex items-center gap-2'>
                            <span className='text-xs'
                                style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
                                Made with
                            </span>
                            <FaHeart className='w-4 h-4 text-red-500 animate-pulse' />
                            <span className='text-xs'
                                style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
                                using React & Tailwind CSS
                            </span>
                        </div>

                        {/* Back to Top Button */}
                        <button
                            onClick={scrollToTop}
                            className={`
                                group relative
                                w-10 h-10 rounded-full
                                flex items-center justify-center
                                transition-all duration-300
                                hover:scale-110 hover:-translate-y-1
                                ${darkMode 
                                    ? 'bg-gray-800 hover:bg-orange-500' 
                                    : 'bg-gray-200 hover:bg-orange-500'
                                }
                            `}
                        >
                            <FaArrowUp className={`
                                w-5 h-5 transition-all duration-300
                                ${darkMode ? 'text-gray-300' : 'text-gray-700'}
                                group-hover:text-white group-hover:-translate-y-0.5
                            `} />
                            <span className={`
                                absolute -top-8 left-1/2 transform -translate-x-1/2
                                text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100
                                transition-opacity duration-300 whitespace-nowrap
                                ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'}
                            `}>
                                Back to Top
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;