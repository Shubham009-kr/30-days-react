import React from 'react'

const App = () => {

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <div className='lg:flex p-8 w-full h-screen gap-12 md:justify-end'>
      <form className='flex lg:w-1/3  md:items-center flex-col gap-4 mt-16'
      onSubmit={(e)=>{
        handleSubmit(e)
      }}>
        <input type="text" placeholder='Enter Title' className='border-1 border-gray-700 rounded-sm px-4 py-2 w-full' />
        <textarea placeholder='Enter or Paste your code snippet here...' name="" id="" className='border-1 border-gray-700 rounded-sm px-4 py-2 w-full'></textarea>
        <textarea placeholder='Add comment or description.' name="" id="" className='border-1 border-gray-700 rounded-sm px-4 py-2 w-full'></textarea>
        <button className='bg-green-500 text-white px-4 py-2 w-full rounded-sm mt-4'>Save Snippet</button>
      </form>
      <div className='lg:w-2/3 flex flex-col items-center'>
        <h1 className='text-2xl font-medium'>Your Saved Snippets</h1>
        <div className='w-full h-full mt-8 flex flex-col gap-4 overflow-auto'>
          <div className='w-full bg-[#343434] rounded-2xl px-6 py-8 flex flex-col gap-4'>
            <h1 className='text-xl'>Title</h1>
            <p className='p-8 bg-[#242424] rounded-xl inset-shadow-sm inset-shadow-indigo-500/20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi obcaecati quas non in harum fugit reprehenderit corrupti laborum odio nemo.</p>
            <p>#Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, error.</p>
          </div>
          <div className='w-full bg-[#343434] rounded-2xl px-6 py-8 flex flex-col gap-4'>
            <h1 className='text-xl'>Title</h1>
            <p className='p-8 bg-[#242424] rounded-xl inset-shadow-sm inset-shadow-indigo-500/20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi obcaecati quas non in harum fugit reprehenderit corrupti laborum odio nemo.</p>
            <p>#Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, error.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App