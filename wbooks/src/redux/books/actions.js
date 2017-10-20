
export const loadingBooks = () => ({
  type: 'LOADING_BOOKS'
});

export const onLoadBooksFinished = (books) => ({
  type: 'LOADING_COMPLETED',
  payload: books
});
