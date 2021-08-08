import {Switch,Route,Redirect } from 'react-router-dom'


import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './component/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {auth,benutzerProfil,addCollectionAndDocuments} from './firebase/firebase.utils'
import{setCurrentUser} from './redux/user/user.actions';
import {connect} from 'react-redux';
import React from 'react';
import {selectCurrentUser} from './redux/user/user.selectors'
import { createStructuredSelector } from 'reselect';
import CheckOut from './pages/checkout/checkout.component';
// import { selectCollectionsForPreview } from './redux/shop/shop.selector';
import {selectCollectionsForPreview} from './redux/shop/shop.selector'

// import '../pages/homepage/homepage.styles.scss';


class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     // jetzigebenutzer
  //     currentUser:null

  //   }
  // }
  unsubscribeFromAuth=null;
// hier wurde der Benutzer Gespeichert mit der Funktion
  componentDidMount(){
    const {setCurrentUser,collectionsArray}=this.props
    this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth=>{
      // this.setState({currentUser:user});
      if(!userAuth){
        const userRef= await benutzerProfil(!userAuth);
        userRef.onSnapshot(snapshot=>{
          // this.setState({
          //   currentUser:
          setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
            })
         
        });
        
      }
      setCurrentUser({userAuth});
      addCollectionAndDocuments('collections',collectionsArray.map(({title,items})=>({title,items})));
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
        <Route path="/bezahlen" component={CheckOut}/>
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

const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
  collectionsArray:selectCollectionsForPreview
});
  
const mapDispachToProps=dispatch=>({
setCurrentUser:user=>dispatch(setCurrentUser(user))
})
  
export default connect(mapStateToProps,
  mapDispachToProps)
  (App);
