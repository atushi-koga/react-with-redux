import React, {useEffect, useState} from "react";
import Wikipedia from "../api/Wikipedia";

const Search = () => {
    const [term, setTerm] = useState('programing');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const {data} = await Wikipedia.get(`/w/api.php`, {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });
            setResults(data.query.search);
        }

        // 初回レンダリング時にAPIリクエストを直ちに行う
        // そうしないと画面に結果が表示されるのが遅くなるので
        if (term && !results.length) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    search()
                }
            }, 500);

            return () => {
                clearTimeout(timeoutId);
            }
        }
    }, [term, results.length]); // @todo: APIを2回呼んでしまっているので修正する  https://www.udemy.com/course/react-redux/learn/lecture/20787776#notes

    const searchTerm = async () => {
        const response = await Wikipedia.get(`/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${term}`);
        setResults(response.data.query.search)
    }

    const renderResult = () => {
        console.log('renderResult');
        return results.map(result => {
            return (
                <div className="item" key={result.pageid}>
                    <div className="right floated content">
                        <a
                            href={`https://en.wikipedia.org/?curid=${result.pageid}`}
                            className="ui button"
                        >
                            Go
                        </a>
                    </div>
                    <div className="content">
                        <div className="header">{result.title}</div>
                        <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                    </div>
                </div>
            );
        })
    }

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        type="text"
                        name="search_term"
                        value={term}
                        className="input"
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
                <button type="button" onClick={searchTerm}>検索</button>
            </div>
            <div className="ui celled list">{renderResult()}</div>
        </div>
    );
}

export default Search;