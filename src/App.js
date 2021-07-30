import {Switch,Route,Redirect } from 'react-router-dom'


import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './component/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {auth,benutzerProfil} from './firebase/firebase.utils'
import{setCurrentUser} from './redux/user/user.actions';
import {connect} from 'react-redux';
import React from 'react';

// import '../pages/homepage/homepage.styles.scss';


class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     // jetzigebenutzer
  //     currentUser:null

  //   }
  // }
  unsubscribeFromAuth=null
// hier wurde der Benutzer Gespeichert mit der Funktion
  componentDidMount(){
    const {setCurrentUser}=this.props
    this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth=>{
      // this.setState({currentUser:user});
      if(userAuth){
        const userRef= await benutzerProfil(userAuth);
        userRef.onSnapshot(snapshot=>{
          // this.setState({
          //   currentUser:
          setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
            })
          // },()=>{
          //   // console.log kann nicht danach kommen immer in der Funktion
          //   console.log(this.state);
          console.log(this.state)
        });
        
      }
      setCurrentUser({userAuth});
      // console.log(user)
    })

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
  <Header/>
   {/* kommt beim header  currentUser={this.state.currentUser} */}
  
  
      <Switch>
      
      
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route 
          exact
          path="/einloggen" 
         render={()=>this.props.currentUser ? 
         (<Redirect to='/' />
         
         )
         :(
         <SignInAndSignUpPage/>
         )
         } 
         />
         {/*kommt oben... component={SignInAndSignUpPage} */}
        
      </Switch>
     
      {/* </Header> */}
     
      
      </div>
  
    );
  }
  

  }

const mapStateToProps=({user})=>({
  currentUser:user.currentUser
});
  
const mapDispachToProps=dispatch=>({
setCurrentUser:user=>dispatch(setCurrentUser(user))
})
  
export default connect(mapStateToProps,mapDispachToProps)(App);
