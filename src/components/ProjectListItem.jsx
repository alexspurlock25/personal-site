const styles = {
	containerHeader: 'flex justify-between',
	title: 'font-bold text-lg',
	desc: 'my-2',
	link: ' block p-6 max-w-sm rounded border bg-black text-white shadow hover:shadow-lg hover:scale-95 duration-200',
	pill: 'text-xs bg-baby-bird text-white h-min max-w-fit px-3 py-1 rounded'
}

const ProjectListItem = ({ title, desc='', href = null, lang = '' }) => {
	return (
		<a href={ href } target='_blank' className={ styles.link } >
			<div>
				<div className={ styles.containerHeader }>
					<div className={ styles.title }>{ title }</div>
					{ lang ? <div className={ styles.pill }>{ lang }</div> : null }
				</div>
				{ desc ? <div className={ styles.desc }>{ desc }</div> : null }				
			</div>
		</a>
	)
}

export default ProjectListItem
