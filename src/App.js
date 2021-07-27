import {Switch,Route } from 'react-router-dom'


import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './component/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {auth} from './firebase/firebase.utils'
import React from 'react';

// import '../pages/homepage/homepage.styles.scss';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      // jetzigebenutzer
      currentUser:null

    }
  }
  unsubscribeFromAuth=null
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user)
    })

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
  <Header currentUser={this.state.currentUser}/>
  
  
      <Switch>
      
      
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/einloggen" component={SignInAndSignUpPage}/>
        
      </Switch>
     
      {/* </Header> */}
     
      
      </div>
  
    );
  }
  

  }
  
export default App;
