export const loadingGroups = () => ({
  type: 'LOADING_GROUPS_LIST'
});

export const onLoadGroupsFinished = (contacts) => ({
  type: 'GROUPS_LIST_LOADED',
  payload: contacts
});
