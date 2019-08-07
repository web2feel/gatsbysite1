import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

    </div>
    <div 
      style={{
        background:`#eee`,
        padding:`10px 0px`
      }}>
        <ul style={{
          listStyle:`none`,
          margin:`0px auto`,
          padding:`0 20px`,
          maxWidth:`960px`,
          display:`flex`
        }}>
        <li style={{margin:`0 10px`, padding:0}}><Link to="/">Home</Link></li>
        <li style={{margin:`0 10px`, padding:0}}><Link to="/about">About</Link></li>
        <li style={{margin:`0 10px`, padding:0}}><Link to="/page-2">Page-2</Link></li>
        <li style={{margin:`0 10px`, padding:0}}><Link to="/blog">Blog</Link></li>
        </ul>
        
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
