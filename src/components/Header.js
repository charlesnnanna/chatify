import React from 'react'
import './Header.css'

const Header = ({user}) => {
    const {name, status} = user;

    return(
        <header className = 'Header'>
            <h1 className = 'Header_name'>{name}</h1>
            <p className = 'Header_status'>{status.substr(0, 12)}...</p>
        </header>
    )
}

export default Header;