import React, { useState } from 'react'
import data from './data'


const Accordion = () => {
  const [selected, setSelected] = useState(null)
  
  function handleSingleSelection(getCurrentId){
    setSelected(getCurrentId === selected ? null : getCurrentId)

  }

  return (<>
    <div className='w-full h-screen '>
        <div className='flex flex-wrap items-center items-center justify-center gap-10 px-20 py-15'>
            {
                data && data.length > 0 ? 
                data.map(dataItem => <div 
                    // style={{backgroundImage: `url(${dataItem.image})`}}
                    className={`w-84 h-112 border-2 flex flex-col items-center rounded-[5px] bg-[url('${dataItem.image}')] bg-cover bg-center`}
                >
                    <div  onClick={() => handleSingleSelection(dataItem.id)}
                    className='flex items-center gap-8 cursor-grab h-12 w-full px-4 justify-between font-[valorant] text-[2vw] uppercase z-10'>
                        <h3 className=''>{dataItem.name}</h3>
                        <span>+</span>
                    </div>
                    { selected === dataItem.id ? <div className='px-5 mt-45 z-10 h-full w-full'>
                        <h4 className='uppercase font-[title] italic text-[24px]'>{dataItem.role}</h4>
                        <h5 className='text-[14px] italic font-medium'>{dataItem.abilities}</h5>
                        <p className='text-[14px] py-1'>{dataItem.description}</p>
                    </div> : null }
                </div>)
                : <div>No data found </div>
            }
        </div>
    </div>
    </>
  )
}

export default Accordion