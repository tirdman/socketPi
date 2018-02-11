import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';
import TimeFromServer from './TimeFromServer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimeFromServer />
      </div>
    );
  }
}

export default App;
