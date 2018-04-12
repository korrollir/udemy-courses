import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deposit, withdraw } from '../actions/balance'

/* export the class separately from the connected Wallet to enable testing */
export class Wallet extends Component {
  constructor () {
    super()

    this.state = { balance: undefined }
  }

  updateBalance = e => this.setState({ balance: parseInt(e.target.value, 10) })

  deposit = () => this.props.deposit(this.state.balance)

  withdraw = () => this.props.withdraw(this.state.balance)

  render () {
    return (
      <div>
        <h3 className='balance'>Wallet Balance: {this.props.balance}</h3>
        <br />
        <input className='input-wallet' onChange={this.updateBalance} />
        <button className='btn-deposit' onClick={this.deposit}>Deposit</button>
        <button className='btn-withdraw' onClick={this.withdraw}>Withdraw</button>
      </div>
    )
  }
}
/* connect returns a function that takes to params: function describing what part of the redux store
  being used on the component, and then the action creators used on the data to send to the store.
  connect to the end of the first param is known as mapStateToProps and allows the component to access
  the state in the store as props */
export default connect(state => {return { balance: state.balance } }, { deposit, withdraw })(Wallet)