import React from 'react';
import './App.scss';
import { PanelContainer } from './components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }
  setInput = (input) => {
    this.setState({
      input
    });
  }

  render() {
    return (
      <div className="App">
        <PanelContainer title="Editor" setInput={this.setInput}/>
        <PanelContainer title="Preview" input={this.state.input}/>
      </div>
    );
  }
}

export default App;
