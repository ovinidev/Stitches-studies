import { Button } from "../../components/Button"
import { ButtonContainer, Container } from "./styles"

export const MainPage = () => {
  return (
    <Container>
      <ButtonContainer>
        <Button disabled onClick={() => console.log('oi')}>purple small</Button>
      </ButtonContainer>
    </Container>
  )
}