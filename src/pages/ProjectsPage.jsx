import * as React from 'react'
import TextCard from '../components/TextCard'

const projectsData = {
    temp: 'This website is new as of July 30th. I will have a nice view of my projects here. For now, visit my github.',
    ghLink: 'https://github.com/alexspurlock25'
}

const ProjectsPage = () => {
    return (
        <React.Fragment>
            <TextCard text={ projectsData.temp } />
            <div className='m-auto w-full text-center mt-10'>
                <a className='bg-green-200' href={ projectsData.ghLink } target="_blank">GitHub</a>
            </div>
        </React.Fragment>
    )
}

export default ProjectsPage