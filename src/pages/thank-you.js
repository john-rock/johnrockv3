import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThankYou = () => (
  <Layout>
    <SEO title="Thank You" />
    <h1>Thank You</h1>
    <p>Thank you for reaching out. Your form has been submitted. I will get back to you as sooon as possible.</p>
    <p>Have a great day.</p>
    <Link className="back-btn" to="/">Go back</Link>
  </Layout>
)

export default ThankYou
