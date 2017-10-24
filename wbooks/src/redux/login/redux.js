const initialState = {
  credentialsError: '',
  isLoggedIn: false,
  loading: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'IS_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: true
      }
    case 'SWITCH_LOADING_STATE':
      return {
        ...state,
        isLoading: action.payload
      }
    case 'INVALID_CREDENTIALS':
      return {
        ...state,
        credentialsError: action.payload
      }
    default:
      return state;
  }
}

export default reducer;
