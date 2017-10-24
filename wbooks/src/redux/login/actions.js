export const switchLoadingstate = (isLoading) => ({
  type: 'SWITCH_LOADING_STATE',
  payload: isLoading
});

export const isLoggedIn = (isLoggedIn) => ({
  type:'IS_LOGGED_IN',
  payload: isLoggedIn
});

export const handleCredentialsError = (errortext) => ({
  type:'INVALID_CREDENTIALS',
  payload: errortext
});
