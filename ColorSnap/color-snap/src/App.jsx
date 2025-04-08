import React from 'react'
import { useState } from 'react'
import Button from './components/Button';
import { Toaster, toast } from "react-hot-toast";

const App = () => {
  const data = ["orchid","yellowgreen","khaki","plum","paleturquoise","lightsalmon"]
  const [color, setColor] = useState("lightsalmon");

  const handleBackgroundClick = (e) => {
    if (!e.target.classList.contains("tile")) {
      navigator.clipboard.writeText(color);
      toast.success("Color copied to clipboard!", {
        style: {
          background: color,
          color: "#000",
          border: "1px solid #000",
        },
      });
    }
  };

  return (
    <div className='w-full h-screen duration-500'
      style={{backgroundColor: color}}
      onClick={handleBackgroundClick}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          {
            <Button data={data} setColor={setColor}/>
          }
        </div>
      </div>
    </div>
  )
}

export default App