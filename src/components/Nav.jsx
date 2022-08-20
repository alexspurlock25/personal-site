import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

// pages
import HomePage from '../pages/HomePage'
import OpenSourceProjectsPage from '../pages/OpenSourceProjectsPage'
import PrivateProjectsPage from '../pages/PrivateProjectsPage'
import DevLogPage from '../pages/DevLogPage'

const styles = {
    li: 'w-32 h-12 bg-black text-white rounded shadow hover:shadow-xl hover:translate-y-px duration-200',
    a: 'h-full grid place-items-center',
}

const Nav = () => {
    const [navOpen, setNavOpen] = useState(false)

    return (
        <React.Fragment>
            <Router>
                <div>
                    <nav>

                        {/* mobile nav */}
                        <section className='sm:hidden grid justify-items-center'>
                            <div className="space-y-2 w-min shadow-lg p-2 rounded" onClick={() => setNavOpen((prev) => !prev)}>
                                <div className='sr-only'>Open Navigation Menu</div>
                                <span className="block h-0.5 w-8 bg-gray-600"></span>
                                <span className="block h-0.5 w-8 bg-gray-600"></span>
                                <span className="block h-0.5 w-8 bg-gray-600"></span>
                            </div>

                            <ul className={ navOpen ? 'grid grid-cols-1 gap-1 mt-2' : 'hidden'}>
                                <li className={ styles.li }>
                                    <Link className={ styles.a } to="/" onClick={() => setNavOpen(false)}>Home</Link>
                                </li>
                                <li className={ styles.li }>
                                    <Link className={ styles.a } to="/private-projects" onClick={() => setNavOpen(false)}>Projects</Link>
                                </li>
                                <li className={ styles.li }>
                                    <Link className={ styles.a } to="/open-projects" onClick={() => setNavOpen(false)}>Open Source</Link>
                                </li>
                            </ul>
                        </section>

                        {/* regulat nav */}
                        <section className='hidden sm:block'>
                            <ul className='flex justify-center gap-2'>
                                <li className={ styles.li }>
                                    <Link className={ styles.a } to="/">Home</Link>
                                </li>
                                <li className={ styles.li }>
                                    <Link className={ styles.a } to="/private-projects">Projects</Link>
                                </li>
                                <li className={ styles.li }>
                                    <Link className={ styles.a } to="/open-projects">Open Source</Link>
                                </li>
                             </ul>
                        </section>
                    </nav>

                    <Routes>
                        <Route path="/" element={ <HomePage /> } />
                        <Route path='/private-projects' element={ <PrivateProjectsPage /> } />
                        <Route path='/open-projects' element={ <OpenSourceProjectsPage /> } />
                        <Route path='/private-projects/worthy/dev-log' element={ <DevLogPage /> } />
                    </Routes>

                </div>
            </Router>
        </React.Fragment>
    )
}

export default Nav