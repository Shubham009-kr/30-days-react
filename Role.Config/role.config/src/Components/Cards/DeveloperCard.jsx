import React from 'react'

const DeveloperCard = () => {
  return (
    <div>
        <div className='w-[32vw] h-[16vw] border-1 border-solid border-[#919191] rounded-2xl'>
            <div className="top w-full h-[16%] flex items-center justify-between bg-[#3d3d3d] rounded-t-2xl">
                <div className="ops flex gap-[4px]">
                    <div className='w-[12px] h-[10px]'></div>
                    <div className="red-btn w-[16px] h-[16px] bg-[#E9533A] rounded-full"></div>
                    <div className="yellow-btn w-[16px] h-[16px] bg-[#E0A231] rounded-full"></div>
                    <div className="green-btn w-[16px] h-[16px] bg-[#88B524] rounded-full"></div>
                </div>
                <div className="title text-white ml-4">
                    Developer.json
                </div>
                <div className="more-btn text-white"><h1>...</h1><div className='w-[32px] h-[10px]'></div>
                </div>
            </div>
            <div className="middle w-full h-[14%] flex flex-col items-center justify-center gap-4 bg-[#3d3d3d] border-t-1 border-solid border-[#919191]">
                    
            </div>
            <div className="bottom">
                <div className="01 text-white flex gap-2 bg-[#131313]"><p className='border-r-1 border-white'>01 &nbsp;</p><p>DevelopersCard.json</p></div>
                <div className="01 text-white flex gap-2 bg-[#1e1e1e]"><p className='border-r-1 border-white'>02 &nbsp;</p><p>{"{"}</p></div>
                <div className="01 text-white flex gap-2 bg-[#1e1e1e]"><p className='border-r-1 border-white'>03 &nbsp;</p><p>"name" : "Mike Wheeler"</p></div>
                <div className="01 text-white flex gap-2 bg-[#1e1e1e]"><p className='border-r-1 border-white'>04 &nbsp;</p><p>"title" : "Software Developer"</p></div>

            </div>
        </div>
    </div>
  )
}

export default DeveloperCard