import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './NavBar.css'

export default function NavBar(){
    return (
        <div className='nav-bar-container'>
            <Navbar bg="light" data-bs-theme="light" >
                <Container className='d-flex align-items-center'>
                    <Navbar.Brand href="#home" className='fs-3 fw-bold'>NTWIST</Navbar.Brand>
                    <Nav className="me-auto nav-bar">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle text-bg-light border-0 pt-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <Nav.Link className='p-2' href="#features">AI Software</Nav.Link>
                        <Nav.Link className='p-2' href="#pricing">Blog</Nav.Link>
                        <Nav.Link className='p-2'href="#pricing">Contact Us</Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}