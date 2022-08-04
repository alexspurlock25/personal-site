import React from 'react'

const styles = {
	container: 'border my-5 p-2 mx-auto max-w-md rounded',
	title: 'font-bold text-lg pb-5',
	desc: ''
}

const ProjectListItem = ({ title, desc }) => {
	return (
		<div className={ styles.container }>
			<div className={ styles.title }>{ title }</div>
			<div className={ styles.desc }>{ desc }</div>
		</div>
	)
}

export default ProjectListItem
