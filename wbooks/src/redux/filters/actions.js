export const changeFilterType = (filter) => ({
  type: 'HANDLE_TYPE_CHANGE',
  payload: filter
});

export const changeFilterText = (filter) => ({
  type: 'HANDLE_TEXT_CHANGE',
  payload: filter
});

export const filter = () => ({
  type: 'FILTER'
});
