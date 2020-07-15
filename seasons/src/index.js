import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (error) => console.log(error)
        )
        return (
            <div>
                <div>Hello World</div>
                <div><SeasonDisplay/></div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))