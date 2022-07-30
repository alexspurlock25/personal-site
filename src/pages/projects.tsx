import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

// data types
import { Project } from '../misc/Types'

const ProjectsPage = (props: { data: Project }) => {
    return (
        <Layout pageTitle='Projects'>
            <p>Projects</p>
            {
                props.data.allMdx.nodes.map(node => (
                    <p>{ node.id }</p>
                ))
            }
        </Layout>
    )
}

export const query: Project = graphql`
    query {
        allMdx {
            nodes {
                frontmatter {
                    title
                }
                id
            }
        }
    }
`

export default ProjectsPage