import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    }
  }

  fire = () => {
    var number = Math.floor(Math.random() * 3);
    console.log(number);

    if(number != 0) {
      this.setState({
        score: this.state.score + 1
      });
    } else {
      alert('you loose');
      this.setState({
        score: 0
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg">
              <h3 className="text-center m-3">How Lucky Are You?</h3>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-md-auto">
              <div className="p-2 pl-4 pr-4">Score: {this.state.score}</div>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-md-auto">
              <div className="btn-primary p-2 pl-4 pr-4" onClick={this.fire}>Fire!</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
