import profilePicture from '../assets/profile-picture.png'

const styles = {
    img: 'mt-5 w-60 rounded-full mx-auto shadow-lg'
}

const ProfilePicture = () => 
    <img className={ styles.img } src={ profilePicture } />

export default ProfilePicture