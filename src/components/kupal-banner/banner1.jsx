import React from 'react';
import { BiLogoFirebase } from "react-icons/bi";
import { FcAutomatic, FcAndroidOs, FcSettings } from "react-icons/fc";
import { FiSettings } from 'react-icons/fi';
function KupalBanner() {
    return (
        <div data-aos="zoom-in" className='absolute top-[-50px] text-[1rem] font-semibold right-[10%] w-[50%] flex flex-col space-y-2 justify-center items-center'>
            <div className='shadow-xl space-x-3 text-[#46489D] flex justify-center items-center  rounded-xl bg-[white]  h-[4rem] w-[18rem]'>
                <div className='p-1 bg-[#46489D] text-white rounded-full '>
                <BiLogoFirebase size={30} /></div> <h3 className=''>Firebase Authentication</h3>
            </div>

            <div className='shadow-xl space-x-3 text-[#f04930]  flex justify-center items-center  rounded-xl  bg-[white]  h-[4rem] w-[26rem]'>
            <div className='p-1 bg-[#f04930]  text-white rounded-full '><FiSettings size={30} /> </div><h3 className=''>BLoc Pattern</h3>
            </div>
            <div className='shadow-xl space-x-3 flex justify-center items-center  rounded-xl text-[#55ef50] bg-[white]  h-[4rem] w-[18rem]'>
            <div className='p-1 bg-[#d3efd2] text-white rounded-full '><FcAndroidOs size={30} /></div><h3 className=''>Available on Android</h3>
            </div>
        </div>
    );
}


export default KupalBanner
