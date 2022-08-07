import { useState, useEffect } from 'react'
import ProjectListItem from './ProjectListItem'

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
		<div> { repos.map(items => <ProjectListItem key={ items.id } title={ items.name } link={ items.html_url } desc={ items.description } /> ) } </div>
	)
}
export default ProjectList
