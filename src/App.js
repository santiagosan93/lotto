import React, { Component } from 'react';
import Lotto from './components/lotto'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Lotto title='Lotto Game!' maxNumber={60} maxBalls={6}/>
        <Lotto title='Mini Daily' maxNumber={20} maxBalls={4}/>
      </div>
    )
  }

}

export default App;
