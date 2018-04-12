import bitcoinReducer from './bitcoin'
import { FETCH_BITCOIN } from '../actions/constants'

describe('bitcoinReducer', () => {
  /* Reducer will return an object with BPI key and some data */
  const bitcoinData = { bpi: 'bitcoin price index' }

  it('fetches and sets the bitcoin data', () => {
    /* returns bitcoinData */
    expect(bitcoinReducer({}, { type: FETCH_BITCOIN, bitcoin: bitcoinData }))
      .toEqual(bitcoinData)
  })
})