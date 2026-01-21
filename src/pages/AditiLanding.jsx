import React, { useState, useEffect } from 'react';

const AditiLanding = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 23,
        hours: 9,
        minutes: 56,
        seconds: 2
    });



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
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header / Logo - Sticky */}
            <div className="fixed top-0 left-0 w-full z-40 bg-white shadow-sm">
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


            {/* Video Section - Exactly as in screenshot */}
            <div className="w-full h-[100dvh] relative">
                {/* Desktop Video */}
                <video
                    src="/video2.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hidden md:block w-full h-full object-cover"
                />

                {/* Mobile Video - video2.mp4 */}
                <video
                    src="/mobileV.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="block md:hidden w-full h-full object-cover"
                />

                {/* Black Opacity Overlay - Desktop Only */}
                <div className="hidden md:block absolute inset-0 bg-black/50 pointer-events-none"></div>

                {/* Scroll Down Icon - Centered at bottom of video */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-smooth-bounce cursor-pointer group">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-white 
      flex items-center justify-center shadow-lg shadow-white/30 
      backdrop-blur-sm bg-white/10 
      transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">

                        <svg className="w-5 h-5 md:w-7 md:h-7 text-white 
          transition-transform duration-200 group-hover:translate-y-1"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M19 14l-7 7m0 0l-7-7m7 7V3">
                            </path>
                        </svg>
                    </div>
                </div>

            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col items-center justify-start bg-white px-4 md:px-6 py-8 md:py-12 md:py-20">
                {/* Main Heading */}
                <h1
                    className="
    font-montserrat
    font-light
    text-center
    uppercase
    text-[#000000]

    text-[15px]
    leading-[2.1]
    tracking-[0.28em]
    mt-1
    -mb-4
    

    md:text-[45.48px]
    md:leading-[77px]
    md:tracking-[0.16em]
    md:mt-0
    md:mb-12
  "
                >
                    <span className="
  md:hidden
  text-lg
  tracking-[0.2em]
  leading-snug
  text-center
  px-8
  max-w-full
">
                        <span className="block break-words">
                            AN&nbsp;olfactive&nbsp;JOURNEY
                        </span>
                        <span className="block break-words">
                            unfolds&nbsp;WITHIN
                        </span>
                    </span>


                    <span className="hidden md:inline">
                        An olfactive Journey<br />
                        Unfolds Within
                    </span>
                </h1>


                {/* Email Input */}
                <div className="w-full mt-10 md:mt-0 max-w-md mb-3 md:mb-4 px-12 md:px-0">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="font-poppins font-extralight italic w-full px-4 md:px-6 py-2 md:py-4 bg-[#D9D9D92B] text-center text-[#666666] placeholder-[#808080] text-[12px] md:text-[15px] tracking-[0.16em] focus:outline-none focus:ring-0"
                    />


                </div>

                {/* Enter The Circle */}
                <p className="text-center font-montserrat  md:text-xl  mb-14 md:mb-0 tracking-[0.15em] md:tracking-[0.2em] text-black mb-5 md:mb-8 md:mb-16 cursor-pointer transition-all duration-300 hover:text-gray-600 hover:tracking-[0.2em] md:hover:tracking-[0.25em]">
                    Enter The Circle
                </p>

                {/* THE UNVEILING IN */}
                <p className="font-montserrat text-center text-[13px] md:text-lg font-light tracking-[0.25em] md:tracking-[0.3em] text-[#000000] mb-4 md:mb-6 md:mb-8">
                    Unveiling In
                </p>

                {/* Countdown Timer */}
                <div className="w-full flex  md:flex-row gap-3 md:gap-4 md:gap-8 items-center justify-center mb-16 mt-3 md:mb-10 md:mb-16">
                    <div className="flex items-center justify-center gap-1">
                        <span className="font-poppins text-black text-[25px] md:text-[54.03px]" style={{
                            fontWeight: 300,
                            lineHeight: '100%',
                            letterSpacing: '0.05em',
                            textTransform: 'capitalize'
                        }}>
                            {String(timeLeft.days).padStart(2, '0')}
                        </span>
                        <span className="text-[10px] md:text-xs font-montserrat tracking-[0.1em] md:tracking-[0.15em] text-gray-400">
                            Days
                        </span>
                    </div>
                    <div className="flex items-center justify-center gap-1 pl-1">
                        <span className="font-poppins text-black text-[25px] md:text-[54.03px]" style={{
                            fontWeight: 300,
                            lineHeight: '100%',
                            letterSpacing: '0.05em',
                            textTransform: 'capitalize'
                        }}>
                            {String(timeLeft.hours).padStart(2, '0')}
                        </span>
                        <span className="text-[10px] md:text-xs font-montserrat tracking-[0.1em] md:tracking-[0.15em] text-gray-400">
                            Hours
                        </span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                        <span className="font-poppins text-black text-[25px] md:text-[54.03px]" style={{
                            fontWeight: 300,
                            lineHeight: '100%',
                            letterSpacing: '0.05em',
                            textTransform: 'capitalize'
                        }}>
                            {String(timeLeft.minutes).padStart(2, '0')}
                        </span>
                        <span className="text-[10px] md:text-xs font-montserrat tracking-[0.1em] md:tracking-[0.15em] text-gray-400">
                            Mins
                        </span>
                    </div>
                    {/* <div className="flex items-center justify-center gap-1 pr-2.5">
                        <span className="font-poppins text-black text-[25px] md:text-[54.03px]" style={{
                            fontWeight: 300,
                            lineHeight: '100%',
                            letterSpacing: '0.05em',
                            textTransform: 'capitalize'
                        }}>
                            {String(timeLeft.seconds).padStart(2, '0')}
                        </span>
                        <span className="text-[10px] md:text-xs font-montserrat tracking-[0.1em] md:tracking-[0.15em] text-gray-400">
                            Sec
                        </span>
                    </div> */}
                </div>

                {/* Social Media Icons - Solid Squares */}
                <div className="flex gap-3 items-center justify-center mb-4 -ml-3">
                    <a
                        href="#"
                        className="w-6 h-6 bg-black rounded flex items-center justify-center hover:opacity-80 transition-all"
                        aria-label="TikTok"
                    >
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="w-6 h-6 bg-black rounded flex items-center justify-center hover:opacity-80 transition-all"
                        aria-label="Facebook"
                    >
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </a>
                    <a
                        href="https://www.instagram.com/maisonaditi?igsh=MTBtbHM2Zjl6dW1yaw%3D%3D&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 bg-black rounded flex items-center justify-center hover:opacity-80 transition-all"
                        aria-label="Instagram"
                    >
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </a>
                </div>

                {/* Footer Text */}
                <p className="text-center text-[10px] md:text-xs mb-14  tracking-wide text-[#1E1E1E]">
                    @2026 All Copyrights Reserved
                </p>
            </div>
        </div>
    );
};

export default AditiLanding;
