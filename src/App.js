import {Switch,Route } from 'react-router-dom'

import './App.css';
import Homepage from './pages/homepage/homepage.component';
// import '../pages/homepage/homepage.styles.scss';
const Capspage=()=>(
  <div>
    <h1>Caps Seite</h1>
  </div>
)
function App() {
  return (
    <Switch>
    <div>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/caps" component={Capspage}/>
      
    </div>
    </Switch>
  );
}

export default App;
