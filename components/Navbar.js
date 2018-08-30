import React, { Component } from "react";
import Link from 'next/link';
import { withRouter } from 'next/router'
import SvgLoader from 'bv-react-svgloader'

import links from '../routes'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

// const links = ;

class NavBar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  activeMenu = (menu) => (menu==this.props.router.pathname ? 'menu-active' : '')

  render() {
    return (
      <Navbar
        color="transparent"
        style={{marginTop : '20px'}}
        light expand="md">
        <NavbarBrand href="/"><SvgLoader src='/static/images/logo1.svg' className="svg-logo"/></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {links.map(({ key, href, label }) => (
              <NavItem key={key}>
                <Link href={href} prefetch>
                  <NavLink className={`${this.activeMenu(href)}`}>{label}</NavLink>
                </Link>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
        <style jsx>{`
          .nav-link{
            cursor:pointer ;
          }
        `}
        </style>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);
