import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const MainNav = ({ siteTitle }) => (
      <nav id="swup" className="nav" role="menu">
          <div className="nav-sub" role="menuitem">
            <Link to={`/portfolio/`}>Portfolio</Link>
          </div>
          <div className="nav-sub" role="menuitem">
            <Link to={`/blog/`}>Blog</Link>
          </div>
          <div className="nav-sub" role="menuitem">
            <Link to={`/contact/`}>Contact</Link>
          </div>
      </nav>
)

export default MainNav
