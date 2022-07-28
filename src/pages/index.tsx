import * as React from "react"
import { Link } from "gatsby"

// data
const links = [
  {
    text: "GitHub",
    url: "https://github.com/alexspurlock25",
    description:
      "My GitHub page"
  }
]

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page - Alexander Spurlock</title>
      <h1>
        Hi, my name is Alex
      </h1>
      <Link to="/projects">Projects</Link>
      <ul>
        {links.map(link => (
          <li key={link.url}>
            <span>
              <a href={link.url}>{link.text}</a>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
