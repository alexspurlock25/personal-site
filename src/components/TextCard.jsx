const styles = {
    container: 'm-auto w-11/12 mt-10 md:w-5/12 tracking-wider'
}

const TextCard = ({ text }) => {
    return (
        <div className={ styles.container }>
            { text }
        </div>
    )
}

export default TextCard