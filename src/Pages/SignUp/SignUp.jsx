import React, { useState } from 'react';
import './SignUp.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default function LoginScreen() {
    const [usernameReg, setUsernameReg] = useState("")
    const [passwordReg, setPasswordReg] = useState(false)

    const register = () => {
        Axios.post('http://localhost:3001/register', {
        username: usernameReg, 
        password: passwordReg
        }).then((response) => {
            console.log(response)
        })
    };


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
                        <p className="error">{"a"}</p>
                        <p>Preencha os campos abaixo:</p>
                        <form className="form" onSubmit={register}>
                            <label className="label-input" htmlFor="">
                                <FaUser className="iconModify" /> 
                                <input type="text" placeholder="Username" onChange={(e) => {setUsernameReg(e.target.value)}} />
                            </label>
                            <label className="label-input" htmlFor="">
                                <FaLock className="iconModify" />
                                <input type="password" placeholder="Senha" onChange={(e) => {setPasswordReg(e.target.value)}} />
                            </label>
                            <button className="btn">Registrar-se</button>
                        </form>
                    </div>
            </div>
        </div>
    )
};