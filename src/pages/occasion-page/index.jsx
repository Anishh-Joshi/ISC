import React, { useState } from 'react';
import { productDummyData } from './product';
import Occasion from '../../assets/images/occasion.png';
import TextButton from '../../components/buttons/textbtn';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const ProductBannerOccasion = () => {
  const [productData] = useState(productDummyData);

  const backgroundStyle = {
    background: `url(https://images.unsplash.com/photo-1543012685-66a4e5a0d41b?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
    backgroundRepeat: 'no-repeat', // Prevent background image from repeating
    backgroundPosition: 'center', // Center the background image
    backgroundSize: 'cover', // Cover the entire container
    opacity: 1,
  };


  return (
    <div style={backgroundStyle} className="w-full  h-screen flex flex-row justify-between items-center p-4 bg-c-secondary">
      <div className='w-[30%] flex justify-between items-center'>
        <img src={Occasion} alt="Occasion" />
      </div>
      <div className="w-[70%]  rounded-xl">
        <div className='text-white'>
          <h2 className='text-[3.5rem] font-semibold'>Dashain Offer</h2>
          <h3>Elevate your Dashain with our curated festival collection. Add joy and elegance to your celebrations with our handpicked products.</h3>
        </div>
        <div className='flex no-scrollbar overflow-x-auto no-scrollbar'>
          <Swiper
            spaceBetween={1}
            slidesPerView={2}
            autoplay={{
              delay: 3000, // Adjust the delay as needed
              disableOnInteraction: false,
            }}
          >
            {productData.map((product, index) => (
               <SwiperSlide key={index} ><div  className="select-none my-4 w-[30rem] mx-2 bg-opacity-90 backdrop-filter backdrop-blur-lg bg-[#B68F54] rounded-xl">
                <div className="absolute  w-full h-full"></div>
                <div className="flex justify-between items-center p-2 w-[30rem] relative">
                  <div className="rounded-xl w-[12rem] overflow-hidden relative">
                    <img className="cursor-pointer object-cover h-48 w-[12rem]" src={product.photo} alt="prod" />
                  </div>
                  <div className="flex flex-col p-2 w-[18rem] items-center">
                    <div className="cursor-pointer text-xl font-semibold mt-4 flex rounded-full bg-white p-2">{product.name}</div>
                    <div className="flex flex-wrap">
                      <div className="cursor-pointer text-[0.8rem] p-2 m-1 rounded-full bg-c-secondary overflow-hidden" style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
                        Buy Now at <strong>₹ {product.price}</strong>
                      </div>
                    </div>
                    <TextButton title={"More..."} />
                  </div>
                </div>
              </div></SwiperSlide>
            ))}
          </Swiper>
        
        </div>
      </div>
    </div>
  );
};

export default ProductBannerOccasion;
