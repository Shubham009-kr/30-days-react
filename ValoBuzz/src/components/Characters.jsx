import React from 'react'
import data from './data'

const Characters = () => {
  return (
    <>
        <div>
        {data && data.length > 0 ?
            data.map((dataItem) => <div key={dataItem.id}
                className='flex flex-wrap'
            >
                <div style={{ backgroundImage: `url(${dataItem.image})`, borderRadius: '25px' }}
                    className='w-84 h-96 z-5 border-2 flex flex-col items-center rounded-[12px] bg-[url(${dataItem.image})] bg-cover bg-top bg-clip-padding shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'
                >
                    hello
                </div>
            </div>) 
            : <div>No data found</div>
    
        }
        </div>
    </>
    
  )
}

export default Characters