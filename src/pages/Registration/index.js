import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdCheck } from 'react-icons/md';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import history from '../../services/history';
import Button from '../../components/Button';
import Grid from '../../components/Grid';
import Status from './styles';
import api from '~/services/api';
import { saveSuccess, loadSuccess } from '~/store/modules/registration/actions';

export default function Registraion() {
  const dispatch = useDispatch();
  const registrations = useSelector(state => state.registration.registrations);

  const handleCadastrar = () => {
    dispatch(saveSuccess(''));
    history.push('/registrations/registrationform');
  };

  const handleEditar = registration => {
    dispatch(saveSuccess(registration));
    history.push({
      pathname: '/registrations/registrationform',
      state: registration,
    });
  };

  async function handleDelete(id) {
    if (window.confirm('Tem certeza que quer excluir este registro?')) {
      try {
        const response = await api.delete(`/registrations/${id}`);

        const { data } = response;
        if (data) {
          const registrationData = data.map(d => ({
            ...d,
            startDate: d.start_date,
            endDate: d.end_date,
          }));

          dispatch(loadSuccess(registrationData));
        }
      } catch (error) {
        toast.error(`Ocorreu um erro : ${error}`);
      }
    }
  }
  useEffect(() => {
    async function getRegistrations() {
      const response = await api.get('/registrations');
      const { data } = response;
      if (data) {
        const registrationData = data.map(d => ({
          ...d,
          startDate: format(parseISO(d.start_date), 'dd/MM/yyyy HH:mm:ss', {
            locale: pt,
          }),
          endDate: format(parseISO(d.end_date), 'dd/MM/yyyy HH:mm:ss', {
            locale: pt,
          }),
        }));

        dispatch(loadSuccess(registrationData));
      }
    }
    getRegistrations();
  }, [dispatch]);

  return (
    <>
      <div>
        <strong>Gerenciar matrículas</strong>
        <Button buttonType="button" saveButton handleClick={handleCadastrar}>
          Cadastrar
        </Button>
      </div>
      <Grid>
        <thead>
          <tr>
            <th>ALUNO</th>
            <th style={{ textAlign: 'center' }}>PLANO</th>
            <th style={{ textAlign: 'center' }}>INICIO</th>
            <th style={{ textAlign: 'center' }}>TÉRMINO</th>
            <th style={{ textAlign: 'center' }}>ATIVA</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {registrations.map(registration => (
            <tr key={registration.id}>
              <td>{registration.student.name}</td>
              <td style={{ textAlign: 'center' }}>{registration.plan.title}</td>
              <td style={{ textAlign: 'center' }}>{registration.startDate}</td>
              <td style={{ textAlign: 'center' }}>{registration.endDate}</td>
              <td style={{ textAlign: 'center' }}>
                <Status active={registration.active}>
                  <MdCheck size={15} color="#fff" />
                </Status>
              </td>
              <td>
                <button
                  type="button"
                  id="edit"
                  onClick={() => handleEditar(registration)}
                >
                  editar
                </button>
              </td>
              <td>
                <button
                  type="button"
                  id="delete"
                  onClick={() => handleDelete(registration.id)}
                >
                  apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Grid>
    </>
  );
}
