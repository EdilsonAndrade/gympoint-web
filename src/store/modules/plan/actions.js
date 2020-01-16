export const saveRequest = data => {
  return {
    type: '@plan/SAVE_REQUEST',
    payload: { data },
  };
};

export const saveSuccess = data => {
  return {
    type: '@plan/SAVE_SUCCESS',
    payload: data,
  };
};
