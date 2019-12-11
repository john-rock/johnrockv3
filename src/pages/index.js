import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, I'm John</h1>
    <p>I am a Web Developer with 3+ years of professional experience in front-end development. Currently I am working as a Lead Developer for a marketing company based out of Scranton, PA. I specialize in front-end development but I am willing to learn any tools required to get the job done.</p>
    <p>I love what I do.</p>
    {/* <Link to="/portfolio/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
