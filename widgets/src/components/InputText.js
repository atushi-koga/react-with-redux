import React from "react";

const InputText = ({input, onInputChange}) => {
    return (
        <div>
            <label>input text</label>
            <input type="text" value={input} onChange={e => onInputChange(e.target.value)}/>
        </div>
    );
}

export default InputText;