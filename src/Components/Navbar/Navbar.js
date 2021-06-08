import React, { useState } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <nav>
            <h2>S t o n e - T e s t e</h2>
            <ul>
                <li><Link className="textLink" to="/comics">Comics</Link></li>
                <li><Link className="textLink" to="/characters">Characters</Link></li>
                <li>Favoritos</li>
                <div className="dropdownProfile">
                    <li class="drop">Meu perfil</li>
                    <div className="dropContent">
                        <Link to="/profile">Ver perfil</Link>
                        <Link>Deslogar</Link>
                    </div>
                </div>
            </ul>
        </nav>
    )
}
