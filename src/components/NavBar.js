import React from 'react'
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'

import { Link } from 'react-router-dom'

export default function NavBar() {
    return (

        <div> 
                <Navbar bg="light" expand="lg">
                      <Container>
                       <Navbar.Brand  to="/"><h1><Link to='/home' className='linkNav'>LatteToGo</Link></h1></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="me-auto">
                            
                     

                            <NavDropdown title="Shop" id="basic-nav-dropdown">
                              <div id="NavDropDownDiv">
                              <NavDropdown.Item className='nav-link' to="/ceai"><Link to='/ceai' className='linkNav'>Ceai</Link></NavDropdown.Item>
                              <NavDropdown.Item className='nav-link' to="/cafea"><Link to='/cafea' className='linkNav'>Cafea</Link></NavDropdown.Item>
                             
                              <NavDropdown.Item className='nav-link' to="/echipamenteCafea"><Link to='/echipamenteCafea' className='linkNav'>Echipamente Cafea</Link></NavDropdown.Item>
                              </div>
                            </NavDropdown>                                         
                  
                            <NavDropdown  title="Prepara Acasa" id="basic-nav-dropdown" >
                              <NavDropdown.Item  className='nav-link'  to="/reteteCafea"> <Link  className='linkNav' to="/reteteCafea">Retete pentru acasa</Link></NavDropdown.Item>
                            
                            
                            </NavDropdown>
                            <Nav.Link className='nav-link'  to="/contact"> <Link to='/contact' className='linkNav'>Contact</Link> </Nav.Link>
                            <Nav.Link className='nav-link'  to="/login"><Link to='/login' className='linkNav'> Cont</Link> </Nav.Link>
                          </Nav>
                        </Navbar.Collapse>
                      </Container>
                </Navbar>
              <div>
                  
              </div>
        </div>
    
    )
}
