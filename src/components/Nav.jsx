import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProjectsPage from '../pages/ProjectsPage'
import Header from './Header'

const liStyles = "w-32 h-12 bg-stormy-sky text-slate-200"
const linkStyles = "h-full grid place-items-center"

const Nav = () => {
    return (
        <React.Fragment>
            <Header/>
            <Router>
                <div>
                    <nav>
                        <ul className='flex justify-center gap-2'>
                            {/* item 1 */}
                            <li className={liStyles}>
                                <Link className={linkStyles} to="/">Home</Link>
                            </li>
                            {/* item 2 */}
                            <li className={liStyles}>
                                <Link className={linkStyles} to="/projects">Projects</Link>
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