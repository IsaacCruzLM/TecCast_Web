import React from 'react';
import { Button } from '@material-ui/core';
import SeparatingHorizontalLine from '../SeparatingHorizontalLine';

const LoginForm: React.FC = () => (
  <div className="loginForms">
    <form action="">
      <input placeholder="Insira seu Email" />
      <input placeholder="Senha de Acesso" />
      <Button variant="contained">ENTRAR</Button>
    </form>
    <SeparatingHorizontalLine />
    <div>
      <span>Não tem uma conta?</span>
      <span>Inscrever-se</span>
    </div>
  </div>
);

export default LoginForm;
