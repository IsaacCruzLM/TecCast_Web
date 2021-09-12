import React from 'react';

import LoginForm from '../../components/LoginForm';
import SeparatingVerticalLine from '../../components/SeparatingVerticalLine';

import Logo from '../../assets/Logo.png';

const LoginPage: React.FC = () => (
  <main className="loginPage">
    <img src={Logo} alt="TecCast" />
    <SeparatingVerticalLine />
    <LoginForm />
  </main>
);

export default LoginPage;
