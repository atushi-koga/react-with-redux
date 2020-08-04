import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            error => this.setState({errorMessage: error.message})
        );
        console.log(this.state);
    }

    renderContent() {
        if (!this.state.lat && this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Spinner message="Please accept location request"/>
    }

    render() {
        return (
            <div className="boarder red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))