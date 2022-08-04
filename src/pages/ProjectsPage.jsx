import * as React from 'react'
import TextCard from '../components/TextCard'
import ProjectList from '../components/ProjectList'

const data = {
    temp: 'This website is new as of July 30th. I will have a nice view of my projects here. For now, visit my github.',
    ghLink: 'https://github.com/alexspurlock25'
}

const ProjectsPage = () => {
    	return (
            <div className=''>
                <ProjectList />	
            </div>
        )	
}

export default ProjectsPage
