import { Link } from "react-router-dom"
const styles = {
    container: 'mx-auto mt-5',
    back: ' ml-5 bg-black text-white rounded p-2 hover:text-black hover:bg-white hover:shadow-lg duration-200'
}

const DevLogPage = () => {
    return (
        <div className={ styles.container }>
            <div><Link to='/private-projects' className={ styles.back }>Back</Link></div>
            <div className="flex justify-center grow h-screen grid place-items-center font-thin text-2xl text-center">
                Dev log coming soon...
            </div>
        </div>
    )
}

export default DevLogPage