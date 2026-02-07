import React from 'react'
import { useState } from 'react'
import { X } from 'lucide-react'

const App = () => {

  const [title, setTitle] = useState("")
  const [code, setCode] = useState("")
  const [comment, setComment] = useState("")
  const [codeBlock, setCodeBlock] = useState([])

  const handleSubmit = (e) =>{
    e.preventDefault();

    const copyCodeBlock = [...codeBlock]
    copyCodeBlock.push({
      title, code, comment
    })

    setCodeBlock(copyCodeBlock)
    console.log(codeBlock)

    setTitle("")
    setCode("")
    setComment("")
  }

  const deleteCodeBlock = (index) => {
    const copyCodeBlock = [...codeBlock]
    copyCodeBlock.splice(index, 1)
    setCodeBlock(copyCodeBlock)
  }

  return (
    <div className='lg:flex p-8 w-full h-screen gap-12 md:justify-end'>
      <form className='flex lg:w-1/3  md:items-center flex-col gap-4 mt-16'
      onSubmit={(e)=>{
        handleSubmit(e)
      }}>
        <input type="text" placeholder='Enter Title' className='border-1 border-gray-700 rounded-sm px-4 py-2 w-full'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        />
        <textarea placeholder='Enter or Paste your code snippet here...' name="" id="" className='border-1 border-gray-700 rounded-sm px-4 py-2 w-full'
        value={code}
        onChange={(e) => {
          setCode(e.target.value)
        }}
        ></textarea>
        <textarea placeholder='Add comment or description.' name="" id="" className='border-1 border-gray-700 rounded-sm px-4 py-2 w-full'
        value={comment}
        onChange={(e) => {
          setComment(e.target.value)
        }}
        ></textarea>
        <button className='bg-green-500 active:bg-green-700 active:text-[#242424] text-white px-4 py-2 w-full rounded-sm mt-4'>Save Snippet</button>
      </form>
      <div className='lg:w-2/3 flex flex-col items-center'>
        <h1 className='text-2xl font-medium'>Your Saved Snippets</h1>
        <div className='w-full h-full mt-8 flex flex-col gap-4 overflow-auto'>
          {codeBlock.map((item, index) => {
            return (
              <div key={index} className='relative w-full bg-[#343434] rounded-2xl px-6 py-8 flex flex-col gap-4'>
                <h1 className='text-xl'>{item.title}</h1>
                <p className='p-8 bg-[#242424] rounded-xl inset-shadow-sm inset-shadow-indigo-500/20 whitespace-pre-wrap'>{item.code}</p>
                <p className='text-gray-400 text-sm whitespace-pre-wrap'>#{item.comment}</p>
                <button className='absolute bottom-4 right-7 bg-red-500 active:bg-red-700 active:text-[#242424] text-white px-4 py-2 rounded-sm'
                onClick={() => {deleteCodeBlock(index)
                }}
                >Delete</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App