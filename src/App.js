import {Switch,Route } from 'react-router-dom'

import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
// import '../pages/homepage/homepage.styles.scss';


function App() {
  return (
    <Switch>
    <div>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/shop" component={ShopPage}/>
      
    </div>
    </Switch>
  );
}

export default App;
