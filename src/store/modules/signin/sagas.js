import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import { signinSuccess } from './actions';
import { stopLoading } from '../loading/actions';

function* signinRequest({ payload }) {
  const { email, password } = payload.data;
  try {
    if (email && password) {
      const response = yield call(api.post, '/sessions', { email, password });
      if (response.data && response.data.token) {
        const { token } = response.data;
        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(signinSuccess(token));
        history.push('/student');
        yield put(stopLoading());
      }
    } else {
      toast.error('Usuário ou senha inválidos');
      yield put(stopLoading());
    }
  } catch (error) {
    toast.error('Usuário ou senha inválidos');
    yield put(stopLoading());
  }
}
export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.signin;
  api.defaults.headers.Authorization = `Bearer ${token}`;
}
export default all([
  takeLatest('@signin/SIGNIN_REQUEST', signinRequest),
  takeLatest('persist/REHYDRATE', setToken),
]);
