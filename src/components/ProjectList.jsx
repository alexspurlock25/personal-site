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
		<div> { repos.map(items => <TextCard key={ items.id } text={ items.id } /> ) } </div>
	)
}
export default ProjectList
