import React from 'react'
import { graphql, Link } from 'gatsby'

export const query = graphql`
 query($slug: String!) {
     markdownRemark(fields: { slug: {eq: $slug } }) {
         frontmatter {
             title
             date(formatString: "DD MMMM, YYYY")
         }
         excerpt
     }
 }
`

const Blog = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <h2>{props.data.markdownRemark.frontmatter.date}</h2>
      <p>{props.data.markdownRemark.excerpt}</p>
      <Link to='/about'>Go back</Link>
    </div>
  )
}

export default Blog
