import React from 'react'
import {BsSearchHeartFill} from 'react-icons/bs'

function SearchBar({pos="absolute top-[45vh] left-[41%]", color='text-white'}) {
  return (
    <div data-aos="fade-left" class={` flex justify-start items-center shadow-2xl text-c-txt ${pos}  rounded-full  border-[1px] p-2`}>
       <BsSearchHeartFill className={`mx-2 ${color}`} size={20}/>

    <input
      class=" pr-4 py-2 rounded-full outline-none bg-transparent  placeholder-gray-700"
      type="text"
      placeholder="Search..."
    />
 
    
  </div>
  
  )
}

export default SearchBar