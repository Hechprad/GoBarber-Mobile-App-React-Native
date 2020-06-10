import React, { useCallback, useRef } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';
import Button from '../../components/Button';

import * as s from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  return (
    <>
      <s.KeyboardAvoidingView>
        <s.ScrollView>
          <s.Container>
            <s.LogoImage />

            <View>
              <s.Title>Crie sua conta</s.Title>
            </View>

            <Form
              ref={formRef}
              onSubmit={(data) => {
                console.log(data);
              }}
            >
              <Input name="name" icon="user" placeholder="Nome" />
              <Input name="email" icon="mail" placeholder="E-mail" />
              <Input name="password" icon="lock" placeholder="Senha" />

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Entrar
              </Button>
            </Form>
          </s.Container>
        </s.ScrollView>
      </s.KeyboardAvoidingView>

      <s.BackToSignIn
        onPress={() => {
          navigation.goBack();
        }}
      >
        <s.Icon name="arrow-left" />
        <s.BackToSignInText>Voltar para logon</s.BackToSignInText>
      </s.BackToSignIn>
    </>
  );
};

export default SignUp;
