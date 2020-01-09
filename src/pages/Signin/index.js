import React from 'react';
import { Input, Form } from '@rocketseat/unform';

import { Container, Email, Password } from './styles';
import Logo from '../../assets/logo.svg';
import history from '../../services/history';

export default function Signin() {
  const handleLogin = data => {
    console.log(data);
    history.push('/student');
  };
  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <img src={Logo} alt="logo" />
        <Email>
          <strong>SEU E-MAIL</strong>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
        </Email>
        <Password>
          <strong>SUA SENHA</strong>
          <Input type="password" name="password" placeholder="*******" />
        </Password>
        <button type="submit">Entrar no sistema</button>
      </Form>
    </Container>
  );
}
