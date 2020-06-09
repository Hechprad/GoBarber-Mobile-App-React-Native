import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import * as s from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <s.Container>
        <Image source={logoImg} />

        <s.Title>Faça seu logon</s.Title>

        <Input name="email" icon="mail" placeholder="E-mail" />
        <Input name="password" icon="lock" placeholder="Senha" />

        <Button
          onPress={() => {
            console.log('Deu');
          }}
        >
          Entrar
        </Button>

        <s.ForgotPassword onPress={() => {}}>
          <s.ForgotPasswordText>Esqueci minha senha</s.ForgotPasswordText>
        </s.ForgotPassword>
      </s.Container>

      <s.CreateAccountButton onPress={() => {}}>
        <s.Icon name="log-in" />
        <s.CreateAccountButtonText>Criar uma conta</s.CreateAccountButtonText>
      </s.CreateAccountButton>
    </>
  );
};

export default SignIn;
