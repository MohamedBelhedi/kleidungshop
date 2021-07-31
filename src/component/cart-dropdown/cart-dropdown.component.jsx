import React from 'react'
// connect zum rausziehen der Funktionen
import {connect} from 'react-redux'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'




const CartDropDown=({cartItems})=>(
    <div className="cart-dropdown">
        <div className="cart-items"  >
        {
            cartItems.map(cartItem=>(
            <CartItem key={cartItem.id} item={cartItem}/>))
        }

        </div>
        
        <CustomButton>Bezahlen</CustomButton>


    </div>
);

const mapStateToProps=(state)=>({
    cartItems:selectCartItemsCount(state)

})



export default connect(mapStateToProps)(CartDropDown);