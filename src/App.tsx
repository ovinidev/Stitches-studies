import { MainRoutes } from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
`
function App() {

  return (
    <Router>
      <MainRoutes />
      <Title>Oi</Title>
    </Router>
  )
}

export default App
