import React from 'react';
import { Input, Form, Select } from '@rocketseat/unform';

import InputDatePicker from './InputDatePicker';
import Button from '../../components/Button';
import Content from './styles';

export default function StudentForm() {
  const handleCadastrar = () => {
    console.log('cadastrar');
  };

  const handleSave = data => {
    console.log(data);
  };
  return (
    <Form onSubmit={handleSave}>
      <div>
        <strong>Matricula Aluno</strong>
        <div>
          <Button buttonType="button" icon="back" handleClick={handleCadastrar}>
            VOLTAR
          </Button>
          <Button buttonType="submit" saveButton>
            SALVAR
          </Button>
        </div>
      </div>

      <Content>
        <Select
          name="student"
          options={[
            { id: 1, title: 'Aluno1' },
            { id: 2, title: 'Aluno2' },
          ]}
          label="Aluno"
        />

        <div>
          <div>
            <Select
              name="plan"
              options={[
                { id: 0, title: 'Selecione um plano' },
                { id: 3, title: 'Plan1' },
                { id: 4, title: 'Plan2' },
              ]}
              label="Plano"
            />
          </div>
          <div>
            <strong>DATA DE INÍCIO</strong>
            <InputDatePicker name="startdate" />
          </div>
          <div>
            <Input
              label="Data de Término"
              name="enddate"
              type="number"
              readOnly
              id="enddate"
            />
          </div>
          <div>
            <Input
              label="Valor Final"
              name="total"
              type="number"
              readOnly
              id="totalprice"
            />
          </div>
        </div>
      </Content>
    </Form>
  );
}
