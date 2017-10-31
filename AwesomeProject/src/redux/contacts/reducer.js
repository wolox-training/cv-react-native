const initialState = {
  contactsList: [],
  isLoading: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
  case 'LOADING_CONTACTS_LIST':
    return {
      ...state,
      isLoading: true
    };
  case 'CONTACT_LIST_LOADED':
    return {
      contactsList: action.payload,
      isLoading: false
    };
  default:
    return state;
  }
}

export default reducer;
