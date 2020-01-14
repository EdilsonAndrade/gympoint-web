import React from 'react';
import { Input, Form } from '@rocketseat/unform';
import history from '../../services/history';
import Button from '../../components/Button';
import Content from './styles';

export default function PlanForm() {
  const handleSave = data => {
    console.log(data);
  };
  return (
    <Form onSubmit={handleSave}>
      <div>
        <strong>Cadastro do Plano</strong>
        <div>
          <Button
            buttonType="button"
            icon="back"
            handleClick={() => history.push('/plans')}
          >
            VOLTAR
          </Button>
          <Button buttonType="submit" saveButton>
            SALVAR
          </Button>
        </div>
      </div>

      <Content>
        <Input
          name="name"
          placeholder="Titulo do plano"
          label="Título do plano"
        />

        <div>
          <div>
            <Input name="duration" label="Duração (em meses)" type="number" />
          </div>

          <div>
            <Input label="Preço Mensal" name="price" type="number" />
          </div>
          <div>
            <Input label="Preço Total" name="total" type="number" disabled />
          </div>
        </div>
      </Content>
    </Form>
  );
}
