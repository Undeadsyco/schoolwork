const initialState = {
  count: 0,
  numberOfTimes: 0,
  addAmount: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        numberOfTimes: state.numberOfTimes + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        numberOfTimes: state.numberOfTimes + 1
      };
    case 'ADDAMOUNT':
      return{
        ...state,
        count: parseInt(state.addAmount),
        numberOfTimes: 0
      };
    case 'CHANGE':
      return{
        ...state,
        addAmount: action.addAmount
      }
    default:
      return state;
  }
}

export default counterReducer;