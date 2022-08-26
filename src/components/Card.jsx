const styles = {
    container: 'container flex-wrap rounded mt-10 text-center'
}

export default Card = ({ children }) => {
    return (
        <div className={ styles.container }>
            { children }
        </div>
    )
}