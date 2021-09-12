import React from 'react';

import LoginForm from '../../components/LoginForm';
import SeparatingVerticalLine from '../../components/SeparatingVerticalLine';

import Logo from '../../assets/Logo_Transparent.png';

import Container from './styles';

const LoginPage: React.FC = () => (
  <Container className="loginPage">
    <img src={Logo} alt="TecCast" />
    <SeparatingVerticalLine />
    <LoginForm />
  </Container>
);

export default LoginPage;
