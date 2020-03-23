import React, { Component } from 'react'
import Ball from './ball'

class Lotto extends Component {
  constructor(props) {
    super(props)
    this.state = {
      maxBalls: this.props.maxBalls,
      maxNumber: this.props.maxNumber,
      numbers: []
    }
    this.pullNumbers = this.pullNumbers.bind(this)
  }


  pullNumbers() {
    // Fill nums of 6 and of 4
    let max = this.state.maxNumber
    const numbers = new Array(this.state.maxNumber).fill().map((number,index) => index + 1)
    const selectedNumbers = []
    while(selectedNumbers.length < this.state.maxBalls) {
      const index = Math.floor(Math.random() * max)
      const pulledNumber = numbers.splice(index, 1)[0]
      selectedNumbers.push(pulledNumber)
      max -= 1
    }
    this.setState({
      numbers: selectedNumbers
    })
  }

  render() {
    const normalLotto = this.state.numbers.map((number, index) => {return <Ball number={number} key={index}/>})
    return (
      <div className='lotto'>
        <div className='big-price'>
          <h2>{this.props.title}</h2>
          <div className='ball-holder'>
            {normalLotto}
          </div>
          <button onClick={this.pullNumbers}>Generate</button>
        </div>
      </div>
    )
  }
}

export default Lotto
