import React from 'react';

import Button from '../../components/Button';
import Grid from '../../components/Grid';

export default function Registraion() {
  const handleCadastrar = () => {
    console.log('cadastrar');
  };
  return (
    <>
      <div>
        <strong>Gerenciar matrículas</strong>
        <Button buttonType="button" handleClick={handleCadastrar}>
          Cadastrar
        </Button>
      </div>
      <Grid>
        <thead>
          <tr>
            <th>ALUNO</th>
            <th>PLANO</th>
            <th>INICIO</th>
            <th>TÉRMINO</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Michale</td>
            <td>Start</td>
            <td>30 de Abril de 2019</td>
            <td>30 de Maior de 2019</td>
            <td>
              <span>editar</span>
            </td>
            <td>
              <strong>apagar</strong>
            </td>
          </tr>
          <tr>
            <td>Michale</td>
            <td>Start</td>
            <td>30 de Abril de 2019</td>
            <td>30 de Maior de 2019</td>
            <td>
              <span>editar</span>
            </td>
            <td>
              <strong>apagar</strong>
            </td>
          </tr>
          <tr>
            <td>Michale</td>
            <td>Start</td>
            <td>30 de Abril de 2019</td>
            <td>30 de Maior de 2019</td>
            <td>
              <span>editar</span>
            </td>
            <td>
              <strong>apagar</strong>
            </td>
          </tr>
          <tr>
            <td>Michale</td>
            <td>Start</td>
            <td>30 de Abril de 2019</td>
            <td>30 de Maior de 2019</td>
            <td>
              <span>editar</span>
            </td>
            <td>
              <strong>apagar</strong>
            </td>
          </tr>
          <tr>
            <td>Michale</td>
            <td>Start</td>
            <td>30 de Abril de 2019</td>
            <td>30 de Maior de 2019</td>
            <td>
              <span>editar</span>
            </td>
            <td>
              <strong>apagar</strong>
            </td>
          </tr>
          <tr>
            <td>Michale</td>
            <td>Start</td>
            <td>30 de Abril de 2019</td>
            <td>30 de Maior de 2019</td>
            <td>
              <span>editar</span>
            </td>
            <td>
              <strong>apagar</strong>
            </td>
          </tr>
          <tr>
            <td>Michale</td>
            <td>Start</td>
            <td>30 de Abril de 2019</td>
            <td>30 de Maior de 2019</td>
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
