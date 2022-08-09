import React from 'react'
import profilePicture from '../assets/profile-picture.png'

const profilePictureStyles = 'mt-5 w-60 rounded-full mx-auto shadow-lg'

const ProfilePicture = () => {
    return <img className={ profilePictureStyles } src={ profilePicture } />
}

export default ProfilePicture