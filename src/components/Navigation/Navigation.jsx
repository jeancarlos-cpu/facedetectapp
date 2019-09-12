import React from 'react';
import './Navigation.css'
import Logo from './Logo/Logo'


const Navigation = ({ Route, onRoute }) => {
    return (
        <div>
            <nav>
                <ul className="main-nav">
                    <li>
                        <div className="logo">
                            <a href="#Inicio" className="hyperlink">
                                <Logo />
                            </a>
                        </div>
                    </li>
                    <li className="pull">Face Detector Brain</li>

                    {
                        Route === "home" ?
                        <li onClick={() => onRoute("signin")} className="push pointer"><a href="#Cadastro" className="hyperlink"> Sign out </a></li>    
                        :
                        <li className="push"></li>
                        // <li className="push"><a href="#Cadastro" className="hyperlink pointer"></a></li>
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;