import React, { useCallback, useRef } from 'react';
import { View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';
import Button from '../../components/Button';

import * as s from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const handleSignIn = useCallback((data: object) => {
    console.log(data);
  }, []);

  return (
    <>
      <s.KeyboardAvoidingView>
        <s.ScrollView>
          <s.Container>
            <s.LogoImage />

            <View>
              <s.Title>Faça seu logon</s.Title>
            </View>

            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                secureTextEntry
                name="password"
                icon="lock"
                placeholder="Senha"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Entrar
              </Button>
            </Form>

            <s.ForgotPassword onPress={() => {}}>
              <s.ForgotPasswordText>Esqueci minha senha</s.ForgotPasswordText>
            </s.ForgotPassword>
          </s.Container>
        </s.ScrollView>
      </s.KeyboardAvoidingView>

      <s.CreateAccountButton
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      >
        <s.Icon name="log-in" />
        <s.CreateAccountButtonText>Criar uma conta</s.CreateAccountButtonText>
      </s.CreateAccountButton>
    </>
  );
};

export default SignIn;
