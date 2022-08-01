import React from 'react'

const TextCard = ({ text }) => {
    return (
        <div className='m-auto w-11/12 mt-10 md:w-5/12 tracking-wider'>
            { text }
        </div>
    )
}

export default  TextCard