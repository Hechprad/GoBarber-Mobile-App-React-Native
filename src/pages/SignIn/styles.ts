import styled from 'styled-components/native';
import { Platform } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import logoImg from '../../assets/logo.png';

export const LogoImage = styled.Image.attrs(() => ({
  source: logoImg,
}))``;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs(() => ({
  behavior: Platform.OS === 'ios' ? 'padding' : undefined,
  enabled: true,
}))`
  flex: 1;
`;

export const ScrollView = styled.ScrollView.attrs(() => ({
  keyboardShouldPersistTaps: 'handled',
}))`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white2};
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white2};
  font-family: ${({ theme }) => theme.fonts.RobotoSlabRegular};
`;
export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.background};
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.darkPurple};
  padding: 16px 0 ${16 + getBottomSpace()}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CreateAccountButtonText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.orange};
  font-family: ${({ theme }) => theme.fonts.RobotoSlabRegular};
  margin-left: 16px;
`;

export const Icon = styled(FeatherIcon).attrs((props) => ({
  size: 20,
  color: props.theme.colors.orange,
}))``;
