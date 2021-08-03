import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
const onToken=token=>{
    console.log(token);
    alert('Bezahlung erfolgreich')
}

const StripeButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51JKTztC7saEekUfTMXtEaW7xd7LwlBpay1ZI1aWX0sqqY4KP3foPdS1gty6rSQdhvhfN8gJ9QY4qNer8CB1DXKO8008rhEroGx'
    return(
        <StripeCheckout
        label='Bezahlen'
        name='Krone Bekleidung GmbH'
        billingaddress
        shippingadress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Deine Summe ist €${price}`}
        amount={priceForStripe}
        panelLabel='Jetzt Bezahlen'
        token={onToken}
        stripeKey={publishableKey}

        
        
        />

    )
};



export default StripeButton;



