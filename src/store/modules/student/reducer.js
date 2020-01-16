import { produce } from 'immer';

const INITIAL_VALUE = {
  name: null,
  email: null,
  weight: '',
  age: 18,
  height: 160,
  id: null,
};

export default function student(state = INITIAL_VALUE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/SAVE_SUCCESS': {
        const { name, email, weight, age, height, id } = action.payload;
        draft.name = name;
        draft.email = email;
        draft.weight = weight;
        draft.age = age;
        draft.height = height;
        draft.id = id;
        break;
      }

      default:
        break;
    }
  });
}
