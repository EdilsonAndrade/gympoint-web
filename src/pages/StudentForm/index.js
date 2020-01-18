import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Form } from '@rocketseat/unform';
import * as Yup from 'yup';
import Button from '../../components/Button';
import { Content, Spinner } from './styles';
import { startLoading } from '~/store/modules/loading/actions';
import { saveRequest } from '~/store/modules/student/actions';
import history from '~/services/history';
import InputMaskForm from '~/components/InputMask';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail deve ser informado corretamente')
    .required('E-mail deve ser informado corretamente'),
  name: Yup.string('Nome deve conter ao menos 15 caracteres').required(
    'Nome deve conter ao menos 15 caracteres'
  ),

  age: Yup.string('Idade deve ser igual ou maior que 18 anos').required(
    'Idade deve ser igual ou maior que 18 anos'
  ),

  height: Yup.string().required('Altura é obrigatória'),
  weight: Yup.string().required('Peso é obrigatório'),
});
export default function StudentForm() {
  const dispatch = useDispatch();
  const studentData = useSelector(state => state.student);
  const loading = useSelector(state => state.load.loading);

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (studentData.id) {
      setEditMode(true);
    }
  }, [studentData.id]);

  const handleBack = () => {
    history.push('/student');
  };

  const handleSave = data => {
    dispatch(startLoading());
    dispatch(saveRequest({ ...data, id: studentData.id }));
  };
  return (
    <Form schema={schema} initialData={studentData} onSubmit={handleSave}>
      <div>
        <strong>{editMode ? 'Edição de aluno' : 'Cadastro de alunos'}</strong>
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
          name="name"
          label="NOME COMPLETO"
          placeholder="Nome do aluno completo"
        />
        <Input label="E-mail" name="email" type="email" placeholder="E-mail" />
        <div>
          <div>
            <Input label="Idade" name="age" type="number" />
          </div>
          <div>
            <InputMaskForm
              name="weight"
              label="Peso (em kg)"
              type="text"
              mask="999.99"
            />
          </div>
          <div>
            <Input label="Altura" name="height" type="text" />
          </div>
        </div>
      </Content>
    </Form>
  );
}
