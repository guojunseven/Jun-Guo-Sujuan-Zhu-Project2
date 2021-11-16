/* eslint-disable react/jsx-no-undef */
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'

export default function navbar() {
    return (
        // <Navbar className="justify-content-center" expand="lg" bg="light" variant="light">
        //     <Container>
        //         <Navbar.Brand href="/home">Battleship</Navbar.Brand>
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Nav.Link href="/home">Home</Nav.Link>
        //                 <Nav.Link href="/rule">Rule</Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
        <Nav className="justify-content-center" activeKey="/home" variant="pills">
            {/* <Nav.Item>
                <Nav.Link href="/home">Battleship</Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            {/* <NavDropdown title="Home" id="home-dropdown">
                <NavDropdown.Item href="/free">Free</NavDropdown.Item>
                <NavDropdown.Item href="/normal">Normal</NavDropdown.Item>
                <NavDropdown.Item href="/advanced">Advanced</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Item>
                <Nav.Link href="/rule">Rule</Nav.Link>
            </Nav.Item>
        </Nav>




    )
}