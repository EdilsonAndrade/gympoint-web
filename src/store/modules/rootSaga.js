import { all } from 'redux-saga/effects';

import signin from './signin/sagas';
import student from './student/sagas';
import plan from './plan/sagas';
import registration from './registration/sagas';

export default function* rootSaga() {
  return yield all([signin, student, plan, registration]);
}
