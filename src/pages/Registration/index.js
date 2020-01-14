import React from 'react';
import { MdCheck } from 'react-icons/md';
import history from '../../services/history';
import Button from '../../components/Button';
import Grid from '../../components/Grid';
import { Status, Actions } from './styles';

export default function Registraion() {
  const handleCadastrar = () => {
    history.push('/registrationform');
  };
  return (
    <>
      <div>
        <strong>Gerenciar matrículas</strong>
        <Button buttonType="button" saveButton handleClick={handleCadastrar}>
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
            <th>ATIVA</th>
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
              <Status active>
                <MdCheck size={15} color="#fff" />
              </Status>
            </td>
            <td>
              <Actions>editar</Actions>
            </td>
            <td>
              <Actions delete>apagar</Actions>
            </td>
          </tr>
          <tr>
            <td>Michale</td>
            <td>Start</td>
            <td>30 de Abril de 2019</td>
            <td>30 de Maior de 2019</td>
            <td>
              <Status active>
                <MdCheck size={15} color="#fff" />
              </Status>
            </td>
            <td>
              <Actions>editar</Actions>
            </td>
            <td>
              <Actions delete>apagar</Actions>
            </td>
          </tr>
          <tr>
            <td>Michale</td>
            <td>Start</td>
            <td>30 de Abril de 2019</td>
            <td>30 de Maior de 2019</td>
            <td>
              <Status>
                <MdCheck size={15} color="#fff" />
              </Status>
            </td>
            <td>
              <Actions>editar</Actions>
            </td>
            <td>
              <Actions delete>apagar</Actions>
            </td>
          </tr>
          <tr>
            <td>Michale</td>
            <td>Start</td>
            <td>30 de Abril de 2019</td>
            <td>30 de Maior de 2019</td>
            <td>
              <Status active>
                <MdCheck size={15} color="#fff" />
              </Status>
            </td>
            <td>
              <Actions>editar</Actions>
            </td>
            <td>
              <Actions delete>apagar</Actions>
            </td>
          </tr>
          <tr>
            <td>Michale</td>
            <td>Start</td>
            <td>30 de Abril de 2019</td>
            <td>30 de Maior de 2019</td>
            <td>
              <Status>
                <MdCheck size={15} color="#fff" />
              </Status>
            </td>
            <td>
              <Actions>editar</Actions>
            </td>
            <td>
              <Actions delete>apagar</Actions>
            </td>
          </tr>
          <tr>
            <td>Michale</td>
            <td>Start</td>
            <td>30 de Abril de 2019</td>
            <td>30 de Maior de 2019</td>
            <td>
              <Status active>
                <MdCheck size={15} color="#fff" />
              </Status>
            </td>
            <td>
              <Actions>editar</Actions>
            </td>
            <td>
              <Actions delete>apagar</Actions>
            </td>
          </tr>
          <tr>
            <td>Michale</td>
            <td>Start</td>
            <td>30 de Abril de 2019</td>
            <td>30 de Maior de 2019</td>
            <td>
              <Status active>
                <MdCheck size={15} color="#fff" />
              </Status>
            </td>
            <td>
              <Actions>editar</Actions>
            </td>
            <td>
              <Actions delete>apagar</Actions>
            </td>
          </tr>
        </tbody>
      </Grid>
    </>
  );
}
