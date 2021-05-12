import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/Refresh.png';

const TopBar = () => {
    const [{ isSignedIn, name, photoURL, isAdmin }] = useContext(UserContext);

    return (
        <Navbar className="sticky-top" bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
            REFRESH</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-5">
                    <Nav.Link as={Link} className="mr-4" to="/">Home</Nav.Link>
                    <Nav.Link as={Link} className="mr-4" to="/about">About</Nav.Link>
                    <Nav.Link as={Link} className="mr-4" to="/services">Services</Nav.Link>
                    <Nav.Link as={Link} className="mr-4" to="/projects">Project</Nav.Link>
                    {isSignedIn && !isAdmin && <Nav.Link as={Link} to="/dashboard/bookingList">Dashboard</Nav.Link>}
                    {isAdmin && <Nav.Link as={Link} to="/dashboard/orderList">Admin Panel</Nav.Link>}
                </Nav>
                {
                    isSignedIn ? <Navbar.Brand><img
                        alt=""
                        src={photoURL}
                        width="30"
                        height="30"
                        className="d-inline-block align-top rounded-circle"
                    />{' '} {name}</Navbar.Brand> : <Button as={Link} to="/login" variant="outline-danger">Login</Button>
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopBar;