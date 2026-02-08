import React, { use, useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(4)

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=8`)
      setUserData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [index])

  const movePrev = () =>{
    if(index > 1){
      setIndex(index - 1)
      fetchData()
    }else if(index === 1){
      setIndex(1)
      fetchData()
    }
  }

  const moveNext = () =>{
    setIndex(index + 1)
    fetchData()
  }

  let printUserData = <h3 className='text-gray-400 text-xs'>No User Available</h3>
  
  if(userData.length > 0){
    printUserData = userData.map((user, idx) => {
      return (<div className=''>
        <a href={user.url} target="_blank" rel="noopener noreferrer">
          <div key={idx} className="h-60 w-88 overflow-hidden rounded-lg">
          <img src={user.download_url} alt={user.author} className="w-full h-full object-cover" />
        </div>
        </a>
        <p className="text-sm mt-2">{user.author}</p>
      </div>
        
      )
    })
  }

  return (
    <div className='bg-[#242424] h-screen w-full text-white overflow-auto p-16'>
      <h1>PixVerse</h1>
      <div className='flex items-center justify-center gap-4 flex-wrap mt-8 p-8'>
        {printUserData}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 active:scale-95 text-white px-4 py-2 rounded-md"
        style={{opacity: index==1?0.5:1}}
        onClick={()=>{
          movePrev()
        }}
        >Prev</button>
        <button className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 active:scale-95 text-white px-4 py-2 rounded-md" 
        onClick={moveNext}
        >Next</button>
      </div>
    </div>
  )
}

export default App