import * as React from 'react'

const containerStyles = 'grid justify-center content-center w-full h-60 bg-gradient-to-r from-stone-800 to-stone-900 mb-2'
const headerStyles = 'text-slate-200 text-lg'

const Header = () => {
    return (
        <div className={ containerStyles }>
            <header className={ headerStyles }>Alexander Spurlock</header>
        </div>
    )
}

export default Header