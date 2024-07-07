import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authslice';
const Header = () => {

    const { cartItems } = useSelector((state) => state.cart);
    const { userInfo } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();


    const logoutHandler = async () => {
        try {

            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/login')
        } catch (error) {

            console.log(error)

        }

    }



    return (
        <header>
            <Navbar className='bg-slate-600 ' variant='dark' expand='md'  collapseOnSelect>
                <Container>
                    <LinkContainer to='/' >
                        <Navbar.Brand className='font-extrabold' style={{ fontFamily: 'Poetsen One, sans-serif' }}> HamudShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <LinkContainer to='/cart'>

                                <Nav.Link className='flex flex-row  justify-center items-center text-center gap-1 ' style={{ fontFamily: 'Quicksand, sans-serif' }} > <FaShoppingCart /> Cart {cartItems.length > 0 && (
                                    <div className="badge badge-secondary bg-slate-500 p-1 ml-1 rounded-full ">
                                        {cartItems.reduce((previousValue, currentValue) => previousValue + currentValue.qty, 0)}

                                    </div>

                                )}</Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} className='font-semibold' style={{ fontFamily: 'Quicksand, sans-serif' }}>
                                    <LinkContainer to={'/profile'} style={{ fontFamily: 'Quicksand, sans-serif' }}>
                                        <NavDropdown.Item >
                                            profile
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item style={{ fontFamily: 'Quicksand, sans-serif' }} onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>

                                </NavDropdown>

                            ) : (
                                <LinkContainer to='/login'>
                                    <Nav.Link className='flex flex-row  justify-center items-center text-center gap-1.5 text-slate-200'  style={{ fontFamily: 'Quicksand, sans-serif' }}> <FaUser /> Sign In </Nav.Link>
                                </LinkContainer>
                            )}


                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </header>

    )
}

export default Header