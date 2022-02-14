import { VariantProps } from '@stitches/react';
import { StitchesTitle } from './styles';

interface TitleProps extends VariantProps<typeof StitchesTitle> {
  text: string;
}

export const Title = ({ text, ...rest }: TitleProps) => (
  <StitchesTitle {...rest}>
    {text}
  </StitchesTitle>
);
