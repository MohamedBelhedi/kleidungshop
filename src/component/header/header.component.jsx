import React from 'react'
import { Link } from 'react-router-dom'
import{connect}  from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component';

import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCarthidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
// import {auth} from '../../firebase/firebase.utils';
import firebase from "firebase/app";
// import {user} from '../../firebase/firebase.utils';


import'./header.styles.scss'
// evtl den SignOut Code löschen

const signOut = async (e) => {
    e.preventDefault();

    await firebase.auth().signOut().then(function() {
      console.log("Successfully signed out.")

    }).catch(function(error) {
      console.log(error)
      console.log("An error occurred")
    });}
const Header=({currentUser,hidden})=>(
     <div className="header">
         <Link className="logo-container" to="/"/>

             <Logo className="logo"></Logo>

        

    


        
         <div className="options">
             <Link className="option" to="/shop">
             SHOP   
             </Link>
             <Link className="option" to="/kontakt">
             Kontakt   
             </Link>
             {
                 currentUser ?(
                 <div className="option" onClick={signOut}>Ausloggen</div>
                //  ()=>auth.signOut in die onClick Methode einfügen
                 ):(
                 <Link className="option" to='/einloggen'>Anmelden</Link>
                 )}
                 <CartIcon/>
                

         </div>
         {
         hidden ? null:<CartDropDown/>
         }


     </div>
    
 );

 const mapStateToProps=createStructuredSelector({
     currentUser:selectCurrentUser,
     hidden:selectCarthidden

 });


export default  connect(mapStateToProps)(Header);