import React from 'react'
import ProjectListItem from './ProjectListItem'

const data = [
	{ title: 'Sticky', desc: 'A basic, minimalistic, offline, account manager. Stores and sorts username, emails, and passwords.'},
	{ title: 'Search and Sort in Java', desc: 'Me learning data structures and algorithms using java.'}
]

const ProjectList = () => {
	return (
		<div className=''>
			{ data.map(item => <ProjectListItem key={ item.title } title={ item.title } desc={ item.desc } /> ) }
		</div>
	) 
}

export default ProjectList
