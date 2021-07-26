import {Switch,Route } from 'react-router-dom'


import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './component/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
// import '../pages/homepage/homepage.styles.scss';


function App() {
  return (
    <div>
{/* <Header> */}


    <Switch>
    
    
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/shop" component={ShopPage}/>
      <Route exact path="/einloggen" component={SignInAndSignUpPage}/>
      
    </Switch>
   
    {/* </Header> */}
   
    
    </div>

  );
}

export default App;
