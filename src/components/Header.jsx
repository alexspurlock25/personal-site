import * as React from 'react'

const containerStyles = 'grid content-center w-full bg-gradient-to-r from-thunder to-deep-royal mb-2'
const headerStyles = 'text-slate-200 font-serif text-5xl text-center py-10'

const Header = () => {
    return (
        <div className={ containerStyles }>
            <header className={ headerStyles }>Alexander Spurlock</header>
        </div>
    )
}

export default Header
