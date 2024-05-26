import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from "react-icons/fa";
import {LinkContainer} from 'react-router-bootstrap';
const Header = () => {
    return (
        <header>
            <Navbar className='bg-slate-600' variant='dark' expand='md' collapseOnSelect>
                <Container>
                    <LinkContainer to='/' >
                        <Navbar.Brand className='font-extrabold' style={{ fontFamily: 'Poetsen One, sans-serif'}}> HamudShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <LinkContainer to='/cart'>
                                <Nav.Link className='flex flex-row  justify-center items-center text-center gap-1.5' > <FaShoppingCart /> Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                                <Nav.Link className='flex flex-row  justify-center items-center text-center gap-1.5' > <FaUser /> SingIn</Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </header>

    )
}

export default Header