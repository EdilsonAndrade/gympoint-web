export const saveRequest = data => {
  return {
    type: '@registration/SAVE_REQUEST',
    payload: { data },
  };
};

export const saveSuccess = data => {
  return {
    type: '@registration/SAVE_SUCCESS',
    payload: data,
  };
};
export const loadSuccess = data => {
  return {
    type: '@registration/LOAD_SUCCESS',
    payload: data,
  };
};
