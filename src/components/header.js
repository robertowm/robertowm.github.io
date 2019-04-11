import React, { Component } from 'react'
import { Link } from 'gatsby'
import {
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
} from 'reactstrap'
import { css } from '@emotion/core'

class Header extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const { siteTitle } = this.props
    const NavLink = ({ to, name, className, style }) => (
      <Link
        to={to}
        style={{ color: 'white', textDecoration: 'none', ...style }}
        className={`nav-link ${className}`}
      >
        {name}
      </Link>
    )

    return (
      <Navbar
        expand="sm"
        dark
        className="sticky-top"
        style={{ backgroundColor: 'rebeccapurple' }}
      >
        <Container>
          <Link
            to="/"
            className={'navbar-brand'}
            style={{
              color: 'white',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {siteTitle}
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav
              className="ml-auto"
              navbar
              css={css`
                li {
                  margin-bottom: 0;
                }
              `}
            >
              <NavItem>
                <NavLink to="/" name="About me" />
              </NavItem>
              <NavItem>
                <NavLink to="/blog" name="Blog" />
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default Header
