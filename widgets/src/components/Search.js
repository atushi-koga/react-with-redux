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
        search();
    }, [term]);

    const searchTerm = async () => {
        const response = await Wikipedia.get(`/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${term}`);
        setResults(response.data.query.search)
    }

    const renderResult = () => {
        return results.map(result => {
            return (
                <div className="item" key={result.pageid}>
                    <div className="content">
                        <div className="header">title: {result.title}</div>
                        {result.snippet}
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