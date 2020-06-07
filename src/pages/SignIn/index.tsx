import React from 'react';
import { Image } from 'react-native';

import * as s from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <>
      <s.Container>
        <Image source={logoImg} />
        <s.Title>Faça seu logon</s.Title>
      </s.Container>
    </>
  );
};

export default SignIn;
