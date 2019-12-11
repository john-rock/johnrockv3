import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="large-container">
      <div className="site-logo">
        <Link to="/">John<span>Rock</span></Link>
      </div>
      <nav id="swup" className="nav" role="menu">
          <div className="nav-sub" role="menuitem">
            <Link to={`/`}>Home</Link>
          </div>
          <div className="nav-sub" role="menuitem">
            <Link to={`/`}>Portfolio</Link>
          </div>
          <div className="nav-sub" role="menuitem">
            <Link to={`/`}>Blog</Link>
          </div>
          <div className="nav-sub" role="menuitem">
            <Link to={`/`}>Contact</Link>
          </div>
      </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
