import { MainRoutes } from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import styled from 'styled-components';

const Title = styled.h1`
  
`
function App() {

  return (
    <Router>
      <MainRoutes />
    </Router>
  )
}

export default App
