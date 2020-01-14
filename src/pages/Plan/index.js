import React from 'react';
import history from '../../services/history';
import Button from '../../components/Button';
import Grid from '../../components/Grid';

export default function Plan() {
  const handleCadastrar = () => {
    history.push('/planform');
  };
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
          <tr>
            <td>Start</td>
            <td>1 mês</td>
            <td>R$ 129,00</td>
            <td>
              <span>editar</span>
            </td>
            <td>
              <strong>apagar</strong>
            </td>
          </tr>
          <tr>
            <td>Gold</td>
            <td>3 meses</td>
            <td>R$109,00</td>
            <td>
              <span>editar</span>
            </td>
            <td>
              <strong>apagar</strong>
            </td>
          </tr>
          <tr>
            <td>Diamond</td>
            <td>6 meses</td>
            <td>R$89,00</td>
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
