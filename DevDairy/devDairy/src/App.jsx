import React from 'react'

const App = () => {

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <div className='lg:flex p-8 w-full h-screen gap-12 md:justify-end'>
      <form className='flex lg:w-1/3  md:items-center flex-col gap-4 '
      onSubmit={(e)=>{
        handleSubmit(e)
      }}>
        <input type="text" placeholder='Enter Title' className='border-1 border-gray-700 rounded-sm px-4 py-2 w-full' />
        <textarea placeholder='Enter or Paste your code snippet here...' name="" id="" className='border-1 border-gray-700 rounded-sm px-4 py-2 w-full'></textarea>
        <textarea placeholder='Add comment or description.' name="" id="" className='border-1 border-gray-700 rounded-sm px-4 py-2 w-full'></textarea>
        <button className='bg-green-500 text-white px-4 py-2 w-full rounded-sm mt-4'>Save Snippet</button>
      </form>
      <div className='lg:w-2/3 flex flex-col items-center bg-red-300'>
        <h1 className='text-2xl font-medium'>Your Saved Snippets</h1>
      </div>
    </div>
  )
}

export default App