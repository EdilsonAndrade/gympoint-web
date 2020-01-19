import { call, put, takeLatest, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import { saveSuccess } from './actions';
import * as PlanActions from '../plan/actions';
import { stopLoading } from '../loading/actions';

function* saveRequest({ payload }) {
  const { plan, student, id, startdate } = payload.data;
  try {
    if (id) {
      const response = yield call(api.put, `/registrations/${id}`, {
        planId: plan,
        studentId: student,
        startDate: startdate,
      });
      yield put(saveSuccess(response.data));
      toast.success('Aluno matriculado com sucesso');
    } else {
      const response = yield call(
        api.post,
        `/plans/${plan}/students/${student}/registrations`,
        {
          startDate: startdate,
        }
      );

      yield put(saveSuccess(response.data));
      toast.success('Aluno matriculado com sucesso');
    }

    yield put(stopLoading());

    history.push('/registrations');
  } catch (error) {
    yield put(stopLoading());
    toast.error(
      'Ocorreu erro no servidor, tente novamente',
      error.response.data
    );
  }
}
function* loadSuccess() {
  const plansResponse = yield call(api.get, '/plans');
  yield put(PlanActions.loadSuccess(plansResponse.data));
}
export default all([
  takeLatest('@registration/SAVE_REQUEST', saveRequest),
  takeLatest('@registration/LOAD_SUCCESS', loadSuccess),
]);
