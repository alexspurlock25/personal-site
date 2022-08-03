const styles = {
    footer: 'mt-auto grid grid-flow-col auto-rows-cols-max justify-items-center content-center bg-gradient-to-r from-thunder to-deep-royal h-16 text-slate-200',
    a: 'bg-foam w-20 h-10 grid content-center text-center'
}

const PageFooter = () => {
    return (
        <footer className={ styles.footer }>
            {/* <a className={ styles.a } href='#'>Resume</a> */}
            <a className={ styles.a } href='https://github.com/alexspurlock25' target='_blank'>GitHub</a>
        </footer>
    )
}

export default PageFooter