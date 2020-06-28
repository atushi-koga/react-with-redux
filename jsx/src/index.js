import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const buttonText = 'Click Me!';
    const style = {backgroundColor: 'grey', color: 'white'};
    return (
        <div>
            <div>
                <label className="label" htmlFor="name">Enter name:</label>
                <input id="name" type="text"/>
                <button style={style}>{buttonText}</button>
            </div>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);