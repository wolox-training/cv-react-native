const initialState = {
  groupsList: [],
  isLoading: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
  case 'LOADING_GROUPS_LIST':
    return {
      ...state,
      isLoading: true
    };
  case 'GROUPS_LIST_LOADED':
    return {
      groupsList: action.payload,
      isLoading: false
    };
  default:
    return state;
  }
}

export default reducer;
