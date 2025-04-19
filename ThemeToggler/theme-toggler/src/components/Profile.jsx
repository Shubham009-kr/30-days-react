import React, {useContext} from 'react'
import UserContext from '../context/UserContext'
import { NavLink } from 'react-router-dom'

const Profile = () => {
    const {user} = useContext(UserContext)
    if(!user) return (
        <>
            <div>Please Login</div>
            <NavLink to="/" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Green</NavLink>
        </>
    )
    return(
        <div>Welcome {user.userName}, Your email id: {user.email} and your password is: {user.password}</div>
    )
}

export default Profile