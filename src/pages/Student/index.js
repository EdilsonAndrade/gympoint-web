import React from 'react';

import Button from '../../components/Button';
import Grid from '../../components/Grid';

export default function Student() {
  const handleCadastrar = () => {
    console.log('cadastrar');
  };
  return (
    <>
      <div>
        <strong>Gerenciar alunos</strong>
        <div>
          <Button buttonType="button" handleClick={handleCadastrar}>
            Cadastrar
          </Button>
          <input type="text" placeholder="Buscar aluno" />
        </div>
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
