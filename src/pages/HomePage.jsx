import ProfilePicture from '../components/ProfilePicture'
import TextCard from '../components/TextCard'

const styles = {
    container: 'container my-10',
}
const data = {
    aboutMe: 'Full time Engineer, and student at University of Cincinnati working on my Bachelor of Science in Information Technology (BSIT). I love making software, websites, and using new technologies to bring my ideas to life.'
}

const HomePage = () => {
    return (
        <div className={ styles.container }>
            <ProfilePicture />
            <TextCard text={ data.aboutMe } />
        </div>
    )
}

export default HomePage