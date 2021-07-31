import React from 'react'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions';
// import { createSelector } from 'reselect';
import './cart-icon.styles.scss'
import{ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'



const CartIcon=({toggleCartHidden,itemCount})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>

        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count" >{itemCount}</span>
        


    </div>

);

const mapDispachToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});
const mapStateToProps=({cart:{cartItems}})=>({
    itemCount:cartItems.reduce((acc,cartItem)=> acc + cartItem.quantity,0)
});


export default connect(
    mapStateToProps,
    mapDispachToProps
)(CartIcon);