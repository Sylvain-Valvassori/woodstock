import React from 'react';
import logoWhite from '../images/logo_white.png';

import '../Scss/Components/Header.scss';




export default function Header() {
    return (
        <header>
            <nav>
                <ul className='ul-Items'>
                    <li className='li-Items'><a href='#'><img src={logoWhite} alt="woodstock"/></a></li>
                    <li className='li-Items'><a href='#about'>About</a></li>
                    <li className='li-Items'><a href='#team'>Teams</a></li>
                    <li className='li-Items'><a href='#shop'>Shop</a></li>
                    <li className='li-Items'><a href='#contacts'>Contacts</a></li>
                </ul>
            </nav>
            <setion className='wood'>
                <h1>Wood Stock</h1>
            </setion> 
        </header> 
    )
}
