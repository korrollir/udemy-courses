/* Reducer needs access to the constants from actions */
import * as constants from '../actions/constants'
/* Importing ability to use cookies for storage */
import { read_cookie, bake_cookie } from 'sfcookies'

const BALANCE_COOKIE = 'BALANCE_COOKIE'

/* If state is undefined, it will set itself to 0 */
const balance = (state = 0, action) => {
  let balance

  switch(action.type) {
    case constants.SET_BALANCE:
      balance = action.balance
      break
    case constants.DEPOSIT:
      /* Adds the deposit value to the state value in the store */
      balance = state + action.deposit
      break
    case constants.WITHDRAW:
      balance = state - action.withdrawal
      break
    default:
      balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state
  }

  bake_cookie(BALANCE_COOKIE, balance)
  
  return balance
}

export default balance