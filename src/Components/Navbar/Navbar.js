import React, { useState } from 'react'
import './Navbar.css';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';

export default function Navbar() {
    const [error, setError] = useState("")
    const { logout } = useAuth();
    const history = useHistory()

    async function handleLogout() {
        setError("")
        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Não foi possível deslogar")
        }
    }

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
                        <Link to="/profile">Ver perfil</Link>
                        <a href="" onClick={handleLogout}>Deslogar</a>
                    </div>
                </div>
            </ul>
        </nav>
    )
}
