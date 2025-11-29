import React from 'react'

const DeveloperCard = () => {
  return (
    <div>
        <div className='w-[32vw] h-[16vw] border-1 border-solid border-[#919191] rounded-2xl'>
            <div className="top w-full h-[16%] flex items-center justify-between mx-4 bg-[#3d3d3d] rounded-t-2xl">
                <div className="ops flex gap-[4px]">
                    <div className="red-btn w-[16px] h-[16px] bg-[#E9533A] rounded-full"></div>
                    <div className="yellow-btn w-[16px] h-[16px] bg-[#E0A231] rounded-full"></div>
                    <div className="green-btn w-[16px] h-[16px] bg-[#88B524] rounded-full"></div>
                </div>
                <div className="title text-white ml-4">
                    Developer.json
                </div>
                <div className="more-btn">...</div>
            </div>
            <div className="middle"></div>
            <div className="bottom"></div>
        </div>
    </div>
  )
}

export default DeveloperCard