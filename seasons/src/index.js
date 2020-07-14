import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";

const App = () => {
    return (
        <div>
            <div>Hello World</div>
            <div><SeasonDisplay/></div>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'))