import styled, { css, DefaultTheme } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.darkPurple};
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.darkPurple};

  flex-direction: row;
  align-items: center;

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: ${({ theme }) => theme.colors.red};
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${({ theme }) => theme.colors.orange};
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.white1};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.RobotoSlabRegular};
`;

interface IconProps {
  theme: DefaultTheme;
  isFocused: boolean;
  isFilled: boolean;
}

export const Icon = styled(FeatherIcon).attrs(
  ({ theme, isFocused, isFilled }: IconProps) => ({
    size: 20,
    color: isFocused || isFilled ? theme.colors.orange : theme.colors.gray1,
  }),
)<IconProps>`
  margin-right: 16px;
`;
