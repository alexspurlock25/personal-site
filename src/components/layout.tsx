import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container, heading, navLinks, navLinkItem, navLinkText, siteTitle
} from './layout.module.css'

// data types
import { SiteMetadata } from '../misc/Types'

const Layout = (props: { pageTitle: String, children: React.ReactNode }) => {
    const data: SiteMetadata = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className={ container }>
            <title>{ props.pageTitle } | { data.site.siteMetadata.title }</title>
            <header className={ siteTitle }>{ data.site.siteMetadata.title }</header>
            <nav>
                <ul className={ navLinks }>
                    <li className={ navLinkItem }><Link to='/' className={ navLinkText }>Home</Link></li>
                    <li className={ navLinkItem }><Link to='/projects' className={ navLinkText }>Projects</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={ heading }>{ props.pageTitle }</h1>
                { props.children }
            </main>
        </div>
    )
}


export default Layout