import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import { signinSuccess, signinFailed } from './actions';

function* signinRequest({ payload }) {
  const { email, password } = payload.data;

  try {
    if (email && password) {
      const response = yield call(api.post, '/sessions', { email, password });
      if (response.data && response.data.token) {
        const { token } = response.data;
        api.defaults.Authorization = token;
        yield put(signinSuccess(token));
        history.push('/student');
      }
    } else {
      toast.error('Usuário ou senha inválidos');
      yield put(signinFailed());
    }
  } catch (error) {
    toast.error('Usuário ou senha inválidos');
    yield put(signinFailed());
  }
}

export default all([takeLatest('@signin/SIGNIN_REQUEST', signinRequest)]);
