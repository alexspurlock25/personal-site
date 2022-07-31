import React from 'react'

const Card = ({ children }) => {
    return (
        <div className='container flex-wrap rounded mt-10 text-center'>
            { children }
        </div>
    )
}

export default Card