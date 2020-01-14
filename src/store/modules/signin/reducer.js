import { produce } from 'immer';

const INITIAL_VALUE = {
  token: null,
};

export default function(state = INITIAL_VALUE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@signin/SINING_SUCCESS': {
        draft.token = action.payload;
        break;
      }
      default:
        break;
    }
  });
}
