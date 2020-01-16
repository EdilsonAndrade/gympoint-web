import { call, put, takeLatest, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import { saveSuccess } from './actions';
import { stopLoading } from '../loading/actions';

function* saveRequest({ payload }) {
  const { name, email, age, weight, height, id } = payload.data;
  try {
    if (id) {
      const response = yield call(api.put, '/students', {
        name,
        email,
        age,
        weight: Number(weight.replace(/[^0-9.]/g, '')),
        height,
      });
      yield put(saveSuccess(response.data));
      toast.success('Aluno atualizado com sucesso');
    } else {
      const response = yield call(api.post, '/students', {
        name,
        email,
        age,
        weight: Number(weight.replace(/[^0-9.]/g, '')),
        height,
      });
      yield put(saveSuccess(response.data));
      toast.success('Aluno cadastrado com sucesso');
    }

    yield put(stopLoading());

    history.push('/student');
  } catch (error) {
    yield put(stopLoading());
    toast.error('Ocorreu erro no servidor, tente novamente', error);
  }
}

export default all([takeLatest('@student/SAVE_REQUEST', saveRequest)]);
