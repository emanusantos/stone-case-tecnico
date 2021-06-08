import React, { useRef, useState } from 'react';
import '.././SignUp/SignUp.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';

export default function LoginScreen() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    return(
        <div className="loginBox">
            <div className="signIn">
                <div className="signInContent">
                    <h2>Bem-vindo de volta!</h2>
                    <p>Para continuar conectado conosco,</p>
                    <p>por favor faça login em sua conta.</p>
                    <br/>
                    <p>Ainda não tem conta? Registre-se!</p>
                    <Link to="/signup"><button className="btn">Registrar</button></Link>
                </div>
            </div>
            <div className="signUp">
                    <div className="signUpContent">
                        <h2>Entrar</h2>
                        <p className="error">{error}</p>
                        <p>Preencha os campos abaixo:</p>
                        <form className="form" onSubmit={console.log("a")}>
                            <label className="label-input" htmlFor="">
                                <FaEnvelope className="iconModify" /> 
                                <input type="email" placeholder="E-mail" ref={emailRef} />
                            </label>
                            <label className="label-input" htmlFor="">
                                <FaLock className="iconModify" />
                                <input type="password" placeholder="Senha" ref={passwordRef} />
                            </label>
                            <button disabled={loading} className="btn">Entrar</button>
                        </form>
                    </div>
            </div>
        </div>
    )
};
