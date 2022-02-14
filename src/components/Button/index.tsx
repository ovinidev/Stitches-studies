/* eslint-disable react/require-default-props */
import { VariantProps } from '@stitches/react';
import { ReactNode } from 'react';
import { StitchesButton } from './styles';

interface ButtonProps extends VariantProps<typeof StitchesButton> {
  onClick?: () => void;
  children: ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => (
  <StitchesButton {...rest}>
    {children}
  </StitchesButton>
);
