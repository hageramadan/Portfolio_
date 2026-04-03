import React, { useState } from 'react';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, 
  FaGithub, FaLinkedin, FaFacebook, FaTwitter,
  FaCheckCircle, FaSpinner, FaClock, FaRegSmile
} from 'react-icons/fa';
import { MdEmail, MdSend } from 'react-icons/md';
import { TbBrandWhatsapp } from 'react-icons/tb';
import contactImg from '../assets/contact.png';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const contactInfo = [
    { 
      icon: FaEnvelope, 
      label: 'Email', 
      value: 'hager.ramadan@example.com',
      link: 'mailto:hager.ramadan@example.com',
      color: 'text-red-500',
      bgColor: 'from-red-500/20 to-red-600/10'
    },
   
   
    { 
      icon: TbBrandWhatsapp, 
      label: 'WhatsApp', 
      value: '+20 ',
      link: 'https://wa.me/201234567890',
      color: 'text-green-500',
      bgColor: 'from-green-500/20 to-emerald-500/10'
    },
  ];

  const socialLinks = [
    { icon: FaGithub, link: 'https://github.com/hageramadan', label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: FaLinkedin, link: 'https://www.linkedin.com/in/hager-ramadan-27a919201/', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: FaFacebook, link: 'https://www.facebook.com/hager.ramadan.960511', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: FaTwitter, link: 'https://twitter.com/', label: 'Twitter', color: 'hover:text-sky-500' },
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const darkTheme = {
    bg: 'bg-gray-900',
    cardBg: 'bg-gray-800/80',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    textMuted: 'text-gray-400',
    border: 'border-gray-700',
    inputBg: 'bg-gray-800',
    inputBorder: 'border-gray-700',
    glow: 'shadow-orange-500/20',
  };

  const lightTheme = {
    bg: 'bg-gray-50',
    cardBg: 'bg-white',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-700',
    textMuted: 'text-gray-500',
    border: 'border-gray-200',
    inputBg: 'bg-gray-50',
    inputBorder: 'border-gray-200',
    glow: 'shadow-orange-500/10',
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <section id='contact' className={`relative py-24 overflow-hidden ${theme.bg}`}>
      {/* Animated Background */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse delay-1000'></div>
      </div>

      <div className='container max-w-6xl mx-auto px-4 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-16' data-aos='fade-up'>
          <div className='inline-block'>
            <div className='flex items-center justify-center gap-2 mb-4'>
              <div className='w-12 h-12 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 flex items-center justify-center'>
                <FaRegSmile className='w-6 h-6 text-orange-500' />
              </div>
            </div>
            
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent'>
                Get In
              </span>
              <span className={`${theme.textPrimary} ml-4`}>
                Touch
              </span>
            </h2>
            
            <div className='flex justify-center gap-2 mb-6'>
              <div className='w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full'></div>
              <div className='w-8 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full'></div>
              <div className='w-4 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full'></div>
            </div>
            
            <p className={`max-w-2xl mx-auto text-lg ${theme.textMuted}`}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
              Feel free to reach out to me through any of the platforms below or send me an email.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          {/* Contact Info & Image */}
          <div className='space-y-8' data-aos='fade-right' data-aos-delay='300'>
            {/* Image */}
            <div className='flex justify-center'>
              <div className='relative group'>
                <div className='absolute -inset-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500'></div>
                <img 
                  src={contactImg} 
                  alt='Contact Me'
                  className='w-full max-w-sm h-auto object-contain transform transition-transform duration-500 group-hover:scale-105'
                />
              </div>
            </div>

            {/* Contact Cards */}
            {/* <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`
                    p-4 rounded-xl transition-all duration-300
                    hover:scale-105 hover:shadow-xl
                    ${darkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-white/80 hover:bg-white'}
                    border ${theme.border}
                    group
                  `}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${info.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                  </div>
                  <h4 className={`text-sm font-medium ${theme.textMuted} mb-1`}>{info.label}</h4>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className={`text-base font-semibold ${theme.textPrimary} hover:text-orange-500 transition-colors`}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className={`text-base font-semibold ${theme.textPrimary}`}>{info.value}</p>
                  )}
                </div>
              ))}
            </div> */}

         
          </div>

          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit}
            className={`
              rounded-2xl p-6 sm:p-8 border shadow-xl
              ${darkMode ? 'bg-gray-800/80' : 'bg-white'}
              border ${theme.border}
              transition-all duration-300 hover:shadow-2xl ${theme.glow}
            `}
            data-aos='fade-left'
            data-aos-delay='300'
          >
            <h3 className={`text-2xl font-bold mb-6 ${theme.textPrimary} text-center`}>
              Send Me a Message
            </h3>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
              <div>
                <input
                  type='text'
                  name='firstName'
                  placeholder='First Name'
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`
                    w-full px-4 py-3 rounded-lg text-base
                    transition-all duration-300
                    focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20
                    ${darkMode 
                      ? `${theme.inputBg} border ${theme.inputBorder} text-white` 
                      : `bg-gray-50 border border-gray-200 text-gray-900`
                    }
                    ${errors.firstName ? 'border-red-500 ring-red-500/20' : ''}
                  `}
                />
                {errors.firstName && (
                  <p className='text-red-500 text-xs mt-1'>{errors.firstName}</p>
                )}
              </div>
              <div>
                <input
                  type='text'
                  name='lastName'
                  placeholder='Last Name'
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`
                    w-full px-4 py-3 rounded-lg text-base
                    transition-all duration-300
                    focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20
                    ${darkMode 
                      ? `${theme.inputBg} border ${theme.inputBorder} text-white` 
                      : `bg-gray-50 border border-gray-200 text-gray-900`
                    }
                    ${errors.lastName ? 'border-red-500 ring-red-500/20' : ''}
                  `}
                />
                {errors.lastName && (
                  <p className='text-red-500 text-xs mt-1'>{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className='mb-4'>
              <input
                type='email'
                name='email'
                placeholder='Email Address'
                value={formData.email}
                onChange={handleChange}
                className={`
                  w-full px-4 py-3 rounded-lg text-base
                  transition-all duration-300
                  focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20
                  ${darkMode 
                    ? `${theme.inputBg} border ${theme.inputBorder} text-white` 
                    : `bg-gray-50 border border-gray-200 text-gray-900`
                  }
                  ${errors.email ? 'border-red-500 ring-red-500/20' : ''}
                `}
              />
              {errors.email && (
                <p className='text-red-500 text-xs mt-1'>{errors.email}</p>
              )}
            </div>

            <div className='mb-4'>
              <input
                type='tel'
                name='phone'
                placeholder='Phone Number (Optional)'
                value={formData.phone}
                onChange={handleChange}
                className={`
                  w-full px-4 py-3 rounded-lg text-base
                  transition-all duration-300
                  focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20
                  ${darkMode 
                    ? `${theme.inputBg} border ${theme.inputBorder} text-white` 
                    : `bg-gray-50 border border-gray-200 text-gray-900`
                  }
                `}
              />
            </div>

            <div className='mb-6'>
              <textarea
                name='message'
                rows='5'
                placeholder='Your Message'
                value={formData.message}
                onChange={handleChange}
                className={`
                  w-full px-4 py-3 rounded-lg text-base resize-none
                  transition-all duration-300
                  focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20
                  ${darkMode 
                    ? `${theme.inputBg} border ${theme.inputBorder} text-white` 
                    : `bg-gray-50 border border-gray-200 text-gray-900`
                  }
                  ${errors.message ? 'border-red-500 ring-red-500/20' : ''}
                `}
              />
              {errors.message && (
                <p className='text-red-500 text-xs mt-1'>{errors.message}</p>
              )}
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className={`
                w-full py-3 rounded-lg font-semibold text-white
                bg-gradient-to-r from-orange-500 to-amber-500
                transform transition-all duration-300
                flex items-center justify-center gap-2
                ${isSubmitting 
                  ? 'opacity-70 cursor-not-allowed' 
                  : 'hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/50'
                }
              `}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className='w-5 h-5 animate-spin' />
                  Sending...
                </>
              ) : isSubmitted ? (
                <>
                  <FaCheckCircle className='w-5 h-5' />
                  Message Sent!
                </>
              ) : (
                <>
                  <MdSend className='w-5 h-5' />
                  Send Message
                </>
              )}
            </button>

            {isSubmitted && (
              <div className='mt-4 p-3 rounded-lg bg-green-500/20 border border-green-500/50 text-center animate-fadeIn'>
                <p className='text-green-600 dark:text-green-400 text-sm'>
                  Thank you! Your message has been sent successfully. I'll get back to you soon!
                </p>
              </div>
            )}
          </form>
        </div>
      </div>

     
    </section>
  );
};

export default Contact;