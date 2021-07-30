import React from 'react'
import { Link } from 'react-router-dom'
import{connect}  from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component';

import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {auth} from '../../firebase/firebase.utils';


import'./header.styles.scss'
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
                 <div className="option" onClick={()=>auth.signOut()}>Ausloggen</div>
                 ):(
                 <Link className="option" to='/einloggen'>Anmelden</Link>
                 )}
                 <CartIcon/>
                

         </div>
         {
         hidden ? null:
         
         <CartDropDown/>
         }


     </div>
    
 );

 const mapStateToProps=({user:{currentUser},cart:{hidden}})=>({
     currentUser,
     hidden

 })


export default  connect(mapStateToProps)(Header);