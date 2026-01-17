import React, { useState, useEffect } from 'react';
import { FaTiktok, FaFacebookF, FaInstagram, FaArrowLeft } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const Aditi = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 23,
        hours: 9,
        minutes: 56,
        seconds: 2
    });

    const [showHeader, setShowHeader] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission logic here
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowHeader(true);
            } else {
                setShowHeader(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (contactOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [contactOpen]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-white font-['DM_Sans'] text-gray-800 relative">

            {/* Header / Logo - Initially Hidden, Shows on Scroll */}
            <div className={`fixed top-0 left-0 w-full z-40 bg-white transition-all duration-500 ease-in-out transform ${showHeader ? 'translate-y-0 opacity-100 shadow-sm' : '-translate-y-full opacity-0'}`}>
                <div className="py-2 flex justify-center">
                    <div className="text-center">
                        <img
                            src="/aditi.png"
                            alt="Tech Surya Logo"
                            className="h-16 md:h-20 w-auto object-contain"
                        />
                    </div>
                </div>
            </div>


            {/* Hero Section */}
            <div className="w-full h-[100dvh] relative">
                {/* Mobile Video - Visible only on small screens */}
                <video
                    src="/mobileV.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="block md:hidden w-full h-full object-cover object-bottom"
                />

                {/* Desktop Video - Visible on medium screens and up */}
                <video
                    src="/video.MP4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hidden md:block w-full h-full object-cover object-bottom"
                />

                {/* Scroll Down Circle */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                    <div className="w-14 h-14 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-sm">
                        <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="bg-[#FFF1E1D9] pt-16 pb-16 px-4 flex justify-center">
                <div className="bg-white max-w-6xl w-full shadow-sm relative pt- pb-6 px-4 md:px-12 flex flex-col items-center text-center">

                    <div className="flex items-center gap-2 md:gap-4 -mb-5">
                        <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-8">
                            <img
                                src="/img1.png"
                                alt="Flower Left"
                                className="w-12 h-24 md:w-24 md:h-44 object-contain opacity-80"
                            />

                            <span className="text-[10px] md:text-sm font-bold tracking-widest text-gray-800 border-b-2 border-[#F1F16D] pb-1 uppercase text-center">
                                A Fragrance Journey is Awakening.....
                            </span>

                            <img
                                src="/img1.png"
                                alt="Flower Right"
                                className="w-12 h-24 md:w-24 md:h-44 object-contain opacity-80 scale-x-[-1]"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-14 text-black mb-10">
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl md:text-7xl font-normal">{String(timeLeft.days).padStart(2, '0')}</span>
                            <span className="text-[10px] md:text-xs text-gray-400 font-medium self-end mb-2">Days</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl md:text-7xl font-normal">{String(timeLeft.hours).padStart(2, '0')}</span>
                            <span className="text-[10px] md:text-xs text-gray-400 font-medium self-end mb-2">Hours</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl md:text-7xl font-normal">{String(timeLeft.minutes).padStart(2, '0')}</span>
                            <span className="text-[10px] md:text-xs text-gray-400 font-medium self-end mb-2">Mins</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl md:text-7xl font-normal">{String(timeLeft.seconds).padStart(2, '0')}</span>
                            <span className="text-[10px] md:text-xs text-gray-400 font-medium self-end mb-2">Sec</span>
                        </div>
                    </div>

                    {/* Main Welcome Text */}
                    <h2 className="text-xl md:text-2xl text-[#DA7988] font-medium tracking-widest uppercase mb-3">
                        Welcome To The World Of Fragrance !!!
                    </h2>
                    <p className="text-[#1E1E1E] text-base md:text-lg  leading-relaxed mb-8 max-w-3xl">
                        We are crafting an immersive world where <br />
                        perfume becomes ritual, emotion, and awakening.
                    </p>


                    <button
                        onClick={() => setContactOpen(true)}
                        onMouseEnter={() => setIsButtonHovered(true)}
                        onMouseLeave={() => setIsButtonHovered(false)}
                        className={`px-5 py-3 rounded-full text-sm font-bold tracking-widest uppercase mb-20 transition-all hover:scale-105 cursor-pointer ${isButtonHovered ? 'text-white' : 'text-gray-800'}`}
                        style={isButtonHovered ? {
                            background: '#DA7988',
                            border: '1px solid #DA7988'
                        } : {
                            background: `
                                linear-gradient(#fff, #fff) padding-box,
                                linear-gradient(90deg, #000000 0%, #DA7988 100%) border-box
                            `,
                            border: '1px solid transparent',
                        }}
                    >
                        Receive the First Blessing
                    </button>

                    <div className="w-full relative mt-8 md:-mt-20 flex flex-col md:flex-row items-end justify-between z-10">

                        <div className="absolute bottom-0 left-0 -ml-8  md:-ml-20 md:-mb-[7%] w-28 md:w-64 pointer-events-none z-0">
                            <img
                                src="/img.png"
                                alt="Flower Branch"
                                className="w-full object-contain -mb-[18%]   md:mb-[20%] scale-145 -md:ml-20 origin-bottom-left"
                            />
                        </div>

                        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20 md:pl-14 -mt-20 pt-0 md:mt-0 md:pt-10 pb-4 z-10">

                            <div className="text-[12px] md:text-[13px] text-[#1E1E1E] whitespace-nowrap order-2 md:order-1">
                                @2026 All Copyrights Reserved
                            </div>

                            <div className="flex items-center gap-4 order-1 md:order-2">
                                <a href="#" className="hover:opacity-70 transition">
                                    <img src="https://api.iconify.design/streamline:tiktok-solid.svg" alt="TikTok" className="w-4 h-4" />
                                </a>
                                <a href="#" className="hover:opacity-70 transition">
                                    <img src="https://api.iconify.design/fe:facebook.svg" alt="Facebook" className="w-4 h-4" />
                                </a>
                                <a href="https://www.instagram.com/maisonaditi?igsh=MTBtbHM2Zjl6dW1yaw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
                                    <img src="https://api.iconify.design/lets-icons:insta-fill.svg" alt="Instagram" className="w-5 h-5" />
                                </a>
                            </div>

                            <div className="text-[12px] md:text-[13px] text-[#1E1E1E] flex items-center gap-2 whitespace-nowrap order-3">
                                Design & Developed By
                                <span className="flex items-center">
                                    <img
                                        src="/logo.png"
                                        alt="Tech Surya Logo"
                                        className="h-8 md:h-12 w-auto object-contain"
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* POPUP MODAL */}
            {contactOpen && (
                <div
                    className="fixed inset-0 z-[999] bg-[url('/contact.jpg')] bg-cover  bg-center bg-no-repeat flex flex-col items-center justify-center p-4 overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-black/50 after:backdrop-blur-[3px] after:z-[-1]"
                    onClick={() => setContactOpen(false)}
                >

                    <div
                        className="bg-white relative w-full mt-16 max-w-4xl min-h-[400px] md:min-h-[500px] shadow-2xl flex flex-col items-center justify-center px-6 py-10 md:px-16 md:py-12 overflow-hidden md:overflow-visible rounded-lg md:rounded-none"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* DECORATIVE FLOWERS - Positioning to match screenshot with Mobile Responsiveness */}

                        {/* Top Left - Large Hanging Flower */}
                        <div className="absolute -top-[50px] -left-[50px] w-[140px] md:-top-[100px] md:-left-[250px] md:w-[450px] z-20 pointer-events-none">
                            <img src="/left.png" alt="Flower Top Left" className="w-full h-full object-contain" />
                        </div>

                        {/* Bottom Right - Rising Flower */}
                        <div className="absolute -bottom-[60px] -right-[30px] w-[160px] md:-bottom-[80px] md:-right-[250px] md:w-[490px] z-20 pointer-events-none">
                            <img src="/img.png" alt="Flower Bottom Right" className="w-full h-full object-contain rotate-[-10deg]" />
                        </div>

                        {/* Small Floating Flower - Right Side (near Name) */}
                        <div className="absolute top-[25%] -right-[15px] w-10 md:top-[30%] md:right-[70px] md:w-28 z-20 pointer-events-none opacity-90">
                            <img src="/img1.png" alt="Small Flower Right" className="w-full object-contain" />
                        </div>

                        {/* Small Floating Flower - Left Side (near Contact) */}
                        <div className="absolute bottom-[20%] -left-[20px] w-12 md:left-[50px] md:w-28 z-20 pointer-events-none opacity-90 transform scale-x-[-1]">
                            <img src="/img1.png" alt="Small Flower Left" className="w-full object-contain" />
                        </div>


                        {/* FORM CONTENT */}
                        <div className="relative z-10 w-full max-w-2xl text-center mt-10 md:mt-4">
                            <h2 className="text-xl md:text-xl text-black mb-2 font-medium uppercase  whitespace-normal md:whitespace-nowrap leading-tight">
                                Be among the first to enter the gardens of Maison Aditi.
                            </h2>

                            <p className="text-[#00000085] text-xs md:text-lg mb-8 md:mb-10 leading-relaxed px-4 md:px-0">
                                Receive Early Access, Sacred Stories, And Your Personal
                                <br className="hidden md:block" />
                                Fragrance Awakening.
                            </p>

                            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto flex flex-col gap-6 md:gap-8">
                                <div className="group relative">
                                    <input
                                        {...register("name", { required: true })}
                                        type="text"
                                        placeholder="Name"
                                        className="w-full border-b border-[#000000] py-2 focus:outline-none focus:border-black transition placeholder-gray-500 text-gray-800 text-sm bg-transparent"
                                    />
                                    {errors.name && <span className="absolute -bottom-5 left-0 text-red-400 text-[10px]">Name is required</span>}
                                </div>

                                <div className="group relative">
                                    <input
                                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                        type="email"
                                        placeholder="Email"
                                        className="w-full border-b border-[#000000] py-2 focus:outline-none focus:border-black transition placeholder-gray-500 text-gray-800 text-sm bg-transparent"
                                    />
                                    {errors.email && <span className="absolute -bottom-5 left-0 text-red-400 text-[10px]">Valid email is required</span>}
                                </div>

                                <div className="group relative">
                                    <input
                                        {...register("contact", { required: true })}
                                        type="tel"
                                        placeholder="Contact No"
                                        className="w-full border-b border-[#000000] py-2 focus:outline-none focus:border-black transition placeholder-gray-500 text-gray-800 text-sm bg-transparent"
                                    />
                                    {errors.contact && <span className="absolute -bottom-5 left-0 text-red-400 text-[10px]">Contact number is required</span>}
                                </div>

                                <div className="pt-6 md:pt-8 flex justify-center w-full">
                                    <button
                                        type="submit"
                                        className="w-full border border-pink-200 text-[#1E1E1E] font-bold text-sm md:text-md uppercase py-3 md:py-3.5
                                                 hover:bg-[#ffc0cb] transition duration-300 flex items-center justify-center gap-2 group"
                                    >
                                        RECEIVE BLESSING <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Back Navigation Button - Placed below the card */}
                    <div className="mt-8 flex justify-center z-[1000]">
                        <button
                            onClick={() => setContactOpen(false)}
                            className="w-12 h-12 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
                        >
                            <FaArrowLeft className="text-md" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Aditi;
