import React from 'react'
import { Logo, Nav, Navrightwrapper, Navwrapper } from '../Styledcomponent/Mainstyles'
import Map from '../assets/logo.jpg'
import { useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate()

    //a simple header for the website
    return (
        <>
            <Nav>
                <Navwrapper onClick={() => navigate('/')}>
                    <Logo>
                        <img src={Map} alt="logo" />
                    </Logo>
                    <Navrightwrapper>
                        <h2>Country Checkerz</h2>
                        <p>your one stop for all countries and continents search...</p>
                    </Navrightwrapper>
                </Navwrapper>
            </Nav>
        </>
    )
}

export default Header