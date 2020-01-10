import React from 'react';

import Grid from '../../components/Grid';
import Content from './styles';

export default function Order() {
  return (
    <Content>
      <div>
        <strong>Pedidos de auxilio</strong>
      </div>

      <Grid>
        <thead>
          <tr>
            <th>Aluno</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Usuario Fake</td>
            <td>
              <span>Responser</span>
            </td>
          </tr>
          <tr>
            <td>Usuario Fake</td>
            <td>
              <span>Responser</span>
            </td>
          </tr>
          <tr>
            <td>Usuario Fake</td>
            <td>
              <span>Responser</span>
            </td>
          </tr>
          <tr>
            <td>Usuario Fake</td>
            <td>
              <span>Responser</span>
            </td>
          </tr>
          <tr>
            <td>Usuario Fake</td>
            <td>
              <span>Responser</span>
            </td>
          </tr>
          <tr>
            <td>Usuario Fake</td>
            <td>
              <span>Responser</span>
            </td>
          </tr>
          <tr>
            <td>Usuario Fake</td>
            <td>
              <span>Responser</span>
            </td>
          </tr>
        </tbody>
      </Grid>
    </Content>
  );
}
