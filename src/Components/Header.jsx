import React from 'react';
import logoWhite from '../images/logo_white.png';

import '../Scss/Components/Header.scss';

export default function Header() {
    return (
        <header>
            <nav>
                <ul className='ul-Items'>
                    <li className='li-Items'><img src={logoWhite} alt="woodstock"/></li>
                    <li className='li-Items'>About</li>
                    <li className='li-Items'>Fournitures</li>
                    <li className='li-Items'>Shop</li>
                    <li className='li-Items'>Contacts</li>
                </ul>
            </nav>
            <setion className='wood'>
                <h1>Wood Stock</h1>
            </setion> 
        </header> 
    )
}
