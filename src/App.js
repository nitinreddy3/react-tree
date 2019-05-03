import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FileExplorer from './components/FileExplorer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">POC on Tree Layout</h1>
        </header>
        <div className="App-intro">
          <FileExplorer />
        </div>
      </div>
    );
  }
}

export default App;
