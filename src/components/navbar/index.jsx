import React, { useState, useEffect } from 'react';
import RoundedButton from '../buttons/roundedbtn';
import TextButton from '../buttons/textbtn';
import LogoText from '../logo-txt';
import './nav.css'
import SearchBar from '../search';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to detect scrolling
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Update the state based on the scroll position
    if (window.scrollY > 0) {
      setScrolled(true);

      // Check if the user has scrolled past half the screen
      if (window.scrollY > window.innerHeight / 2) {
        setShowSearchBar(true);
      } else {
        setShowSearchBar(false);
      }
    } else {
      setScrolled(false);
      setShowSearchBar(false);
    }
  };
  return (
    <div className={`sticky z-[99] top-0 h-[5rem] w-[100%] flex ${scrolled ? ' rounded-md  ' : ''}`}>
      <div className={`flex-1 flex justify-between items-center bg-c-primary ${scrolled ? 'bg-white glassy ' : ''}`}>
        <LogoText></LogoText>
        <ul className={`text-[1rem] font-normal w-[80%] flex justify-evenly items-center ${scrolled ? '' : ''}`}>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Gifts</li>
          <li className='cursor-pointer'>Trending</li>
          <li className='cursor-pointer'>Contact Us</li>
        </ul>
        <div className={`w-[50%] flex justify-end items-center ${scrolled ? 'block' : 'hidden'}`}>
        {showSearchBar?<SearchBar  color='text-black' pos='relative'/>:<></>}
        <TextButton title={"Sign Up"} />

        <RoundedButton width={'w-[5rem]'} title={"Login"} />
      </div>
      </div>

      <div className={`flex-1 flex justify-end items-center bg-c-secondary ${scrolled ? 'hidden' : ''}`}>
        <TextButton title={"Sign Up"} />
        <RoundedButton width={'w-[5rem]'} title={"Login"} />
      </div>
    </div>
  );
}

export default Navbar;
