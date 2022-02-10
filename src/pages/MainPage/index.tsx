import { Button } from '../../components/Button';
import { Title } from '../../components/Title';
import { ButtonContainer, Container } from './styles';

export const MainPage = () => {
  return (
    <Container>
      <Title text={'Color variant'} />
      <ButtonContainer>
        <Button color={'primary'}>primary</Button>
        <Button color={'secondary'}>secondary</Button>
        <Button color={'tertiary'}>tertiary</Button>
      </ButtonContainer>

      <Title text={'Default variant'} />
      <ButtonContainer>
        <Button>default</Button>
        <Button>default</Button>
        <Button>default</Button>
      </ButtonContainer>

      <Title text={'Size variant'} />
      <ButtonContainer>
        <Button size={'small'}>small</Button>
        <Button size={'medium'}>medium</Button>
        <Button size={'large'}>large</Button>
      </ButtonContainer>

      <Title text={'Small'} size={'small'} font={'primary'} />
      <Title text={'Medium'} size={'medium'} font={'secondary'} />
      <Title text={'Large'} size={'large'} font={'tertiary'} />

      <Title text={'Uppercase'} uppercase />
      <Title text={'Uppercase e Primary'} font={'primary'} uppercase />
      <Title text={'Uppercase, primary e medium'} font={'primary'} size={'medium'} uppercase />

      <Title text={'Default variants'} />
      <Title text={'Default variants'} />
      <Title text={'Default variants'} />


    </Container>
  );
};
