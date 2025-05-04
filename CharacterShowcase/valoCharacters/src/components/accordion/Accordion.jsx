import React, { useState } from 'react'
import data from './data'


const Accordion = () => {
  const [selected, setSelected] = useState(null)
  
  function handleSingleSelection(getCurrentId){
    setSelected(getCurrentId === selected ? null : getCurrentId)

  }

  return (<>
    <div className='w-full h-screen '>
        <div className='flex flex-wrap items-center items-center justify-center gap-30 px-20 py-15'>
            {
                data && data.length > 0 ? 
                data.map(dataItem => <div 
                    style={{ backgroundImage: `url(${dataItem.image})`, borderRadius: '25px' }}
                    className={`w-84 h-112 z-5 border-2 flex flex-col items-center rounded-[12px] bg-[url(${dataItem.image})] bg-cover bg-top bg-clip-padding shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
                `}
                >
                    {/* <img src={dataItem.image} alt="" className='w-20 h-20' /> */}
                    <div  onClick={() => handleSingleSelection(dataItem.id)}
                    className='flex items-center gap-8 cursor-grab h-12 w-full px-4 rounded-t-[12px] justify-between font-[valorant] text-[2vw] uppercase z-10 bg-gray-300/30 backdrop-filter backdrop-blur-sm'>
                        <h3 className=''>{dataItem.name}</h3>
                        <span>+</span>
                    </div>
                    { selected === dataItem.id ? <div className='px-5 mt-45 z-10 h-full w-full bg-gray-300/30 backdrop-filter backdrop-blur-sm'>
                        <h4 className='uppercase font-[title] italic text-[24px]'>{dataItem.role}</h4>
                        <h5 className='text-[14px] italic font-medium'>{dataItem.abilities}</h5>
                        <p className='text-[14px] py-1'>{dataItem.description}</p>
                    </div> : null }
                    { selected === dataItem.id ? <div className='absolute w-[100%] fixed h-[100%] bg-amber-200/20 -z-10'>
                    </div> : null }
                    { selected === dataItem.id ? <div className='absolute w-[160%] fixed h-[100%] rounded-[12px]  -z-10'>
                        <div className='px-3'>
                            {/* <h4 className='absolute top-[10%] font-[title] uppercase text-[40px] [writing-mode:vertical-lr] [text-orientation:upright] '>{dataItem.name}</h4> */}
                            <h4 className='absolute bottom-[20%] font-[title] uppercase text-2xl text-white text-stroke-3 '>{dataItem.name}</h4>
                            <h4 className='absolute bottom-[15%] font-[title] uppercase text-2xl  '>{dataItem.name}</h4>
                            <h4 className='absolute bottom-[10%] font-[title] uppercase text-2xl  text-red-950'>{dataItem.name}</h4>
                            <h4 className='absolute bottom-[5%] font-[title] uppercase text-2xl  text-red-800'>{dataItem.name}</h4>
                            <h4 className='absolute bottom-[0%] font-[title] uppercase text-2xl  text-red-500'>{dataItem.name}</h4>

                            <h4 className='absolute bottom-[20%] right-0 mx-3  font-[title] uppercase text-2xl text-white text-stroke-3 '>{dataItem.name}</h4>
                            <h4 className='absolute bottom-[15%] right-0 mx-3  font-[title] uppercase text-2xl  '>{dataItem.name}</h4>
                            <h4 className='absolute bottom-[10%] right-0 mx-3  font-[title] uppercase text-2xl  text-red-950'>{dataItem.name}</h4>
                            <h4 className='absolute bottom-[5%]  right-0 mx-3 font-[title] uppercase text-2xl  text-red-800'>{dataItem.name}</h4>
                            <h4 className='absolute bottom-[0%]  right-0 mx-3 font-[title] uppercase text-2xl  text-red-500'>{dataItem.name}</h4>
                        </div>
                        
                        {/* <h4 className='font-[title]'>PHOENIX</h4> */}
                    </div> : null }
                </div>
                
                )
                : <div>No data found </div>
            }
            
        </div>
    </div>
    </>
  )
}

export default Accordion