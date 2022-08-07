import React from 'react'

const styles = {
	container: 'border my-5 p-2 mx-auto max-w-md rounded',
	containerHeader: 'flex justify-between mb-2',
	title: 'font-bold text-lg',
	desc: '',
	link: 'bg-stormy-sky text-slate-200 text-center px-3 py-1 h-min ml-1',
	lang: 'text-sm bg-deep-royal text-white h-min w-min px-3 py-1 rounded',
}

const ProjectListItem = ({ title, desc, link, lang }) => {
	return (
		<div className={ styles.container }>
			<div className={ styles.containerHeader }>
				<div className={ styles.title }>{ title }</div>
				<div className='flex justify-end items-center'>
					<div className={ styles.lang }>{ lang }</div>
					<a className={ styles.link } href={link} target='_blank'>Code</a>
				</div>
			</div>
			<div className={ styles.desc }>{ desc }</div>
		</div>
	)
}

export default ProjectListItem
