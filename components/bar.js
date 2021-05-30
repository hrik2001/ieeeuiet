import Link from "next/link"
import React, { useState } from 'react';
import {
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
            } from 'reactstrap';



function NBar(props){
        const [isOpen, setIsOpen] = useState(false);
      const toggle = () => setIsOpen(!isOpen);
        return(
                
                  <Navbar style={{background: props.background}} light expand="md">
                    <NavbarBrand href="/"><img src="/logo.svg" style={{width:"200px"}}/></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                      <Nav className="mr-auto" navbar>
                        <NavItem>
                        </NavItem>
                      </Nav>
                          <NavLink style={{color : props.color}} href="/about">About</NavLink>
                          <NavLink style={{color : props.color}}href="/excom/">Excom</NavLink>
                          <NavLink style={{color : props.color}}href="/wie/">WIE</NavLink>
                          <NavLink style={{color : props.color}}href="http://edcuiet.in/">Updates(Post)</NavLink>
                    </Collapse>
                  </Navbar>
                );
}
export default NBar;
