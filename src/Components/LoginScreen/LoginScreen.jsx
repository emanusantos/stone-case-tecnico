import React, { useRef } from 'react';
import './LoginScreen.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useAuth } from '../../Contexts/AuthContext';

export default function LoginScreen() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const signup = useAuth()

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
                                <input type="email" placeholder="E-mail" ref={emailRef} />
                            </label>
                            <label className="label-input" htmlFor="">
                                <FaLock className="iconModify" />
                                <input type="password" placeholder="Senha" ref={passwordRef} />
                            </label>
                            <label className="label-input" htmlFor="">
                                <FaLock className="iconModify" />
                                <input type="password" placeholder="Confirme sua senha" ref={passwordConfirmRef} />
                            </label>
                        </form>
                        <button className="btn">Registrar-se</button>
                    </div>
            </div>
        </div>
    )
};