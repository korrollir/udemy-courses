import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Gift from './Gift'
import { max_number } from '../helper'

class App extends Component {
  constructor() {
    super()

    this.state = { gifts: [] }
  }

  /* Using an arrow function automatically binds this to the method */
  addGift = () => {
    const { gifts } = this.state
    /* Find the max id of the ids with the helper function.  Ternary covers edge case for initialization of app */
    gifts.push({ id: max_number(this.state.gifts.map(gift => gift.id)) + 1 })

    this.setState({ gifts })
  }

  removeGift = id => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id)

    this.setState({ gifts })
  }

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className='gift-list'>
          {
            this.state.gifts.map(gift => {
              return (
                <Gift
                  key={gift.id}
                  gift={gift}
                  removeGift={this.removeGift}
                />
              )
            })
          }
        </div>
        <Button className='btn-add' onClick={this.addGift}>Add Gift</Button>
      </div>
    )
  }
}

export default App