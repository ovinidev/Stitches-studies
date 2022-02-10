import {Button} from '../../components/Button';
import {ButtonContainer, Container} from './styles';

export const MainPage = () => {
  return (
    <Container>
      <h1>Color variant</h1>
      <ButtonContainer>
        <Button color={'primary'}>primary</Button>
        <Button color={'secondary'}>secondary</Button>
        <Button color={'tertiary'}>tertiary</Button>
      </ButtonContainer>

      <h1>Default variant</h1>
      <ButtonContainer>
        <Button>default</Button>
        <Button>default</Button>
        <Button>default</Button>
      </ButtonContainer>

      <h1>Size variant</h1>
      <ButtonContainer>
        <Button size={'small'}>small</Button>
        <Button size={'medium'}>medium</Button>
        <Button size={'large'}>large</Button>
      </ButtonContainer>
    </Container>
  );
};
