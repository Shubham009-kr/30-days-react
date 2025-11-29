import React from 'react'
import DeveloperCard from '../Cards/DeveloperCard'

const Grid = () => {
  return (
    <div className='w-full h-screen'>
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-zinc-400 opacity-[0.1]'>Role.Config</h1>
        <div>
            <DeveloperCard />
        </div>
    </div>
  )
}

export default Grid