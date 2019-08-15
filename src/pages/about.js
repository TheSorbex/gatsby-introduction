import React from 'react'
import { graphql, Link } from 'gatsby'
import Header from '../components/Header'

export default ({ data }) => {
  return (
    <div>
      <Header />
      <h1

      >
          Amazing Pandas Eating Things
      </h1>
      {console.log(data)}
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link to={`/blog/${node.fields.slug}`} key={node.id}>
          <h3>
            {node.frontmatter.title}{' '}
            <span>
                — {node.frontmatter.date}
            </span>
          </h3>
          {node.excerpt}
        </Link>
      ))}
    </div>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(
      skip: 0, 
      limit: 17, 
      filter: {frontmatter: {published: {eq: true}}},
      sort: {fields: [frontmatter___date], order: DESC}
      ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
