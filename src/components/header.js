import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => {
  const navbarStyle = {
    background: 'rebeccapurple',
    marginBottom: '1.45rem',
  }

  const innerNavbarStyle = {
    margin: '0 auto',
    maxWidth: 960,
    padding: '1.45rem 1.0875rem',
  }

  const titleStyle = { margin: 0 }

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  }

  return (
    <div style={navbarStyle}>
      <div style={innerNavbarStyle}>
        <h1 style={titleStyle}>
          <Link to="/" style={linkStyle}>
            {siteTitle}
          </Link>
        </h1>
      </div>
    </div>
  )
}

export default Header
