import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from "reactstrap";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavbarI() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/"> Weather Tracker </NavbarBrand>
    
    
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
 
                
                <>
                <NavItem>
                  <NavLink
                    href="/"
                    className={
                      window.location.pathname === "/"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/Table"
                    className={
                      window.location.pathname === "/Table"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Table View
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/Chart"
                    className={
                      window.location.pathname === "/Chart"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Chart
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href=""
                    className={
                      window.location.pathname === ""
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/Track"
                    className={
                      window.location.pathname === "/Track"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Track
                  </NavLink>
                </NavItem>

     </>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
  );
}

export default NavbarI;