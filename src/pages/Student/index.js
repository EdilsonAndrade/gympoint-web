import React from 'react';
import history from '../../services/history';
import Button from '../../components/Button';
import Grid from '../../components/Grid';
import ButtonDiv from './styles';

export default function Student() {
  const handleCadastrar = () => {
    history.push('/studentform');
  };
  return (
    <>
      <div>
        <strong>Gerenciar alunos</strong>
        <ButtonDiv>
          <Button
            buttonType="button"
            saveButton
            icon="add"
            handleClick={handleCadastrar}
          >
            Cadastrar
          </Button>
          <input type="text" placeholder="Buscar aluno" />
        </ButtonDiv>
      </div>
      <Grid>
        <thead>
          <tr>
            <th>NOME</th>
            <th>EMAIL</th>
            <th>IDADE</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Usuario Fake</td>
            <td>exemplo@gmail.com</td>
            <td>exemplo@gmail.com</td>
            <td>
              <span>editar</span>
            </td>
            <td>
              <strong>apagar</strong>
            </td>
          </tr>
          <tr>
            <td>Usuario Fake</td>
            <td>exemplo@gmail.com</td>
            <td>exemplo@gmail.com</td>
            <td>
              <span>editar</span>
            </td>
            <td>
              <strong>apagar</strong>
            </td>
          </tr>
          <tr>
            <td>Usuario Fake</td>
            <td>exemplo@gmail.com</td>
            <td>exemplo@gmail.com</td>
            <td>
              <span>editar</span>
            </td>
            <td>
              <strong>apagar</strong>
            </td>
          </tr>
          <tr>
            <td>Usuario Fake</td>
            <td>exemplo@gmail.com</td>
            <td>exemplo@gmail.com</td>
            <td>
              <span>editar</span>
            </td>
            <td>
              <strong>apagar</strong>
            </td>
          </tr>
          <tr>
            <td>Usuario Fake</td>
            <td>exemplo@gmail.com</td>
            <td>exemplo@gmail.com</td>
            <td>
              <span>editar</span>
            </td>
            <td>
              <strong>apagar</strong>
            </td>
          </tr>
          <tr>
            <td>Usuario Fake</td>
            <td>exemplo@gmail.com</td>
            <td>exemplo@gmail.com</td>
            <td>
              <span>editar</span>
            </td>
            <td>
              <strong>apagar</strong>
            </td>
          </tr>
          <tr>
            <td>Usuario Fake</td>
            <td>exemplo@gmail.com</td>
            <td>exemplo@gmail.com</td>
            <td>
              <span>editar</span>
            </td>
            <td>
              <strong>apagar</strong>
            </td>
          </tr>
          <tr>
            <td>Usuario Fake</td>
            <td>exemplo@gmail.com</td>
            <td>exemplo@gmail.com</td>
            <td>
              <span>editar</span>
            </td>
            <td>
              <strong>apagar</strong>
            </td>
          </tr>
          <tr>
            <td>Usuario Fake</td>
            <td>exemplo@gmail.com</td>
            <td>exemplo@gmail.com</td>
            <td>
              <span>editar</span>
            </td>
            <td>
              <strong>apagar</strong>
            </td>
          </tr>
        </tbody>
      </Grid>
    </>
  );
}
