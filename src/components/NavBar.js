import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import { useState,useEffect, useRef } from 'react';

export default function NavBar(){
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
   

    return (
        <div className={'nav-bar-container1'} style={scrollY>50?{backgroundColor:"white"}:{backgroundColor:"transparent"}}>
            <Navbar  data-bs-theme="light" >
                <Container className='d-flex align-items-center'>
                    <Navbar.Brand href="#home" ><img className='logo' src={scrollY<50? 'https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png':'https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png'}/></Navbar.Brand>
                    <Nav className="me-auto nav-bar">
                        <Nav.Link href="/" className='font-white fw-bold' style={scrollY>50?{color:'black'}:{color:'white'}}>Home</Nav.Link>
                        <div class="dropdown " >
                            <button class="btn  dropdown-toggle   border-0 pt-2 fw-bold" onMouseOver={e=>e.target.click()}  style={scrollY>50?{color:'black'}:{color:'white'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Industries
                            </button>
                           <ul class="dropdown-menu "  >
                                <li><a class="dropdown-item" href="/sustainability">Sustainability</a></li>
                                <li><a class="dropdown-item" href="/mining">Mineral Processing</a></li>
                                <li><a class="dropdown-item" href="/mine-to-mill">Mine-To-Mill-To-Mine-Optimisation</a></li>
                                <li><a class="dropdown-item" href="/oilgas">Oil & Gas</a></li>
                            </ul>
                        </div>
                        <Nav.Link className='p-2 font-white fw-bold'  style={scrollY>50?{color:'black'}:{color:'white'}} href="/AIsoftware">AI Software</Nav.Link>
                        <Nav.Link className='p-2 font-white fw-bold'  style={scrollY>50?{color:'black'}:{color:'white'}} href="/Blog">Blog</Nav.Link>
                        <Nav.Link className='p-2 font-white fw-bold'  style={scrollY>50?{color:'black'}:{color:'white'}} href="/contactUs">Contact Us</Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}