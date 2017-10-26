const initialState = {
  contacts: [],
  isLoading=false;
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOADING_CONTACTS_LIST':
      return {
        ...state,
        isLoading: true
      }
    case 'CONTACT_LIST_LOADED':
      return {
        contacts: action.payload,
        isLoading: false
      }
    default:
      return state
  }
}

export default reducer;
