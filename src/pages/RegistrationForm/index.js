import React, { useState, useEffect } from 'react';
import { Input, Form, Select } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import { format, addMonths, parseISO } from 'date-fns';
import InputDatePicker from './InputDatePicker';
import Button from '../../components/Button';
import Content from './styles';
import history from '~/services/history';
import { startLoading } from '~/store/modules/loading/actions';
import { saveRequest } from '~/store/modules/registration/actions';

export default function RegistrationForm() {
  const students = useSelector(state => state.student.students);
  const plans = useSelector(state => state.plan.plans);
  const dispatch = useDispatch();
  const registrationData = useSelector(state => state.registration);

  const studentSelect = students.map(student => ({
    id: student.id,
    title: student.name,
  }));

  const plansSelect = plans.map(plan => ({
    id: plan.id,
    title: plan.title,
  }));

  const initialData = {
    ...registrationData,
    student: registrationData.student && registrationData.student.id,
    plan: registrationData.plan && registrationData.plan.id,
  };

  const [endDate, setEndDate] = useState('');
  const [startDate, setStartDate] = useState(
    registrationData.startDate
      ? parseISO(registrationData.startDate)
      : new Date()
  );
  const [totalPrice, setTotalPrice] = useState(
    registrationData.price && registrationData.price
  );
  const [duration, setDuration] = useState(
    registrationData.plan && registrationData.plan.duration
  );

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    console.tron.warn(startDate);
    if (duration > 0) {
      setEndDate(format(addMonths(startDate, duration), 'dd/MM/yyyy HH:mm:ss'));
    }
  }, [duration, startDate]);

  useEffect(() => {
    if (registrationData.id) {
      setEditMode(true);
    }
  }, [registrationData.id]);
  const handleBack = () => {
    history.push('/registrations');
  };

  const handleSave = data => {
    dispatch(startLoading());
    dispatch(saveRequest({ ...data, id: registrationData.id }));
  };

  const handlePlanSelected = planId => {
    const plan = plans.find(p => p.id === +planId);
    setTotalPrice(
      Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(
        plan.duration * plan.price
      )
    );
    setDuration(plan.duration);
  };

  return (
    <Form initialData={initialData} onSubmit={handleSave}>
      <div>
        <strong>
          {editMode ? 'Edição de Matricula' : 'Cadastro de Matricula'}
        </strong>
        <div>
          <Button buttonType="button" icon="back" handleClick={handleBack}>
            VOLTAR
          </Button>
          <Button buttonType="submit" saveButton>
            SALVAR
          </Button>
        </div>
      </div>

      <Content>
        <Select name="student" options={studentSelect} label="Aluno" />

        <div>
          <div>
            <Select
              name="plan"
              options={plansSelect}
              label="Plano"
              onChange={e => handlePlanSelected(e.target.value)}
            />
          </div>
          <div>
            <strong>DATA DE INÍCIO</strong>
            <InputDatePicker
              name="startdate"
              selected={startDate || new Date()}
              onChange={value => setStartDate(value)}
            />
          </div>
          <div>
            <Input
              label="Data de Término"
              name="enddate"
              readOnly
              id="enddate"
              value={endDate}
            />
          </div>
          <div>
            <Input label="Total" name="total" readOnly value={totalPrice} />
          </div>
        </div>
      </Content>
    </Form>
  );
}
