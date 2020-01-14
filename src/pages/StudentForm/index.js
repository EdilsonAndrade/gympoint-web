import React from 'react';
import { Input, Form } from '@rocketseat/unform';
import Button from '../../components/Button';
import Content from './styles';

export default function StudentForm() {
  const handleCadastrar = () => {
    console.log('cadastrar');
  };

  const handleSave = () => {
    console.log('cadastrar');
  };
  return (
    <Form>
      <div>
        <strong>Cadastro de alunos</strong>
        <div>
          <Button buttonType="button" icon="back" handleClick={handleCadastrar}>
            VOLTAR
          </Button>
          <Button buttonType="submit" saveButton handleClick={handleSave}>
            SALVAR
          </Button>
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
            <Input name="weight" label="Peso(klg)" type="number" />
          </div>
          <div>
            <Input label="Altura" name="height" type="number" />
          </div>
        </div>
      </Content>
    </Form>
  );
}
