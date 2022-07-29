import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

// data types
import { ProjectData } from '../misc/Types'

const ProjectsPage = (props: { data: ProjectData }) => {
    return (
        <Layout pageTitle='Projects'>
            <p>Projects</p>
        </Layout>
    )
}

export default ProjectsPage