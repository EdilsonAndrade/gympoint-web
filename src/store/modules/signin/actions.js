export const signinRequest = data => {
  return {
    type: '@signin/SIGNIN_REQUEST',
    payload: { data },
  };
};

export const signinSuccess = token => {
  return {
    type: '@signin/SINING_SUCCESS',
    payload: token,
  };
};

export const signinFailed = () => {
  return {
    type: '@signin/SIGNIN_FAILED',
  };
};
