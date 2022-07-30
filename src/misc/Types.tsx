export interface Project {
    allMdx: {
        nodes: [
            {
                frontmatter: {
                    date: string,
                    title: string
                },
                id: string
            }
        ]
    }
}

export interface SiteMetadata {
    site: {
        siteMetadata: {
            title: String
        }
    }
}