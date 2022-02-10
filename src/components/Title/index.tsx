import { StitchesTitle } from "./styles";
import { VariantProps } from '@stitches/react';

interface TitleProps extends VariantProps<typeof StitchesTitle> {
  text: string;
}

export const Title = ({ text, ...rest }: TitleProps) => {
  return (
    <StitchesTitle {...rest}>
      {text}
    </StitchesTitle>
  )
}