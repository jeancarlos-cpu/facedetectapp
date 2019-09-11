import React from 'react';
import './Navigation.css'
import Logo from './Logo/Logo'


const Navigation = () => {
    return (
        <div>
        <nav>
            <ul className="main-nav">
                <li>
                    <div className="logo">
                        <a href="#Inicio" className="hyperlink">
                            <Logo/>
                        </a>
                    </div>
                </li>
                <li className="pull">Face Detector Brain</li>
                <li className="push"><a href="#Cadastro" className="hyperlink"> Sign in </a></li>
                <li className="login"><a href="#Login" className="hyperlink login-button"> Login </a></li>
            </ul>
        </nav>
    </div>
    )
}

export default Navigation;