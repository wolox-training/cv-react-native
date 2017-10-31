const initialState = {
  chatsList: [],
  isLoading: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
  case 'LOADING_CHATS_LIST':
    return {
      ...state,
      isLoading: true
    };
  case 'CHATS_LIST_LOADED':
    return {
      chatsList: action.payload,
      isLoading: false
    };
  default:
    return state;
  }
}

export default reducer;
