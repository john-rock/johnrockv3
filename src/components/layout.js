/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import MainNav from "./mainNav"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="site-wrapper">
      <div className="small-container">
        <Header siteTitle={data.site.siteMetadata.title} />
          <main className="page-content">{children}</main>
          <footer className="site-foot">
          <MainNav />
            <p>Crafted in Northeast Pennsylvania</p>
            <p>© {new Date().getFullYear()} John Rock</p>
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
