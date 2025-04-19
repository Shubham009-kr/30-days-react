import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)
    if(!user) return (
        <div>Please Login</div>
    )
    return(
        <div>Welcome {user.userName}, Your email id: {user.email} and your password is: {user.password}</div>
    )
}

export default Profile