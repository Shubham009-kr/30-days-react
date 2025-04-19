import React, {useContext} from 'react'
import UserContext from '../context/UserContext'
import { NavLink } from 'react-router-dom'

const Profile = () => {
    const {user} = useContext(UserContext)
    if(!user) return (
        <>
           <section className='w-full h-screen relative'>
                <NavLink to="/" className="absolute top-10 left-10 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Go To Main Menu</NavLink>
                <div className='w-full h-full flex flex-col gap-2 items-center justify-center '>
                    <h1 className='text-6xl text-emerald-800'>No Profiles Available</h1>
                    <NavLink to="/" className=' hover:underline hover:text-emerald-800 cursor-pointer text-xl text-emerald-500'>Create One?</NavLink>
                </div>
           </section>
        </>
    )
    return(
        <>
             <section className='w-full h-screen relative'>
                <NavLink to="/" className="absolute top-10 left-10 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Go To Main Menu</NavLink>
                <div className='w-full h-[100vh] flex items-center justify-center'>
                    <div class="bg-emerald-100 shadow-10xl h-[60vh] my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
                    <div class="relative h-40">
                        <img class="absolute h-full w-full object-cover" src={`${user.coverBgPic}`} />
                    </div>
                    <div class="relative shadow mx-auto h-40 w-40 -my-12 border-white rounded-full overflow-hidden border-4">
                        <img class="object-cover w-full h-full" src={`${user.coverPic}`} />
                    </div>
                    <div class="mt-16">
                        <h1 class="text-lg text-center font-semibold">
                        {user.userName} 
                        </h1>
                        <p class="text-sm text-gray-600 text-center">
                        {user.email} 
                        </p>
                    </div>
                    <div class="mt-6 pt-3 flex flex-wrap mx-6 border-t">
                        <div class="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
                        User experience
                        </div>
                        <div class="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
                        VueJS
                        </div>
                        <div class="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
                        TailwindCSS
                        </div>
                        <div class="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
                        React
                        </div>
                        <div class="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
                        Painting
                        </div>
                    </div>
                    </div>
    </div>
            </section>
        </>
        
    )
}

export default Profile