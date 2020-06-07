import React from 'react';
import { TextInputProps } from 'react-native';

import { themeColors } from '../../styles/theme';

import * as s from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
    <s.Container>
      <s.Icon name={icon} />
      <s.TextInput
        keyboardAppearance="dark"
        placeholderTextColor={themeColors.gray1}
        {...rest}
      />
    </s.Container>
  );
};

export default Input;
