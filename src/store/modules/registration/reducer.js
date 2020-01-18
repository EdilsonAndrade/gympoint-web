import { produce } from 'immer';

const INITIAL_VALUE = {
  active: false,
  startDate: null,
  endDate: null,
  price: null,
  plan: null,
  student: null,
  id: null,
  registrations: [],
};

export default function registration(state = INITIAL_VALUE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@registration/SAVE_SUCCESS': {
        const {
          active,
          start_date,
          end_date,
          price,
          plan,
          student,
          id,
        } = action.payload;

        draft.active = active;
        draft.startDate = start_date;
        draft.endDate = end_date;
        draft.price = price;
        draft.plan = plan;
        draft.student = student;
        draft.id = id;
        break;
      }
      case '@registration/LOAD_SUCCESS': {
        draft.registrations = action.payload;
        break;
      }
      default:
        break;
    }
  });
}
