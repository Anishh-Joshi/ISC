import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function Testimonials({project}) {

    return (
        <div data-aos="flip-right" data-aos-delay="200" className=" w-[35rem] h-full text-white bg-[#181818]">
        <div className="">
            <div className=" absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-20 transform rotate-12 w-1/4 h-full"></div>

            <div className='flex justify-evenly h-48  items-center'>

                <div className='w-[80%]'>
                    <div className='flex items-center'>
                        {project.imageUrl === null ?
                            <div className="w-16 h-16 p-1 flex justify-center items-center font-bold text-[1.8rem] rounded-full ring-2 object-cover ring-gray-300 dark:ring-gray-500">{project.owner[0]} </div>
                            :
                            <img className="w-16 h-16 p-1 rounded-full ring-2 object-cover ring-gray-300 dark:ring-gray-500" src="https://images.unsplash.com/photo-1696944871997-b449de2b488e?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bordered avatar" />
                        }
                        <div>
                            <h2 className='font-bold mx-2 text-[0.7rem]'>
                                {project.owner} <br></br>
                                {project.project}

                            </h2>
                            <div className="flex items-center space-x-1 mx-2">
                                {Array(project.rating).fill(null).map((r, i) => {
                                    return <div key={i}>
                                        <svg className="w-4 h-4 text-[gold]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>

                                    </div>
                                })}

                            </div>
                        </div>
                    </div>
                    <p className='flex justify-start items-start'> <FaQuoteLeft className='text-[gold]' size={45} /> <h2 className='p-3 text-[0.8rem]'>{project.remark}</h2></p>



                </div>
            </div>

        </div>
    </div>
    );
}

export default Testimonials;