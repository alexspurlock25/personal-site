import { useState, useEffect } from 'react'
import ProjectListItem from './ProjectListItem'

const styles = {
	grid: 'my-5 md:grid md:grid-cols-2 mx-auto w-max md:gap-2'
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

	return (
		<div className={ styles.grid }> 
			{ 
				repos.map(items => 
					<ProjectListItem 
						key={ items.name }
						title={ items.name } 
						link={ items.html_url } 
						lang={ items.language } 
						desc={ items.description } 
					/> 
				) 
			} 
		</div>
	)
}
export default ProjectList
