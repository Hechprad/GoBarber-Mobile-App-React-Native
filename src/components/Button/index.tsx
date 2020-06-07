import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import * as s from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <s.Container {...rest}>
      <s.ButtonText>{children}</s.ButtonText>
    </s.Container>
  );
};

export default Button;
