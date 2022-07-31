import React from 'react'
import profilePicture from '../assets/profile-picture.png'

const ProfilePicture = () => {
    return (
        <img className='mt-10 w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto' src={ profilePicture } alt="" width="384" height="512" />
    )
}

export default ProfilePicture