import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { signinSuccess } from './actions';

function* signinRequest({ payload }) {
  const { email, password } = payload;

  try {
    const response = yield call(api.post, { email, password });

    if (response.data && response.data.token) {
      const { token } = response.data;
      api.defaults.Authorization = token;
      yield put(signinSuccess(token));
    }
  } catch (error) {
    console.tron.warn(error);
  }
}

export default all([takeLatest('@signin/SIGNIN_REQUEST', signinRequest)]);
