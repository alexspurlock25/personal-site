import React from 'react'

const styles = {
	container: 'm-5 p-5 max-w-md mx-auto border rounded',
	title: 'mb-5 font-bold text-lg',
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
