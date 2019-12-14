import React from "react"
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
      <SEO title="Portfolio" />
      <h1>Portfolio</h1>
      <div>{Posts}</div>
      {/* <Link to="/">Go back</Link> */}
    </Layout>
  )
}

export default Portfolio
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
          }
        }
      }
    }
  }
`