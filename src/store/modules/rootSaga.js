import { all } from 'redux-saga/effects';

import signin from './signin/sagas';

export default function* rootSaga() {
  return yield all([signin]);
}
