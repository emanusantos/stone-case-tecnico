import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useAuth } from '../../Contexts/AuthContext';
import './Dashboard.css';

export default function Dashboard() {
    const { currentUser } = useAuth()

    return (
        <div className="backgroundMarvel">
            <Navbar />
            <h2>Bem-vindo, {currentUser.email}!</h2>
        </div>
    )
}
