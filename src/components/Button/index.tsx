import {StitchesButton} from './styles';
import {VariantProps} from '@stitches/react';
import {ReactNode} from 'react';

interface ButtonProps extends VariantProps<typeof StitchesButton> {
  text?: string;
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
}

export const Button = ({children, ...rest}: ButtonProps) => {
  return (
    <StitchesButton {...rest}>
      {children}
    </StitchesButton>
  );
};
