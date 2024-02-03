import React from 'react';
import { GiCloudUpload, GiClick } from "react-icons/gi";
import { FcAutomatic, FcAndroidOs } from "react-icons/fc";
import { MdConnectWithoutContact } from 'react-icons/md';
function KupalBanner2() {
    return (
        <div data-aos="zoom-in" className='absolute top-[-50px] text-[0.9rem] font-semibold right-[10%] w-[50%] flex flex-col space-y-2 justify-center items-center'>

            <div className='shadow-xl space-x-3 flex justify-center items-center font-semibold rounded-xl text-[#46489D]  bg-[white]  h-[4rem] w-[26rem]'>
            <div className='p-1 bg-[#46489D] text-white rounded-full '><GiCloudUpload size={30} /></div> <h3 className=''>Upload Cool Photos</h3>
            </div>
            <div className='shadow-xl space-x-3 flex justify-center items-center font-semibold rounded-xl text-[#f04930]  bg-[white]  h-[4rem] w-[18rem]'>
            <div className='p-2 bg-[#f04930] text-white rounded-full '><GiClick size={25} /> </div><h3 className=''>Hit or Receive Hits</h3>
            </div>

            <div className='shadow-xl space-x-3 flex justify-center items-center font-semibold rounded-xl text-[#46489D] bg-[white]  h-[4rem] w-[26rem]'>

            <div className='p-1 bg-[#46489D] text-white rounded-full '><MdConnectWithoutContact size={30} /></div><h3 className=''>Make Match</h3>
            </div>
        </div>
    );
}

export default KupalBanner2
