import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100")
      setUserData(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='bg-[#111111] h-screen w-full text-white'>
      <button onClick={fetchData}>Get Data</button>
    </div>
  )
}

export default App