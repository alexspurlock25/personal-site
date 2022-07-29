export interface ProjectData {
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