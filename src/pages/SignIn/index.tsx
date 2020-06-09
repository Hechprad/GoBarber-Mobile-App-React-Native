import React from 'react';
import { View } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import * as s from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <s.KeyboardAvoidingView>
        <s.ScrollView>
          <s.Container>
            <s.LogoImage />

            <View>
              <s.Title>Faça seu logon</s.Title>
            </View>

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
        </s.ScrollView>
      </s.KeyboardAvoidingView>

      <s.CreateAccountButton onPress={() => {}}>
        <s.Icon name="log-in" />
        <s.CreateAccountButtonText>Criar uma conta</s.CreateAccountButtonText>
      </s.CreateAccountButton>
    </>
  );
};

export default SignIn;
