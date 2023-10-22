import React from 'react';
import { FaGift } from 'react-icons/fa'
import GiftBox from '../../assets/images/giftbox.jpg'
import Testimonials from '../../components/testimonials';
import Trademark from '../../components/trademark';
import SearchBar from '../../components/search';
import TrendingCard from '../../components/trending';

function LandingPage() {
  return (
    <div className="flex h-screen">
      <SearchBar/>
      <TrendingCard/>
      <div className="flex-1 flex flex-col font-normal  bg-c-primary pt-24">
        <h4 className='text-[#dabaf9] text-[1.3rem] mt-20 px-10'>A World of Gifts, Just a Click Away.</h4>
        <div className='flex items-center text-[4rem] px-10 my-6' style={{ lineHeight: '1' }}>
          <h3 className='font-light'>
            Experience
            <br />
            Magic Of Gifting.
          </h3>
        </div>
        <h4 className='text-c-txt text-[1rem] mb-4 px-10'>Celebrate the Art of Giving and Unwrap the Magic of Gifting with Us, Where Every Present Holds a World of Joy.</h4>
        <div className='bg-c-txt cursor-pointer mt-12 hover:text-c-txt hover:bg-c-secondary w-[16rem] h-[3.5rem] flex justify-center items-center font-semibold mx-10  text-c-secondary rounded-full p-2 '>Explore Now  <FaGift className='bg-white p-1 rounded-full text-black mx-2' size={30} />  </div>
        <div className='absolute bottom-10 left-10'> <Trademark/></div>
      </div>
      <div className="flex-1 bg-c-secondary">
        <div className='flex justify-center items-center'>
          <img className='mt-24 h-[70vh]' src={GiftBox}></img></div>
        <div data-aos="fade-left" className='absolute bottom-5 right-5 '> <Testimonials/></div>
      </div>
    </div>
  );
}

export default LandingPage;
