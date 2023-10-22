import React from 'react'

function TextButton({title,callBack,textSize ='text-1rem', fontStyle='font-semibold' }) {
  return (
    <p onClick={()=>callBack()} className={`${fontStyle} px-1 cursor-pointer ${textSize}`} >{title}</p>
  )
}

export default TextButton