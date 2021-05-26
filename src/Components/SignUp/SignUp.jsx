import React, { useRef, useState } from 'react';
import './SignUp.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useAuth } from '../../Contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function LoginScreen() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('As senhas não coincidem.')
        };

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/profile")
        } catch {
            setError('Não foi possível criar conta.')
        }
        setLoading(false)
    }

    return(
        <div className="loginBox">
            <div className="signIn">
                <div className="signInContent">
                    <h2>Bem-vindo!</h2>
                    <p>Se você já tem conta, entre agora mesmo!</p>
                    <Link to="/login"><button className="btn">Entrar</button></Link>
                </div>
            </div>
            <div className="signUp">
                    <div className="signUpContent">
                        <h2>Criar conta</h2>
                        <p className="error">{error}</p>
                        <p>Preencha os campos abaixo:</p>
                        <form className="form" onSubmit={handleSubmit}>
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
                            <button disabled={loading} className="btn">Registrar-se</button>
                        </form>
                    </div>
            </div>
        </div>
    )
};