import React, { useState } from 'react'

const Button = ({data, setColor}) => {

  return data.map((color, index) => (
        <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg capitalize'
        key={index}
        style={{backgroundColor:color}}
        onClick={(e)=> {e.stopPropagation(); setColor(color)}}>{color}</button>
  ));
}

export default Button