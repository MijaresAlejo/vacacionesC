import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Link from "next/link";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }
  toggleNavbar() {
    this.setState({ collapsed: !this.state.collapsed });
  }
  render() {
    const { collapsed } = this.state;
    return (
      <div>
        <Navbar color="dark" dark>
          <Link href="/">
            <img src="/img/logo.png" alt="" width="60" height="60"></img>
          </Link>
          <Link href="/">
            <NavbarBrand href="/" className="mr-auto">
              &nbsp;&nbsp;Vacaciones <p>&nbsp;&nbsp;&nbsp;&nbsp;Cancún</p>
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link href="/offers/">
                  <NavLink>Ofertas</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/hotels/">
                  <NavLink>Hoteles</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/tours/">
                  <NavLink>Tours</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/vacational-club/">
                  <NavLink>Club Vacacional</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
