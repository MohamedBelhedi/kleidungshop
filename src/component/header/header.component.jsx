import React from 'react'
// import { Link } from 'react-router-dom'
import{connect}  from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component';

import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCarthidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import{HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from './header.styles.jsx'

// import {auth} from '../../firebase/firebase.utils';
import firebase from "firebase/app";
// import {user} from '../../firebase/firebase.utils';


import'./header.styles.scss'
// evtl den SignOut Code löschen

const signOut = async (e) => {
    e.preventDefault();

     firebase.auth().signOut().then(function() {
      console.log("Erfolgreich Abgemeldet.")

    }).catch(function(error) {
      console.log(error)
      console.log("Ein Fehler wurde gefunden".error)
    });}
const Header=({currentUser,hidden})=>(
     

        

    


        
         <HeaderContainer>
             
             <LogoContainer to='/'> 

             <Logo classname='logo'/>
                
             </LogoContainer>
             <OptionsContainer>
             <OptionLink className="option" to="/shop">
             SHOP   
             </OptionLink>
             <OptionLink className="option" to="/kontakt">
             Kontakt   
             </OptionLink>
             {
                 currentUser ?(
                 <OptionLink as='div' onClick={signOut}>Ausloggen</OptionLink>
                //  ()=>auth.signOut in die onClick Methode einfügen
                 ):(
                 <OptionLink className="option" to='/einloggen'>Anmelden</OptionLink>
                 )}
                 <CartIcon/>
                 </OptionsContainer>

         
         {
         hidden ? null:<CartDropDown/>
         }


</HeaderContainer>
    
 );

 const mapStateToProps=createStructuredSelector({
     currentUser:selectCurrentUser,
     hidden:selectCarthidden

 });


export default  connect(mapStateToProps)(Header);