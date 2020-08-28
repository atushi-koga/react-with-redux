import React, {useState} from "react";
import Wikipedia from "../api/Wikipedia";

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchTerm = async () => {
        const response = await Wikipedia.get(`/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${term}`);
        setResults(response.data.query.search)
    }

    const renderResult = () => {
        return results.map(result => {
            return (
                <div key={result.pageid}>
                    <div>title: {result.title}</div>
                    <div>snippet: {result.snippet}</div>
                    <br/>
                </div>
            );
        })
    }

    return (
        <div>
            <div>
                <label>Search</label>
                <input type="text" name="search_term" onChange={e => setTerm(e.target.value)}/>
                <button type="button" onClick={searchTerm}>検索</button>
                {renderResult()}
            </div>
        </div>
    );
}

export default Search;