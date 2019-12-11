import React from "react"
import { Link } from "gatsby"
import PostLink from "../components/postLink"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Portfolio = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Portfolio</h1>
      <div>{Posts}</div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Portfolio
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`