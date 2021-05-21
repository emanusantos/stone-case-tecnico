import React from 'react';
import './LoginScreen.css';

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
                        <p>Preencha os caracteres abaixo</p>
                        <form className="form" action="">
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                        </form>
                        <button className="btn">Registrar-se</button>
                    </div>
            </div>
        </div>
    )
};