import { call, put, takeLatest, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import { saveSuccess } from './actions';
import { stopLoading } from '../loading/actions';

function* saveRequest({ payload }) {
  const { title, duration, price, id } = payload.data;
  try {
    if (id) {
      const response = yield call(api.put, `/plans/${id}`, {
        title,
        duration,
        price,
      });
      yield put(saveSuccess(response.data));
      toast.success('Plano atualizado com sucesso');
    } else {
      const response = yield call(api.post, '/plans', {
        title,
        duration,
        price,
      });
      yield put(saveSuccess(response.data));
      toast.success('Plano cadastrado com sucesso');
    }

    yield put(stopLoading());

    history.push('/plan');
  } catch (error) {
    yield put(stopLoading());
    toast.error('Ocorreu erro no servidor, tente novamente', error);
  }
}

export default all([takeLatest('@plans/SAVE_REQUEST', saveRequest)]);
