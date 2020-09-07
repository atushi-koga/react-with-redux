import React from "react";

const InputText = ({input, onInputChange}) => {
    return (
        <div className="ui form">
            <div className="field">
                <label>Enter text</label>
                <input type="text" value={input} onChange={e => onInputChange(e.target.value)}/>
            </div>
        </div>
    );
}

export default InputText;