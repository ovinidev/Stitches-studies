import { StyledSwitch, StyledThumb, Flex, Label } from './styles';

export const Switch = () => (
  <Flex style={{ alignItems: 'center' }}>
    <StyledSwitch defaultChecked id="s1">
      <StyledThumb />
    </StyledSwitch>
  </Flex>
);

