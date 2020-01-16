import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import history from '../../services/history';
import Button from '../../components/Button';
import Grid from '../../components/Grid';
import api from '~/services/api';
import { saveSuccess } from '~/store/modules/plan/actions';

export default function Plan() {
  const dispatch = useDispatch();
  const [plans, setPlans] = useState([]);

  const handleCadastrar = () => {
    dispatch(saveSuccess(''));
    history.push('/planform');
  };
  const handleEditar = plan => {
    dispatch(saveSuccess(plan));
    history.push({ pathname: '/planform', state: plan });
  };
  async function handleDelete(id) {
    if (window.confirm('Tem certeza que quer excluir este registro?')) {
      try {
        const response = await api.delete(`/plans/${id}`);
        setPlans(response.data);
      } catch (error) {
        toast.error(`Ocorreu um erro : ${error}`);
      }
    }
  }

  useEffect(() => {
    async function getPlans() {
      const response = await api.get('/plans');
      const { data } = response;
      setPlans(data);
    }
    getPlans();
  }, []);

  return (
    <>
      <div>
        <strong>Gerenciar Planos</strong>
        <Button buttonType="button" saveButton handleClick={handleCadastrar}>
          Cadastrar
        </Button>
      </div>
      <Grid>
        <thead>
          <tr>
            <th>TÍTULO</th>
            <th>DURAÇÃO</th>
            <th>VALOR p/ MÊS</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {plans.map(plan => (
            <tr key={plan.id}>
              <td>{plan.title}</td>
              <td>{plan.duration}</td>
              <td>{plan.price}</td>
              <td>
                <button
                  type="button"
                  id="edit"
                  onClick={() => handleEditar(plan)}
                >
                  editar
                </button>
              </td>
              <td>
                <button
                  type="button"
                  id="delete"
                  onClick={() => handleDelete(plan.id)}
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
