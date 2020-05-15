import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

import './Header.css'

export default function Header() {
    function handleClick() {
        localStorage.removeItem('cpf')
    }

    return (
        <Navbar className="p-md-2 pl-md-5" bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href="/user">
                <h2 className="logo display-5">Academia Pokémon</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Form inline className="mr-auto">
                    <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" />
                    <Button variant="outline-success">Pesquisar</Button>
                </Form>
                <Nav className="mr-md-5 pr-md-5">
                    <NavDropdown title={localStorage.getItem('e_mail') || 'cpf'} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Meu Perfil</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Alterar Plano</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4" onClick={handleClick}>Sair</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}