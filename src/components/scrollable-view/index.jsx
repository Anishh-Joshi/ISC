import React, { useState, useEffect } from "react";
import Banner1 from "../../assets/Screenshots/KupalLogin.png";
import Skel from "../../assets/Screenshots/skeleton.png";
import Skell from "../../assets/Screenshots/skell.png";
import Flutter from "../../assets/logos/flutter.png";
import Banner3 from "../../assets/logos/banner3.png";
import Asset302 from "../../assets/images/homepage/banner-assets/03/1.webp";

import { AiFillVideoCamera } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import "./index.css";
import { ImCross } from 'react-icons/im'
import { BsFillPlayFill } from "react-icons/bs";
import ReactPlayer from "react-player";
import KupalBanner from "../kupal-banner/banner1";
import KupalBanner2 from "../kupal-banner/banner2";



const Applications = ({ insides }) => {
    const [bannerImg, setBannerImg] = useState("Banner1");
    const [ytPopup, setYtPopup] = useState(false);
    const ioOptions = {
        threshold: 0.87,
    };
    const { ref: ref1, inView: inView1 } = useInView(ioOptions);
    const { ref: ref2, inView: inView2 } = useInView(ioOptions);
    const { ref: ref3, inView: inView3 } = useInView(ioOptions);
    const [selectedImage, setselectedImage] = useState(insides.insides1.sectionTitle === 'Footy' ? Skell : Skel)
    const [insideBanner1, setInsideBanner1] = useState(<></>)

    const [outsideBanner1, setOutsideBanner1] = useState(null)


    useEffect(() => {
        if (inView1) {
            setselectedImage(insides.insides1.img)
           
            setBannerImg("Banner1")
        };
        if (inView2) {
            setselectedImage(insides.insides2.img)
            setInsideBanner1(insides.insides2.InsideBanner1)
            setOutsideBanner1(insides.insides2.img)
            setBannerImg("Banner2")
        };
        if (inView3) {
            setselectedImage(insides.insides3.img)
            setInsideBanner1(insides.insides3.InsideBanner1)
            setOutsideBanner1(insides.insides3.OutsideBanner1)
            setBannerImg("Banner3")
        };
    }, [inView1, inView2, inView3,]);

    useEffect(() => {
        
        if (bannerImg==='Banner1') {
            setInsideBanner1(insides.insides1.InsideBanner1)
            setOutsideBanner1(insides.insides1.OutsideBanner1)
        };
        if (bannerImg==='Banner2')  {
            setInsideBanner1(insides.insides2.InsideBanner1)
            setOutsideBanner1(insides.insides2.OutsideBanner1)
        };
        if (bannerImg==='Banner3')  {
            setInsideBanner1(insides.insides1.InsideBanner1)
            setOutsideBanner1(insides.insides1.OutsideBanner1)
        };
    }, [bannerImg])
    


    return (
        <>
            {ytPopup && (
                <div className="bg-black/80 fixed top-0 left-0 right-0 bottom-0 z-[10000] grid place-content-center">
                    <div className="space-y-5 text-right">
                        <div
                            className="inline-block p-3 text-xl text-white border rounded-full"
                            onClick={() => {
                                setYtPopup(false);
                            }}
                        >
                            <ImCross />
                        </div>
                        <ReactPlayer
                            className="w-full h-full"
                            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                        />
                    </div>
                </div>
            )}
            <section className="pb-[80px] p-16 sm:pb-[85px] md:pb-[90px] bg-[black] text-white">
                <div className="text-center w-full sm:w-[80%] md:w-[50%] mx-auto space-y-6 pb-[20px]">
                    <h2 className="text-center font-bold text-[1.5rem]">
                        {insides.insides1.sectionTitle}


                    </h2>
                    <p className="text-gray-400 font-bold text-[1rem]">
                        Application Description
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1.5fr] gap-[10px] pt-20">

                    <div>
                        <div
                            className={`${inView1 ? "md:opacity-100" : "md:opacity-30"
                                } flex gap-5 transition-all duration-200 min-h-[60vh]`}
                            ref={ref1}
                        >
                            <div className="custom-left-icon-applications">
                                <div className="inline-block p-3 text-4xl text-blue-700 bg-blue-100 rounded-full shadow-sm">
                                    <AiFillVideoCamera />
                                </div>
                            </div>
                            <div className="pb-24 space-y-6">
                                <div className="space-y-8 pt-[4px]">
                                    <h3 className="flex items-center space-x-4 font-bold md:space-x-0">
                                        <div className="inline-block p-3 text-3xl text-blue-700 bg-blue-100 rounded-full shadow-sm md:hidden">
                                            <AiFillVideoCamera />
                                        </div>
                                        <span>{insides.insides1.sectionTitle}</span>
                                    </h3>
                                    <p className="">
                                        {insides.insides1.sectiondesc}
                                    </p>
                                </div>
                                <ul className="space-y-3">
                                    {insides.insides1.listItems.map((lis, ind) => {
                                        return <li key={ind} className="custom-plus">
                                            {lis}
                                        </li>
                                    })}
                                </ul>
                                <div className="block md:hidden rounded-2xl overflow-hidden border-[8px] border-white shadow-xl">
                                    <img src={Banner1} alt="Banner1" />
                                </div>
                            </div>
                        </div>
                        <div
                            className={`${inView2 ? "md:opacity-100" : "md:opacity-30"
                                } flex gap-5 transition-all duration-200 min-h-[60vh]`}
                            ref={ref2}
                        >
                            <div className="custom-left-icon-applications">
                                <div className="inline-block p-3 text-3xl text-red-500 bg-blue-100 rounded-full shadow-sm">
                                    <AiFillVideoCamera />
                                </div>
                            </div>
                            <div className="pb-24 space-y-6">
                                <div className="space-y-4 pt-[4px]">
                                    <h3 className="flex items-center space-x-4 font-bold">
                                        <div className="inline-block p-3 text-3xl text-red-500 bg-blue-100 rounded-full shadow-sm md:hidden">
                                            <AiFillVideoCamera />
                                        </div>
                                        <span> {insides.insides2.sectionTitle}</span>
                                    </h3>
                                    <p className="">
                                        {insides.insides2.sectiondesc}
                                    </p>
                                </div>
                                <ul className="space-y-3">
                                    {insides.insides2.listItems.map((lis, ind) => {
                                        return <li key={ind} className="custom-plus">
                                            {lis}
                                        </li>
                                    })}
                                </ul>
                                
                            </div>
                        </div>
                        <div
                            className={`${inView3 ? "md:opacity-100" : "md:opacity-30"
                                } flex gap-5 transition-all duration-200 min-h-[60vh]`}
                            ref={ref3}
                        >
                            <div className="custom-left-icon-applications">
                                <div className="inline-block p-3 text-3xl text-green-600 bg-blue-100 rounded-full shadow-sm">
                                    <AiFillVideoCamera />
                                </div>
                            </div>
                            <div className="pb-24 space-y-6 ">
                                <div className="space-y-4 pt-[4px]">
                                    <h3 className="flex items-center space-x-4 font-bold">
                                        <div className="inline-block p-3 text-3xl text-green-600 bg-blue-100 rounded-full shadow-sm md:hidden">
                                            <AiFillVideoCamera />
                                        </div>
                                        <span>
                                            {insides.insides3.sectionTitle}
                                        </span>
                                    </h3>
                                    <p className="">
                                        {insides.insides3.sectiondesc}
                                    </p>
                                </div>
                                <ul className="space-y-3">
                                    {insides.insides3.listItems.map((lis, ind) => {
                                        return <li key={ind} className="custom-plus">
                                            {lis}
                                        </li>
                                    })}
                                </ul>
                                <div className="block md:hidden rounded-2xl overflow-hidden border-[8px] border-white shadow-xl">
                                    <img src={Banner1} alt="Banner1" />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Section */}
                    <div className="hidden md:block">
                        <div className="sticky top-[40%] md:top-[30%] lg:top-[20%] left-0">
                            <div className="relative">
                                <img
                                    src={selectedImage}
                                    alt="Banner Images"
                                    data-aos="zoom-in"
                                    className="w-[80%] mx-auto rounded-2xl overflow-hidden"
                                />


                                {bannerImg === "Banner1" ? (
                                    <>
                                        {outsideBanner1} 
                                        <img
                                            src={insideBanner1}
                                            alt="Asset201"
                                            className="absolute top-[40%] left-[20%] w-[15%]"
                                            data-aos="zoom-in"
                                        />
                                    </>
                                ) : (
                                    ""
                                )}
                                {bannerImg === "Banner2" ? (
                                    <>
                                        {outsideBanner1} 
                                        <img
                                           src={insideBanner1}
                                            alt="Asset201"
                                            className="absolute top-[60%] h-[8rem] w-[10rem] left-[20%] "
                                            data-aos="zoom-in"
                                        />
                                    </>
                                ) : (
                                    ""
                                )}
                                {bannerImg === "Banner3" ? (
                                    <div className="mb-[30rem]">
                                        <img
                                            src={Asset302}
                                            alt="Asset201"
                                            className="absolute top-[40%] left-[20%] w-[15%]"
                                            data-aos="zoom-in"
                                        />
                                        <img
                                            src={Banner3}
                                            alt="Asset202"
                                            className="absolute top-[-50px] right-[5%] w-[50%]"
                                            data-aos="zoom-in"
                                        />
                                    </div>
                                ) : (
                                    ""
                                )}
                                <div
                                    className="inline-block text-4xl p-5 rounded-full bg-gray-700 text-white backdrop-filter backdrop-blur-[4px] bg-opacity-[40%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer shadow-md"
                                    onClick={() => {
                                        setYtPopup(true);
                                    }}
                                >
                                    <BsFillPlayFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Applications;
