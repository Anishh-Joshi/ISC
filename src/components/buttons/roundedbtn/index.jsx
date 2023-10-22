import React from 'react';

function RoundedButton({ title, callback, width = "w-[2rem]", fontStyle = 'font-semibold' }) {
  return (
    <div onClick={() => callback()} className={`${fontStyle} cursor-pointer hover:bg-c-primary hover:text-white hover:border-c-primary ${width} mx-1 border-[2px] p-1 border-black  rounded-full flex justify-center items-center`}>
      {title}
    </div>
  );
}

export default RoundedButton;
