import React from 'react';

import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Content } from './styles';
import Logo from '../../assets/logheader.svg';
import { signOutRequest } from '~/store/modules/signin/actions';

export default function Header() {
  const dispatch = useDispatch();
  return (
    <Container>
      <Content>
        <nav>
          <div>
            <img src={Logo} alt="gympoint" />
          </div>
          <NavLink
            activeStyle={{ color: '#000000' }}
            style={{ color: '#999999' }}
            to="/student"
          >
            ALUNOS
          </NavLink>
          <NavLink
            activeStyle={{ color: '#000000' }}
            style={{ color: '#999999' }}
            to="/plans"
          >
            PLANOS
          </NavLink>
          <NavLink
            activeStyle={{ color: '#000000' }}
            style={{ color: '#999999' }}
            to="/registrations"
          >
            MATRICULAS
          </NavLink>
          <NavLink
            activeStyle={{ color: '#000000' }}
            style={{ color: '#999999' }}
            to="/orders"
          >
            PEDIDOS DE AUXILIO
          </NavLink>
        </nav>
        <aside>
          <strong>Edilson Andrade</strong>
          <button type="button" onClick={() => dispatch(signOutRequest())}>
            sair do sistema
          </button>
        </aside>
      </Content>
    </Container>
  );
}
