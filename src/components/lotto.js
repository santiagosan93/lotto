import React from 'react'
import Ball from './ball'

const Lotto = (props) => {
  const normalLotto = props.numbers.map((number, index) => {return <Ball number={number} key={index}/>})
  const daileyLotto = props.dailey.map((number,index) => {return <Ball number={number} key={index}/>})
  return (
    <div className='lotto'>
      <div className='big-price'>
        <h2>Lotto Game!</h2>
        <div className='ball-holder'>
          {normalLotto}
        </div>
        <button onClick={e => props.generateNormal(60,6)}>Generate</button>
      </div>
      <div className='small-price'>
        <h2>dailey Game!</h2>
        <div className='ball-holder'>
          {daileyLotto}
        </div>
        <button onClick={e => props.generateDaily(20,4)}>Generate</button>
      </div>
    </div>
  )
}

export default Lotto
