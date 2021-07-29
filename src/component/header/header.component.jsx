import React from 'react'
import { Link } from 'react-router-dom'
import{connect}  from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils';


import'./header.styles.scss'
 const Header=({currentUser})=>(
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
                 currentUser ?
                 <div className="option" onClick={()=>auth.signOut()}>Ausloggen</div>
                 :
                 <Link className="option" to='/einloggen'>Anmelden</Link>
             }

         </div>


     </div>
 );

 const mapStateToProps=state=>({
     currentUser:state.user.currentUser

 })


export default  connect(mapStateToProps)(Header);