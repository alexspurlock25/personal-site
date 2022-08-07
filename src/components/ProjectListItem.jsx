import React from 'react'

const styles = {
	container: 'border my-5 p-2 mx-auto max-w-md rounded',
	containerHeader: 'flex justify-between',
	title: 'font-bold text-lg pb-5',
	desc: '',
	link: 'bg-stormy-sky text-slate-200 text-center px-3 py-1 h-min'
}

const ProjectListItem = ({ title, desc, link }) => {
	return (
		<div className={ styles.container }>
			<div className={ styles.containerHeader }>
				<div className={ styles.title }>{ title }</div>
				<a className={ styles.link } href={link} target='_blank'>Code</a>
			</div>
			<div className={ styles.desc }>{ desc }</div>
		</div>
	)
}

export default ProjectListItem
