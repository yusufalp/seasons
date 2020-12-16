import React from 'react';
import './App.css';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

class App extends React.Component {
  state = {
    lat: null,
    errorMessage: ''
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  contentDecision() {
    if (this.state.errorMessage && !this.state.lat) {
      return <p>{this.state.errorMessage}</p>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return <Loading message='Please allow location sharing...' />;
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Current Season</h1>
        {this.contentDecision()}
      </div>
    );
  }
}

export default App;
