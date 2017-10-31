export const loadingChats = () => ({
  type: 'LOADING_CHATS_LIST'
});

export const onLoadChatsFinished = (contacts) => ({
  type: 'CHATS_LIST_LOADED',
  payload: contacts
});
