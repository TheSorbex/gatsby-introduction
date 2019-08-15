import React from 'react'
import Layout from '../layouts/index'
import { graphql, Link } from 'gatsby'
import Header from '../components/Header'

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Header />
      <p>{data.site.siteMetadata.title}</p>
      <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <Link to={'/about'} state={{ title: 'From index' }}>About</Link>
      <p>
            What do I like to do? Lots of course but definitely enjoy building
            websites.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
