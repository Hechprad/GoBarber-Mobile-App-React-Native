import React from 'react';
import { View } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import * as s from './styles';

const SignUp: React.FC = () => {
  return (
    <>
      <s.KeyboardAvoidingView>
        <s.ScrollView>
          <s.Container>
            <s.LogoImage />

            <View>
              <s.Title>Crie sua conta</s.Title>
            </View>

            <Input name="name" icon="user" placeholder="Nome" />
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
        </s.ScrollView>
      </s.KeyboardAvoidingView>

      <s.BackToSignIn onPress={() => {}}>
        <s.Icon name="arrow-left" />
        <s.BackToSignInText>Voltar para logon</s.BackToSignInText>
      </s.BackToSignIn>
    </>
  );
};

export default SignUp;
