const initialState = {
  filterType: 'title',
  filterText: '',
  activeFilterType: '',
  activeFilterText: '',
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'HANDLE_TYPE_CHANGE':
      return {
        ...state,
        filterType: action.payload
      };
    case 'HANDLE_TEXT_CHANGE':
      return {
        ...state,
        filterText: action.payload
      }
    case 'FILTER':
      return {
        ...state,
        activeFilterText: state.filterText,
        activeFilterType: state.filterType,
      }
    default:
      return state;
  }
}

export default reducer;
