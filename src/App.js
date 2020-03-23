import React, { Component } from 'react';
import Lotto from './components/lotto'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numbers: this.pullNumbers(60, 6),
      dailey: this.pullNumbers(20,4)
    }
    this.pullNumbers = this.pullNumbers.bind(this)
    this.generateNormal = this.generateNormal.bind(this)
    this.generateDaily = this.generateDaily.bind(this)
  }

  pullNumbers(max, ballQuantity) {
    // Fill nums of 6 and of 4
    const numbers = new Array(max).fill().map((number,index) => index + 1)
    const selectedNumbers = []
    while(selectedNumbers.length < ballQuantity) {
      const index = Math.floor(Math.random() * max)
      const pulledNumber = numbers.splice(index, 1)[0]
      selectedNumbers.push(pulledNumber)
      max -= 1
    }
    return selectedNumbers
  }

  generateNormal(max, ballQuantity) {
    const numbers = new Array(max).fill().map((number,index) => index + 1)
    const selectedNumbers = []
    while(selectedNumbers.length < ballQuantity) {
      const index = Math.floor(Math.random() * max)
      const pulledNumber = numbers.splice(index, 1)[0]
      selectedNumbers.push(pulledNumber)
      max -= 1
    }
    this.setState({
      numbers: selectedNumbers
    })
  }

   generateDaily(max, ballQuantity) {
    const numbers = new Array(max).fill().map((number,index) => index + 1)
    const selectedNumbers = []
    while(selectedNumbers.length < ballQuantity) {
      const index = Math.floor(Math.random() * max)
      const pulledNumber = numbers.splice(index, 1)[0]
      selectedNumbers.push(pulledNumber)
      max -= 1
    }
    this.setState({
      dailey: selectedNumbers
    })
  }


  render() {
    console.log(this.state)
    return (
      <div className='App'>
        <Lotto numbers={this.state.numbers} dailey={this.state.dailey} generateNormal={this.generateNormal} generateDaily={this.generateDaily}/>
      </div>
    )
  }

}

export default App;
