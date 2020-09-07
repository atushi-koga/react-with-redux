import React, {useEffect, useState} from "react";

const Convert = ({input, language}) => {
    const [output, setOutput] = useState('');
    console.log('render');

    useEffect(() => {
        console.log('useEffect');
        (async () => await setTimeout(() => {
            console.log('setOutput');
            setOutput('hello');
        }, 3000))();

    }, [input, language]);

    return (
        <div>{output}</div>
    );
}

export default Convert;