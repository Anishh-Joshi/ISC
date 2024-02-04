import React from 'react'
import Avatar from '../../assets/logos/avatar.jpg'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

function Footer() {
    return (
        <footer className="w-screen p-16">
            <div className="">
                <div className="md:flex md:justify-between">

                    <div className="flex space-x-5 items-center">
                        <img src={Avatar} className="rounded-full object-cover  h-16 w-16 " alt="avatar" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Anish Joshi</span>
                    </div>


                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className=" sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-[#78f678] ">© 2024 | Site maintained by Anish Joshi | All Rights Reserved.
                    </span>
                    <div className="flex space-x-3  mt-4 sm:justify-center sm:mt-0">
                        <a target="_blank" href="https://github.com/Anishh-Joshi" className="text-gray-500 hover:text-[#78f678] ms-5">
                            <BsGithub />
                            <span className="sr-only">GitHub account</span>
                        </a>
                        <a target="_blank" href="https://twitter.com/anishh_joshi" className="text-gray-500 hover:text-[#78f678] ms-5">
                            <BsTwitter />
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a href="https://www.instagram.com/anishh_joshi/" className="text-gray-500 hover:text-[#78f678]">
                            <BsInstagram />
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/anish-joshi-0686a2177/" className="text-gray-500 hover:text-[#78f678]">
                            <BsLinkedin />
                            <span className="sr-only">Linkedin</span>
                        </a>
                        <a target="_blank" href="https://www.facebook.com/EldyAnish" className="text-gray-500 hover:text-[#78f678]">
                            <BsFacebook />
                            <span className="sr-only">Facebook</span>
                        </a>



                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer