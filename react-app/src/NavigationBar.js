import React, {useState} from 'react';
import {Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {NavLink as RRNavLink} from "react-router-dom";

function NavigationBar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color={props.color} dark={props.dark === "true"} light={props.light === "true"} expand={props.expand} container={props.container} fixed={props.fixed}>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink id="home-nav-link" to="/" tag={RRNavLink} activeClassName="active">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink id="about-nav-link" to="/about" tag={RRNavLink} activeClassName="active">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink id="portfolio-nav-link" to="/portfolio" tag={RRNavLink} activeClassName="active">Portfolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink id="contact-nav-link" to="/contact" tag={RRNavLink} activeClassName="active">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink id="resume-nav-link" to="/resume" tag={RRNavLink} activeClassName="active">Resume</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavigationBar;