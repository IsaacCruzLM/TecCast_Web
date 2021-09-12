import React from 'react';
import { Button } from '@material-ui/core';
import SeparatingHorizontalLine from '../SeparatingHorizontalLine';

import { Container, Form, RegisterContainer } from './styles';

const LoginForm: React.FC = () => (
  <Container>
    <Form action="">
      <input placeholder="Insira seu Email" />
      <input placeholder="Senha de Acesso" />
      <Button variant="contained">ENTRAR</Button>
    </Form>
    <SeparatingHorizontalLine />
    <RegisterContainer>
      Não tem uma conta?
      <span>Inscrever-se</span>
    </RegisterContainer>
  </Container>
);

export default LoginForm;
