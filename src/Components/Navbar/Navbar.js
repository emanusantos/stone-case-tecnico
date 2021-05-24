import React from 'react'
import './Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <h2>StoneTest</h2>
            <ul>
                <li>Página inicial</li>
                <li>Comics</li>
                <li>Characters</li>
                <li>Favoritos</li>
                <div className="dropdownProfile">
                    <li class="drop">Meu perfil</li>
                    <div className="dropContent">
                        <a href="">Ver perfil</a>
                        <a href="">Deslogar</a>
                    </div>
                </div>
            </ul>
        </nav>
    )
}
