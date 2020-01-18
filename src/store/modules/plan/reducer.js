import { produce } from 'immer';

const INITIAL_VALUE = {
  title: null,
  duration: null,
  price: null,
  id: null,
  plans: [],
};

export default function plan(state = INITIAL_VALUE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@plan/SAVE_SUCCESS': {
        const { title, duration, price, id } = action.payload;
        draft.title = title;
        draft.duration = duration;
        draft.price = price;
        draft.id = id;

        break;
      }
      case '@plan/LOAD_SUCCESS': {
        draft.plans = action.payload;
        break;
      }

      default:
        break;
    }
  });
}
