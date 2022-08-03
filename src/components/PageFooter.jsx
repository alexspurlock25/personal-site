const styles = {
    footer: 'mt-auto grid grid-flow-col auto-rows-cols-max justify-items-center content-center bg-gradient-to-r from-thunder to-deep-royal h-16 text-slate-200',
    a: 'bg-foam w-20 h-10 grid content-center text-center'
}

const PageFooter = () => {
    return (
        <footer className={ styles.footer }>
            <a className={ styles.a } href='https://docs.google.com/document/d/e/2PACX-1vRFfqGpshZO3LFxjqCP5WHWlUIun2ikTeoCAlP5FOWzPjRe8qQgKk5YI51KGwGT9Fo88l7N825Prz-6/pub' target='_blank'>Resume</a>
            <a className={ styles.a } href='https://github.com/alexspurlock25' target='_blank'>GitHub</a>
        </footer>
    )
}

export default PageFooter