import React, { useState } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './Header.css'

export default function Header({ history }) {
    const [user] = useState(JSON.parse(localStorage.getItem('user')))
    // eslint-disable-next-line
    const [search, setSearch] = useState()
    function handleClick() {
        localStorage.clear()
    }

    return (
        <Navbar className="p-md-2 pl-md-5" bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href="/user">
                <h2 className="logo display-5">Academia Pokémon</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="mr-md-5 pr-md-5">
                    <NavDropdown title={user.e_mail || 'seu email'} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/user/profile">Meu Perfil</NavDropdown.Item>
                        <NavDropdown.Item href="/user/plan">Meu Plano</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/" onClick={handleClick}>Sair</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}