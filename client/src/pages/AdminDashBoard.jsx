import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const DashBoard = () => {
    const [adminName, setAdminName] = useState("");
    const [userID, setUserID] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        setAdminName(localStorage.getItem("adminName"))
        // setUserID(localStorage.getItem("userID"))
    }, []);
    const logout = () => {
        localStorage.clear();
        navigate("/home");
    }
    return (
        <>
            <div id="div">
                welcome:{adminName} ,
                {/* {userID} */}
                {/* <button onClick={logout}>Logout</button> */}
                <Button variant="primary" onClick={logout}>Logout</Button>
            </div>

            <div id='div1'>
                <div id="div2">
                    {/* <Link to="createuser">CreateUser</Link> */}
                    <Navbar bg="primary" data-bs-theme="light">
                        <Container>
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="createuser" className="text-white">
                                    CreateUser
                                </Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
                <div id="div3">
                    <Outlet />
                </div>

            </div>
        </>
    )
}
export default DashBoard;