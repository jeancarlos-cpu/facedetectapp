import React from 'react';
import "./InputField.css"

const InputField = () => {
    return (
        <div>
            <div>
                <p className="tc">This powerful brain will detect faces.</p>
            </div>
            <div className="input">
                <input className="f4 pa2 w-70 center" type="text" />
                <button className="f4 pv2 ph3 white w-30 grow link center"></button>
            </div>
        </div>
    )
}

export default InputField;