import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import * as s from './styles';

const SignIn: React.FC = () => {
  return (
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
    </s.Container>
  );
};

export default SignIn;
