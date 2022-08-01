import * as React from 'react'
import ProfilePicture from '../components/ProfilePicture'
import TextCard from '../components/TextCard'

const containerStyles = 'container mx-auto grid justify-center content-center mt-5'
const aboutMeData = {
    aboutMe: 'Full time Engineer, and student at University of Cincinnati working on my Bachelor of Science in Information Technology (BSIT). I love making software, websites, and using new technologies to bring my ideas to life.'
}

const HomePage = () => {
    return (
        <div className={ containerStyles }>
            <ProfilePicture />
            <TextCard text={ aboutMeData.aboutMe } />
        </div>
    )
}

export default HomePage