import React from 'react';
import './LoginScreen.css';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

export default function LoginScreen() {
    return(
        <div className="loginBox">
            <div className="signIn">
                <div className="signInContent">
                    <h2>Bem-vindo de volta!</h2>
                    <p>Para continuar conectado conosco,</p>
                    <p>por favor faça login em sua conta.</p>
                    <button className="btn">Login</button>
                </div>
            </div>
            <div className="signUp">
                    <div className="signUpContent">
                        <h2>Criar conta</h2>
                        <p>Preencha os campos abaixo:</p>
                        <form className="form" action="">
                            <label className="label-input" htmlFor="">
                                <FaEnvelope className="iconModify" /> 
                                <input type="email" placeholder="E-mail" />
                            </label>
                            <label className="label-input" htmlFor="">
                                <FaLock className="iconModify" />
                                <input type="password" placeholder="Senha" />
                            </label>
                            <label className="label-input" htmlFor="">
                                <FaLock className="iconModify" />
                                <input type="password" placeholder="Confirme sua senha" />
                            </label>
                        </form>
                        <button className="btn">Registrar-se</button>
                    </div>
            </div>
        </div>
    )
};