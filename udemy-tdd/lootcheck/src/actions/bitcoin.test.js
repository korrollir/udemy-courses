import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { FETCH_BITCOIN } from './constants'
import { fetchBitcoin } from './bitcoin'

const createMockStore = configureMockStore([thunk])
const store = createMockStore({bitcoin: {} })
/* Stub API endpoint */
const mockResponse = { body: { bpi: 'bitcoing price index' }}

/* Use fetchMock's GET method to stub the endpoint */
fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json', mockResponse)

it('creates an async action to fetch the bitcoin value', () => {
  const expectedActions = [{ bitcoin: mockResponse.body, type: FETCH_BITCOIN }]
  /* Returns a Promise */
  return store.dispatch(fetchBitcoin()).then(() => {
    expect(store.getActions()).toEqual(expectedActions)
  })
})