/* eslint-disable react/jsx-no-undef */
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import logo from './image/battleshipIcon.jpg';

export default function navbar() {
    return ( 
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home">
                <img
                alt=""
                src= {logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                    Battleship
                </Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/rule">Rule</Nav.Link>
                </Nav>
            </Container>
      </Navbar>
    )
}