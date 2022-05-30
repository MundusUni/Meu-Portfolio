import{BrowserRouter as Router} from 'react-router-dom'

import './App.css';
import AnimatedRoutes from './Components/AnimatedRoutes';

const App = () => {
  return (
  <div>
  {/*<Home/>*/}
  <Router>
    <div className = "App">
      <AnimatedRoutes/>
    </div>
  </Router>
  </div>
  )
}


export default App;
