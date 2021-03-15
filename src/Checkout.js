import React from 'react'
import './Checkout.css'
import RenderCartItem from './RenderCartItem';
import RenderSubtotal from './RenderSubtotal';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'



function Checkout() {
    const [{cart , user}, dispatch] = useStateValue();

    

    return (
        <div className="checkout">
            <div className="checkout__ad">
                <strong>Pay faster for all your shopping needs <span className="checkout__adAmazonPay">with Amazon Pay balance</span></strong>
                <p>Get Instant refund on cancellations | Zero payment failures</p>
            </div>
            <div className="checkout__main">
                <div className="checkout__left">
                   

                    <div>
                        <p className="checkout__email">Hello, {user?.email}</p>
                        <p className="checkout__title">Your Shopping Cart</p>
                        {cart.map((item) => {
                            
                            return <RenderCartItem cartItem={item}/>

                        })}
                        
                        <div className= "checkout__subtotal">
                            <RenderSubtotal /> 

                        </div>
                        
                    </div>



                </div>
                <div className="checkout__right">
                    <Subtotal />

                </div>

            </div>
            
        </div>
    )
}

export default Checkout
