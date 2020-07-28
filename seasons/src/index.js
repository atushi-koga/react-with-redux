import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
    constructor(props) {
        super(props);

        // this is the only time we do direct assignment to this.state
        this.state = {lat: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            error => this.setState({errorMessage: error.message})
        );
    }

    render() {
        return (
            <div>
                <div>
                    latitude: {this.state.lat} <br/>
                    errorMessage: {this.state.errorMessage}
                </div>
                <div><SeasonDisplay/></div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))