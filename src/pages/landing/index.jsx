import React, { useEffect, useState } from 'react';
import Left from '../../assets/gradients/left.svg';
import Right from '../../assets/gradients/right.svg';
import Avatar from '../../assets/logos/avatar.jpg';
import Gmail from '../../assets/logos/gmail.svg';
import { SiUpwork } from "react-icons/si";
import { MdCheck } from 'react-icons/md';
import { FiStar } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { HiCursorClick } from 'react-icons/hi'
import Testimonials from '../../Components/testimonials';
import { testimonialData } from '../../static/testimonial';

function LandingPage() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // You can adjust the threshold as needed
            const threshold = 50;

            setIsScrolled(scrollPosition > threshold);
        };

        // Attach the event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className='bg-[black] h-[100vh] w-screen overflow-y-auto relative  overflow-x-hidden'>
            <nav className={`fixed w-screen top-0 mx-auto my-auto py-1  bg-[#1e1e1e] z-10 ${isScrolled ? 'bg-opacity-70' : 'bg-opacity-0'}`}>
                <div className='w-screen top-0 mx-auto h-[10vh] z-10 '>
                    <ul className=' w-[60%] mx-auto p-2 text-gray-50 flex justify-evenly space-x-4'>
                        <Upwork />
                        <LinkedIn />
                        <Contact />
                    </ul>
                </div>
            </nav>
         <img
                draggable='false'
                src={Left}
                className='absolute right-[-20ch] top-[10vh]'
                alt='Left Gradient'
            />
            <img
                draggable='false'
                src={Right}
                className='absolute left-[-20ch] bottom-0'
                alt='Right Gradient'
            />

            <div className='flex flex-col items-center justify-center h-[80%] w-full space-y-4'>
                <img draggable='false' className='object-cover rounded-full h-[15rem] w-[15rem]' src={Avatar} />
                <h3 
            data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                
                style={{ fontFamily: "Cookie" }} className='text-gray-300 text-[2rem]'>
                    Blending web and app magic with a dash of Deep Learning wizardry. 🚀✨
                </h3>
                <div>
                    <button className='transition-colors duration-300 ease-in hover:shadow-lg shadow-lg hover:shadow-green-500/50 hover:text-[white] p-3 w-72 flex justify-center items-center space-x-2 rounded-xl border-2 border-[#34A853] text-white'>
                        <h2>Explore</h2>
                        <HiCursorClick />
                    </button>
                </div>
            </div>
            <div className='absolute bottom-5 right-5 '> <Testimonials project={testimonialData[0]} /></div>
        </div>
    );
}

const LinkedIn = () => {
    return (
        <li className='w-full flex justify-between items-center'>
            <div className='flex justify-between items-center'>
                <FaLinkedinIn className='mx-3 text-[#0A66C2] text-[3.5rem]' />
                <div>
                    <div className='flex justify-start items-center'>
                        <h3 className='text-[1.3rem]'>Anish Joshi
                        </h3 >
                        <div className='p-1 ml-4 mr-1 rounded-full bg-[#1e1ea9]'>
                            <MdCheck className='text-white text-[0.8rem]' />
                        </div>
                    </div>
                    <h3 className='text-[#d7d6d6] text-[0.8rem]'> Flutter | React | Django | NLP | Freelancer
                    </h3 >

                </div>
            </div>

            <div className='border-r border-dashed border-[1px] border-[#1e1e1e] h-16 space-x-2' />

        </li>
    )
}
const Contact = () => {
    return (<li className=' w-full flex justify-between items-center'>
        <div className='flex justify-between items-center'>
            <img className='h-[4rem]' draggable='false' src={Gmail} />
            <div>
                <h3 className='text-[1.3rem]'>Contact me
                </h3 >
                <h3 className=' text-[0.8rem] text-[#d7d6d6]'>anish.joshi098@gmail.com
                </h3 >

            </div>
        </div>

    </li>)
}

const Upwork = () => {
    return (<li className='flex w-full justify-between items-center  '>
        <div className='flex justify-between items-center'>
            <SiUpwork className='mx-3 text-[#6fda44] text-[4rem]' />
            <div>
                <div className='flex justify-start items-center'>
                    <h3 className='text-[1.3rem]'>Anish J.
                    </h3 >
                    <div className='p-1 ml-4 mr-1 rounded-full bg-[#1e1ea9]'>
                        <FiStar className='text-white text-[0.8rem]' />
                    </div>
                    <div className='p-1 mx-1 rounded-full bg-[#1e1ea9]'>
                        <MdCheck className='text-white text-[0.8rem]' />
                    </div>

                </div>
                <div className='text-[0.8rem] flex space-x-2 '><h3>Top Rated</h3><div className='flex'>
                {Array(5).fill(null).map((r, i) => {
                                    return <div key={i}>
                                        <svg className="w-4 h-4 text-[gold]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>

                                    </div>
                                })}
                </div>
            </div>

            </div>
        </div>
        <div className='border-r border-dashed border-[1px] border-[#1e1e1e] h-16 space-x-2' />

    </li>)
}




export default LandingPage;
