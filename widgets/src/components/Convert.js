import React, {useEffect, useState} from "react";
import GoogleTranslate from "../api/GoogleTranslate";

const Convert = ({input, language}) => {
    const [output, setOutput] = useState('');

    useEffect(() => {
        const translate = async () => {
            const response = await GoogleTranslate.post('', {}, {
                params: {
                    q: input,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setOutput(response.data.data.translations[0].translatedText);
        };

        const timerId = setTimeout(translate, 500);
        return () => clearTimeout(timerId);

    }, [input, language]);  // @todo: 修正する。 https://www.udemy.com/course/react-redux/learn/lecture/20787910#notes

    return (
        <div>
            <h1 className="ui header">{output}</h1>
        </div>
    );
}

export default Convert;