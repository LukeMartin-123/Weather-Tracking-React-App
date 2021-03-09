import React, { useState } from "react";
import Popup from "../Popup/Popup";
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
                
                <NavItem >
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}> </Popup>
                  <NavLink 
                    onClick={() => setButtonPopup(true)}
                    className= "nav-link" 
                    
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
