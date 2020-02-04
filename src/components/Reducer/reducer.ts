/**
 * @author @chriswillsflannery
 * @exports initialState
 * @exports reducer
 * contains reducer logic for use with the useReducer hook in buyAndSell.tsx.
 */

interface Deal {
  dealID: string;
  asset: string;
}

interface IinitialState {
  deals: Deal[];
  marketplace: Deal[];
}

export const initialState: IinitialState = {
  deals: [{
    dealID: 'A12345',
    asset: 'HTT'
  }, {
    dealID: 'B34567',
    asset: 'PSM'
  }, {
    dealID: 'C56789',
    asset: 'PPT'
  }],
  marketplace: [{
    dealID: 'D23456',
    asset: 'APP'
  }, {
    dealID: 'E45678',
    asset: 'LEG'
  }, {
    dealID: 'F89123',
    asset: 'OOG'
  }]
}

type Action = { type: string; payload: Deal }
type State = { deals: Deal[]; marketplace: Deal[] }

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'setMyDeals':
      return {
        ...state,
        deals: [
          ...state.deals,
          action.payload
        ]
      };
    case 'setMarketPlace':
      return {
        ...state,
        marketplace: [
          ...state.marketplace,
          action.payload
        ]
      };
    default:
      return state;
  }
}
