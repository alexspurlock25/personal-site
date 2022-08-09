import ProfilePicture from '../components/ProfilePicture'
import TextCard from '../components/TextCard'


const container = 'container my-10 mx-auto'
const aboutMe ='Full time Engineer, and student at University of Cincinnati working on my Bachelor of Science in Information Technology (BSIT). I love making software, websites, and using new technologies to bring my ideas to life.'

const HomePage = () => {
    return (
        <div className={ container }>
            <ProfilePicture />
            <TextCard text={ aboutMe } />
        </div>
    )
}

export default HomePage