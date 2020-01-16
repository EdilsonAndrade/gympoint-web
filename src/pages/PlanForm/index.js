import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Form } from '@rocketseat/unform';
import * as Yup from 'yup';
import history from '../../services/history';
import Button from '../../components/Button';
import { Content, Spinner } from './styles';
import { startLoading } from '~/store/modules/loading/actions';
import { saveRequest } from '~/store/modules/plan/actions';
import InputNumberFormatForm from '~/components/InputNumberFormat';

const schema = Yup.object().shape({
  title: Yup.string().required('Título deve ser informado'),
  duration: Yup.number(
    'Duration deve ser maior que zero e números inteiros'
  ).required('Duration deve ser maior que zero e números inteiros'),
  price: Yup.string()
    .min(1, 'Preço deve ser informado')
    .required('Preço deve ser informado'),
});

export default function PlanForm() {
  const dispatch = useDispatch();
  const planData = useSelector(state => state.plan);
  const loading = useSelector(state => state.load.loading);
  const [totalPrice, setTotalPrice] = useState(0);
  const [duration, setDuration] = useState(1);
  const [editMode, setEditMode] = useState(false);
  const [montlhyPrice, setMonthlyPrice] = useState(0);

  useEffect(() => {
    if (planData.id) {
      setEditMode(true);
    }
  }, [planData.id]);

  useEffect(() => {
    if (duration > 0 && montlhyPrice > 0) {
      setTotalPrice(
        Intl.NumberFormat('pt-Br', {
          style: 'currency',
          currency: 'BRL',
        }).format(montlhyPrice * duration)
      );
    } else {
      setTotalPrice(0);
    }
  }, [montlhyPrice, duration]);
  const handleBack = () => {
    history.push('/plans');
  };
  const handleSave = data => {
    dispatch(startLoading());
    dispatch(saveRequest({ ...data, id: planData.id }));
  };
  function handleChangeDuration(value) {
    setDuration(value);
  }
  function handleMontlyChange(values) {
    const { value } = values;
    setMonthlyPrice(value);
  }
  return (
    <Form schema={schema} onSubmit={handleSave} initialData={planData}>
      <div>
        <strong>{editMode ? 'Edição de plano' : 'Cadastro do plano'}</strong>
        <div>
          <Button buttonType="button" icon="back" handleClick={handleBack}>
            VOLTAR
          </Button>
          {loading ? (
            <Button icon="none" buttonType="button" saveButton>
              <Spinner size={20} color="#fff" />
            </Button>
          ) : (
            <Button buttonType="submit" saveButton>
              SALVAR
            </Button>
          )}
        </div>
      </div>

      <Content>
        <Input
          name="title"
          placeholder="Titulo do plano"
          label="Título do plano"
        />

        <div>
          <div>
            <Input
              name="duration"
              label="Duração (em meses)"
              type="number"
              value={duration}
              onChange={e => handleChangeDuration(e.target.value)}
            />
          </div>

          <div>
            <InputNumberFormatForm
              label="Preço Mensal"
              name="price"
              type="text"
              formvalue={montlhyPrice}
              onValueChange={values => {
                handleMontlyChange(values);
              }}
              thousandSeparator="."
              decimalSeparator=","
              decimalScale={2}
              fixedDecimalScale
              prefix="R$"
            />
          </div>
          <div>
            <Input
              name="total"
              label="Preço Total"
              disabled
              value={totalPrice}
            />
          </div>
        </div>
      </Content>
    </Form>
  );
}
