import { BrowserRouter as Router } from 'react-router-dom';
import { MainRoutes } from './Routes';
import { globalStyles } from './styles/global';
import { light } from './styles/themes/light';
import { dark } from './styles/themes/dark';

function App() {
  return (
    <div className={light}>
      <Router>
        <MainRoutes />
        {globalStyles()}
      </Router>
    </div>
  );
}

export default App;
