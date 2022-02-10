import {Button} from '../../components/Button';
import {ButtonContainer, Container} from './styles';

export const MainPage = () => {
  return (
    <Container>
      <ButtonContainer>
        <Button color={'primary'}>primary</Button>
        <Button color={'secondary'}>secondary</Button>
        <Button color={'tertiary'}>tertiary</Button>
        <Button>default</Button>
        <Button>default</Button>
        <Button>default</Button>
      </ButtonContainer>
    </Container>
  );
};
