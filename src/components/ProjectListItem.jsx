 import React from 'react'

const styles = {
	container: 'w-full border my-5 md:my-0 p-2 max-w-sm rounded bg-black text-white shadow hover:shadow-lg hover:scale-95 duration-200',
	containerHeader: 'flex justify-between',
	title: 'font-bold text-lg',
	desc: 'my-2',
	lang: 'text-xs bg-baby-bird text-white h-min max-w-fit px-3 py-1 rounded',
	link: 'flex items-stretch'
}

const ProjectListItem = ({ title, desc, link, lang }) => {
	return (
		<a href={ link } target='_blank' className={ styles.link }>
			<div className={ styles.container }>
				<div className={ styles.containerHeader }>
					<div className={ styles.title }>{ title }</div>
					<div className={ styles.lang}>{ lang }</div>
				</div>
				<div className={ styles.desc }>{ desc }</div>				
			</div>
		</a>
	)
}

export default ProjectListItem
