import { useState, useEffect } from 'react'
import ProjectListItem from './ProjectListItem'
import TextCard from './TextCard'

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
		<div> { repos.map(items => <ProjectListItem key={ items.id } title={ items.name } desc={ items.description } /> ) } </div>
	)
}
export default ProjectList
