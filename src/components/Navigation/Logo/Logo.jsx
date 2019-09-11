import React from 'react'
import Tilt from 'react-tilt';
import "./Logo.css"
import imglogo from './circuit.png'

const Logo = () => {
    return (
        <Tilt className="Tilt shadow-2" options={{ max: 90, perspective: 1000 }} >
            <div className="Tilt-inner"> <img src={imglogo} alt=""/> </div>
        </Tilt>
    )
}

export default Logo;