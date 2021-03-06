import React, { useState } from "react";
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
    const [buttonPopup, setButtonPopup] = useState(false)
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
                
                
     </>
              </Nav>
            </Collapse>
            
          </Navbar>
        </div>
  );
}

export default NavbarI;
