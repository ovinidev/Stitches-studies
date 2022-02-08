import { MainRoutes } from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { globalStyles } from "./styles/global";
import { light } from './styles/themes/light'
import { dark } from './styles/themes/dark'

function App() {

  return (
    <Router>
      <div className={light}>
        <MainRoutes />

      </div>
      {globalStyles()}
    </Router>
  )
}

export default App
