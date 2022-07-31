import * as React from 'react'
import Card from '../components/Card'
import ProfilePicture from '../components/ProfilePicture'

const containerStyles = 'container mx-auto grid justify-center content-center mt-5'
const aboutMeData = {
    aboutMe: 'Full time Engineer, and student at University of Cincinnati working on my Bachelor of Science in Information Technology (BSIT). I love making software, websites, and using new technologies to bring my ideas to life.'
}

const HomePage = () => {
    return (
        <div className={ containerStyles }>
            <ProfilePicture />
            <Card>
                { aboutMeData.aboutMe }
            </Card>
        </div>
    )
}

export default HomePage