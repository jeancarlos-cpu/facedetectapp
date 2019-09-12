import React from 'react';
import "./InputField.css"

const InputField = ({ onInput, onSubmit, inputClear }) => {
    return (
        <div >
            <div>
                <p className="tc">This powerful brain will detect faces.</p>
            </div>
            <div className="input ph3 pv3 br3 mh7 shadow-5">
                <input className="f4 pa2 w-70 center" type="text" placeholder="image URL" onInput={onInput} onClick={inputClear}/>
                <button className="f4 pv2 ph3 white w-30 grow link center bg-green" onClick={onSubmit}>Detect</button>
            </div>
        </div>
    )
}

export default InputField;