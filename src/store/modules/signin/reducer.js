import { produce } from 'immer';

const INITIAL_VALUE = {
  token: null,
  loading: false,
  signed: false,
};

export default function signin(state = INITIAL_VALUE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@signin/SIGNIN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@signin/SINING_SUCCESS': {
        draft.token = action.payload;
        draft.loading = false;
        draft.signed = true;
        break;
      }
      case '@signin/SIGNIN_FAILED': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
