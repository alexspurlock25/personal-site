import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProjectsPage from '../pages/ProjectsPage'

const styles = {
    li: 'w-32 h-12 bg-black text-white rounded shadow hover:shadow-xl hover:translate-y-px duration-200',
    a: 'h-full grid place-items-center'
}

const Nav = () => {
    return (
        <React.Fragment>
            <Router>
                <div>
                    <nav>
                        <ul className='flex justify-center gap-2'>
                            <li className={ styles.li }>
                                <Link className={ styles.a } to="/">Home</Link>
                            </li>
                            <li className={ styles.li }>
                                <Link className={ styles.a } to="/projects">Projects</Link>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        {/* item 1 */}
                        <Route path="/" element={ <HomePage /> } />
                        {/* item 2 */}
                        <Route path='/projects' element={ <ProjectsPage /> } />
                    </Routes>

                </div>
            </Router>
        </React.Fragment>
    )
}

export default Nav