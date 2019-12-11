import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import MainNav from "./mainNav"

const Header = ({ siteTitle }) => (
  <header className="medium-container">
      <div className="site-logo">
        <Link to="/">John<span>Rock</span></Link>
      </div>
      <MainNav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
