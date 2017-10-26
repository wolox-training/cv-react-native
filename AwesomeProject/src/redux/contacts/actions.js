export const loadingContacts = () => ({
  type: 'LOADING_CONTACTS_LIST'
});

export const onLoadContactsFinished = (contacts) => ({
  type: 'CONTACT_LIST_LOADED',
  payload: contacts
});
