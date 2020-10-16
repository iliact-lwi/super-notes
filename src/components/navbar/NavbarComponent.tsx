import React from 'react';
import { NavLink } from "react-router-dom";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import Logo from "../../images/logo.png";

const NavbarComponent: React.FunctionComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <div className="navbar-title">
                <img className="navbar-image" src={ Logo } alt="Logo"/>
                <span className="navbar-logo">Super Notes</span>
            </div>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link as={ NavLink } to="/" href="/" exact>Home</Nav.Link>
                    <Nav.Link as={ NavLink } to="/notes" href="/notes">Notes</Nav.Link>
                    <Nav.Link as={ NavLink } to="/themes"  href="/themes">Themes</Nav.Link>
                    <Nav.Link as={ NavLink } to="/settings"  href="/settings">Settings</Nav.Link>
                    <NavDropdown title="About us" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={ NavLink } to="/about/projects" href="/about/projects">Projects</NavDropdown.Item>
                        <NavDropdown.Item as={ NavLink } to="/about/motivations" href="/about/motivations">Motivations</NavDropdown.Item>
                        <NavDropdown.Item as={ NavLink } to="/about/feedback" href="/about/feedback">Feedback</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent;