import React, { useState } from "react";
import {   
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from "reactstrap";

  const NavBar = props => {
      console.log(props);
      const [isOpen, setIsOpen] = useState(false);

      const toggle = () => setIsOpen(!isOpen);

      return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Heather Carr || Profile</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/AboutMe">About Me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/ContactMe">Contact Me</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      );
  };

  export default NavBar;