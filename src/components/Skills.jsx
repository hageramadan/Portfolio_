import React, { useState, useEffect, useRef } from 'react';
import { 
    Code, Palette, Braces, Atom, Wind, MessageSquareCode, 
    Sparkles, TrendingUp, Zap, Star, Award, Rocket, 
    Cpu, Database, GitBranch, PenTool, Terminal 
} from 'lucide-react';

const Skills = ({ darkMode }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [counters, setCounters] = useState({});
    const sectionRef = useRef(null);

    const skills = [
        { name: 'HTML', icon: Code, level: 90, color: 'text-orange-500', bgColor: 'from-orange-500/30 to-red-500/20', description: 'Semantic & SEO friendly' },
        { name: 'CSS', icon: Palette, level: 85, color: 'text-blue-500', bgColor: 'from-blue-500/30 to-cyan-500/20', description: 'Responsive & Animations' },
        { name: 'JavaScript', icon: Braces, level: 80, color: 'text-yellow-500', bgColor: 'from-yellow-500/30 to-amber-500/20', description: 'ES6+, Async, DOM' },
        { name: 'React', icon: Atom, level: 75, color: 'text-cyan-500', bgColor: 'from-cyan-500/30 to-blue-500/20', description: 'Hooks, Context, Router' },
        { name: 'Tailwind CSS', icon: Wind, level: 70, color: 'text-sky-500', bgColor: 'from-sky-500/30 to-teal-500/20', description: 'Utility-first CSS' },
        { name: 'TypeScript', icon: Braces, level: 65, color: 'text-blue-400', bgColor: 'from-blue-400/30 to-indigo-500/20', description: 'Type Safety' },
        { name: 'Angular', icon: MessageSquareCode, level: 65, color: 'text-red-500', bgColor: 'from-red-500/30 to-pink-500/20', description: 'Components & Services' },
    ];

    const tools = [
        { name: 'Git', icon: GitBranch, color: 'text-orange-600' },
        { name: 'GitHub', icon: Code, color: 'text-gray-600' },
        { name: 'Figma', icon: PenTool, color: 'text-purple-500' },
        { name: 'VS Code', icon: Terminal, color: 'text-blue-500' },
        { name: 'Cursor', icon: Cpu, color: 'text-green-500' },
        { name: 'npm', icon: Database, color: 'text-red-500' },
        { name: 'Redux', icon: Database, color: 'text-purple-600' },
        { name: 'Firebase', icon: Database, color: 'text-yellow-600' },
        { name: 'MongoDB', icon: Database, color: 'text-green-600' },
    ];

    const darkTheme = {
        bg: 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800',
        cardBg: 'bg-gray-800/40 backdrop-blur-sm',
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        border: 'border-gray-700/50',
        glow: 'shadow-orange-500/20',
    };

    const lightTheme = {
        bg: 'bg-gradient-to-br from-gray-50 via-white to-gray-100',
        cardBg: 'bg-white/80 backdrop-blur-sm',
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-600',
        border: 'border-gray-200/50',
        glow: 'shadow-orange-500/10',
    };

    const theme = darkMode ? darkTheme : lightTheme;

    // Animate counters when section comes into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        skills.forEach((skill, idx) => {
                            setTimeout(() => {
                                setCounters(prev => ({
                                    ...prev,
                                    [idx]: skill.level
                                }));
                            }, idx * 100);
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section 
            id='skills' 
            ref={sectionRef}
            className={`py-24 px-4 sm:px-8 lg:px-14 ${theme.bg} transition-all duration-500 relative overflow-hidden`}
        >
            {/* Animated Background Elements */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse'></div>
                <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000'></div>
            </div>

            <div className='container max-w-5xl mx-auto relative z-10'>
                {/* Professional Section Header */}
                <div className='text-center mb-16' data-aos='fade-up'>
                    <div className='inline-block'>
                     
                        
                        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-6'>
                            <span className='bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent'>
                                Technical
                            </span>
                            <span className={`${darkMode ? 'text-white' : 'text-gray-800'} ml-4`}>
                                Skills
                            </span>
                        </h2>
                        
                        <div className='flex justify-center gap-2 mb-6'>
                            <div className='w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full'></div>
                            <div className='w-8 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full'></div>
                            <div className='w-4 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full'></div>
                        </div>
                        
                        <p className={`${theme.textSecondary} max-w-2xl mx-auto text-lg`}>
                            Crafting beautiful and performant web experiences with modern technologies
                        </p>
                    </div>
                </div>

                {/* Professional Skills Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 mb-20'>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            data-aos='fade-up'
                            data-aos-delay={`${index * 100}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`
                                ${theme.cardBg} rounded-2xl p-6 
                                transition-all duration-500 border ${theme.border}
                                hover:shadow-2xl ${theme.glow}
                                hover:-translate-y-2 hover:scale-[1.02]
                                group relative overflow-hidden cursor-pointer
                            `}
                        >
                            {/* Animated Border Gradient */}
                            <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl'></div>
                            
                            {/* Card Content */}
                            <div className='relative z-10'>
                                {/* Icon Section */}
                                <div className='mb-6'>
                                    <div className={`
                                        w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.bgColor}
                                        flex items-center justify-center mb-4
                                        transition-all duration-500
                                        group-hover:scale-110 group-hover:rotate-6
                                        relative
                                    `}>
                                        <skill.icon className={`w-8 h-8 ${skill.color} transition-all duration-500 group-hover:scale-110`} />
                                        <div className='absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-all duration-300'>
                                            <Star className='w-3 h-3 text-white' />
                                        </div>
                                    </div>
                                    
                                    <h3 className={`text-xl font-bold ${theme.textPrimary} mb-2`}>
                                        {skill.name}
                                    </h3>
                                    <p className={`text-sm ${theme.textSecondary}`}>
                                        {skill.description}
                                    </p>
                                </div>

                                {/* Progress Bar Section */}
                                <div className='space-y-3'>
                                    <div className='flex justify-between items-end'>
                                        <span className={`text-sm font-medium ${theme.textSecondary}`}>
                                            Proficiency
                                        </span>
                                        <div className='flex items-center gap-1'>
                                            <TrendingUp className={`w-4 h-4 ${skill.color} transition-all duration-300 group-hover:translate-x-1`} />
                                            <span className={`text-2xl font-bold ${skill.color}`}>
                                                {counters[index] || 0}%
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className='relative'>
                                        <div className='w-full bg-gray-700/30 rounded-full h-3 overflow-hidden'>
                                            <div
                                                className={`
                                                    bg-gradient-to-r from-orange-500 to-amber-500 h-3 rounded-full 
                                                    transition-all duration-1000 ease-out relative
                                                    group-hover:shadow-lg group-hover:shadow-orange-500/50
                                                `}
                                                style={{ width: `${counters[index] || 0}%` }}
                                            >
                                                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Level Badge */}
                                <div className='mt-4 pt-4 border-t border-gray-700/30'>
                                    <div className='flex justify-between text-xs'>
                                        <span className={theme.textSecondary}>Beginner</span>
                                        <span className={theme.textSecondary}>Intermediate</span>
                                        <span className={theme.textSecondary}>Expert</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Professional Tools Section */}
                <div className='text-center' data-aos='fade-up' data-aos-delay='600'>
                    <div className='inline-block mb-8'>
                        <div className='flex items-center justify-center gap-2 mb-3'>
                            <Sparkles className={`w-5 h-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                            <h3 className={`text-lg md:text-2xl font-bold ${theme.textPrimary}`}>
                                Tools & Technologies
                            </h3>
                            <Zap className={`w-5 h-5 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                        </div>
                        <div className='w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent'></div>
                    </div>
                    
                    <div className='flex flex-wrap justify-center gap-4 max-w-4xl mx-auto'>
                        {tools.map((tool, index) => (
                            <div
                                key={index}
                                className={`
                                    group relative
                                    transform transition-all duration-500
                                    hover:scale-110 hover:-translate-y-2
                                    cursor-pointer
                                `}
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                <div className={`
                                    px-6 py-3 rounded-full
                                    ${darkMode ? 'bg-gray-800/80' : 'bg-white'}
                                    border ${theme.border}
                                    shadow-md hover:shadow-xl
                                    transition-all duration-300
                                    flex items-center gap-2
                                `}>
                                    <tool.icon className={`w-4 h-4 ${tool.color} transition-all duration-300 group-hover:scale-110`} />
                                    <span className={`font-medium ${theme.textPrimary}`}>
                                        {tool.name}
                                    </span>
                                </div>
                                
                                {/* Hover Glow Effect */}
                                <div className={`
                                    absolute inset-0 rounded-full 
                                    bg-gradient-to-r from-orange-500 to-amber-500 
                                    opacity-0 group-hover:opacity-20 
                                    transition-opacity duration-300 blur-xl
                                    -z-10
                                `}></div>
                            </div>
                        ))}
                    </div>
                </div>

             
            </div>

          
        </section>
    );
};

export default Skills;