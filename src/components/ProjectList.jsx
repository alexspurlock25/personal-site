import { useState, useEffect } from 'react'
import ProjectListItem from './ProjectListItem'

const styles = {
	grid: 'md:flex md:justify-center md:my-5 md:grid md:grid-cols-2 md:mx-auto md:w-max md:gap-2'
}
const ProjectList = () => {
	const [repos, setRepos] = useState([])

	const fetchData = async () => {
		let res = await fetch('https://api.github.com/users/alexspurlock25/repos')
		let data = await res.json()
		setRepos(data)
	}

	useEffect(() => {
		fetchData()
	}, [])

	console.log(repos)
	return (
		<div className={ styles.grid }> 
			{ 
				repos.map(items => 
					<ProjectListItem key={ items.id } title={ items.name } link={ items.html_url } lang={ items.language } topics={ items.topics } desc={ items.description } /> 
				) 
			} 
		</div>
	)
}
export default ProjectList
