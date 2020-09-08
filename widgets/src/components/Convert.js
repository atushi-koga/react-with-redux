import React, {useEffect, useState} from "react";
import GoogleTranslate from "../api/GoogleTranslate";

const Convert = ({input, language}) => {
    const [output, setOutput] = useState('');

    useEffect(() => {
        (async () => {
            const response = await GoogleTranslate.post('', {}, {
                params:{
                    q: input,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setOutput(response.data.data.translations[0].translatedText);
        })();
    }, [input, language]);

    return (
        <div>
            <h1 className="ui header">{output}</h1>
        </div>
    );
}

export default Convert;