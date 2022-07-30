import * as React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProjectsPage from '../pages/ProjectsPage'

const Nav = () => {
    return (
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
    )
}

export default Nav