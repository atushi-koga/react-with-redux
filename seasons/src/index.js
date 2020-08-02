import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            error => this.setState({errorMessage: error.message})
        );
        console.log(this.state);
    }

    render() {
        if (!this.state.lat && this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <div>Loading...</div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))