import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // const [data, setData] = useState([])
    // const [instaData, setInstaData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })

    // })

    const data = useLoaderData()
  return (
    <div className='text-center m-4 flex align-center justify-between text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git Pro Pic" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}