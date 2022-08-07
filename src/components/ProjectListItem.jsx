import React from 'react'

const styles = {
	container: 'border my-5 md:my-0 p-2 max-w-sm rounded',
	containerHeader: 'flex justify-between',
	title: 'font-bold text-lg',
	desc: 'my-2',
	link: 'bg-deep-royal text-slate-200 text-center px-3 py-1 h-min ml-1 rounded',
	lang: 'text-xs bg-baby-bird text-white h-min max-w-fit px-3 py-1 rounded',
}

const ProjectListItem = ({ title, desc, link, lang }) => {
	return (
		<div className={ styles.container }>
			<div className={ styles.containerHeader }>
				<div className={ styles.title }>{ title }</div>
				<a className={ styles.link } href={link} target='_blank'>Code</a>
			</div>
			<div className={ styles.desc }>{ desc }</div>
			<div className={ styles.lang}>{ lang }</div>
		</div>
	)
}

export default ProjectListItem
