import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Container, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse } from 'reactstrap'
import styled from 'styled-components'

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { siteTitle } = this.props;
    const NavLink = ({ to, name, className, style }) =>
      <Link to={to} style={{ color: 'white', textDecoration: 'none', ...style }} className={`nav-link ${className}`}>
        {name}
      </Link>;

    return (
      <Navbar expand="sm" dark className="sticky-top" style={{ backgroundColor: 'rebeccapurple' }}>
        <Container>
          <NavbarBrand>
            <Link to="/" style={{ color: 'white', whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{siteTitle}</Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/" name="About me" />
              </NavItem>
              <NavItem>
                <NavLink to="/blog" name="Blog" />
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar >
    )
  }
}

export default Header
