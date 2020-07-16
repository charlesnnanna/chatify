import React from 'react'
import './Header.css'

const Header = ({user}) => {
    const {name, status} = user;

    return(
        <header className = 'Header'>
            <h1 className = 'Header_name'>{name}</h1>
            <p className = 'Header_status'>{status}</p>
        </header>
    )
}

export default Header;