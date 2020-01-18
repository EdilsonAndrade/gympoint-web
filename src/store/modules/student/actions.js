export const saveRequest = data => {
  return {
    type: '@student/SAVE_REQUEST',
    payload: { data },
  };
};

export const saveSuccess = data => {
  return {
    type: '@student/SAVE_SUCCESS',
    payload: data,
  };
};

export const loadSuccess = data => {
  return {
    type: '@student/LOAD_SUCCESS',
    payload: data,
  };
};
