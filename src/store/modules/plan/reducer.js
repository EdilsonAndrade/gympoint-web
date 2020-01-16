import { produce } from 'immer';

const INITIAL_VALUE = {
  title: null,
  duration: null,
  price: null,
};

export default function plan(state = INITIAL_VALUE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@plan/SAVE_SUCCESS': {
        const { title, duration, price } = action.payload;
        draft.title = title;
        draft.duration = duration;
        draft.price = price;

        break;
      }

      default:
        break;
    }
  });
}
