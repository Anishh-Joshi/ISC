import React from 'react'
import { testimonialData } from '../../static/testimonial'
import Testimonials from '../../Components/testimonials/index.jsx'
import { SiDialogflow } from 'react-icons/si'

function TestimonialPage() {
    return (
        <div className='w-screen p-8 flex flex-col justify-center items-center text-white mx-auto'>
            <div className='flex p-16 text-[2rem] justify-center items-center'>
                <SiDialogflow size={40} className='mr-4' />
                <h2>
                Hear from my clients.
                </h2>

            </div>
            <div className='grid grid-cols-3'>
                {testimonialData.map((testimonial, ind) => {
                    return (<div key={ind} className='m-3'><Testimonials  project={testimonial}></Testimonials></div>)
                })}
            </div>
        </div>
    )
}

export default TestimonialPage