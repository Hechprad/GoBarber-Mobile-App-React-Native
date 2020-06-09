import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.darkPurple};
  border-radius: 10px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.white1};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.RobotoSlabRegular};
`;

export const Icon = styled(FeatherIcon).attrs((props) => ({
  size: 20,
  color: props.theme.colors.gray1,
}))`
  margin-right: 16px;
`;
