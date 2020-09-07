import React, {useState} from "react";
import Dropdown from "./Dropdown";
import InputText from "./InputText";

const options = [
    {label: 'Afrikaans', value: 'af'},
    {label: 'Arabic', value: 'ar'},
    {label: 'Hindi', value: 'hi'},
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [input, setInput] = useState('');

    return (
        <>
            <InputText
                input={input}
                onInputChange={setInput}
            />
            <Dropdown
                label="Select a Language"
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <div>{input}</div>
        </>
    );
}

export default Translate;