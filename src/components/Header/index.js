import React from 'react';

import { Container, Content, Menu } from './styles';
import Logo from '../../assets/logheader.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <div>
            <img src={Logo} alt="gympoint" />
          </div>
          <Menu to="/student">ALUNOS</Menu>
          <Menu to="/plans">PLANOS</Menu>
          <Menu to="/registrations">MATRICULAS</Menu>
          <Menu to="/orders">PEDIDOS DE AUXILIO</Menu>
        </nav>
        <aside>
          <strong>Edilson Andrade</strong>
          <button type="button">sair do sistema</button>
        </aside>
      </Content>
    </Container>
  );
}
