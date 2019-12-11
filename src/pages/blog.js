import React from "react"
import { Link } from "gatsby"
import PostLink from "../components/postLink"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <p>More to come...</p>
      {/* <Link to="/">Go back</Link> */}
    </Layout>
  )
}

export default Blog