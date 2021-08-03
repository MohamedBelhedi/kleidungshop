import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems,selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckOutItem from '../../component/checkout-item/checkout-item.component';
import StripeButton from '../../component/stripe-button/stripe-button.component';
import './checkout.styles.scss'

const CheckOut=({cartItems,total})=>(


    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span></span>
            </div>
            <div className="header-block">
                <span>Produkt</span>
            </div>
            <div className="header-block">
                <span>Details</span>
            </div>
            <div className="header-block">
                <span>Menge</span>
            </div>
            <div className="header-block">
                <span>Preis</span>
            </div>
            <div className="header-block">
                <span>Löschen</span>
            </div>
        </div>
        {
            cartItems.map(cartItem=>(
             <CheckOutItem key={cartItem.id} cartItem={cartItem}/>   
            ))
        }
        <div className="total">
            <span> Summe {total} €</span>
        </div>
        <StripeButton price={total}/>
    </div>

);

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})


export default connect(mapStateToProps)(CheckOut);
