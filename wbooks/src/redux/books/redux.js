const initialState = {
  booksList: [],
  isLoading: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOADING_BOOKS':
      return {
        ...state,
        isLoading: true
      }
    case 'LOADING_COMPLETED':
      return {
        booksList: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
}

export default reducer;
