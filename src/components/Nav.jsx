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

const Nav = () => {
    return (
        <React.Fragment>
            <Header/>
            <Router>
                <div>
                    <nav>
                        <ul>
                            {/* item 1 */}
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            {/* item 2 */}
                            <li>
                                <Link to="/projects">Projects</Link>
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