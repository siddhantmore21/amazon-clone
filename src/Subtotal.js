import React from 'react'
import './Subtotal.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useStateValue } from './StateProvider';
import RenderSubtotal from './RenderSubtotal';

function Subtotal() {
    const [{cart}, dispatch] = useStateValue();

    //console.log(cart[0].price)

    
    return (
        <div className="subtotal">
            <div className="subtotal__freeDelivery">
                <CheckCircleIcon className="subtotal__checkIcon"/>

                <p>
                    <span className="subtotal__freeDeliveryMessage">
                    Your order is eligible for FREE Delivery.
                    </span>
                    <br />
                    Select this option at checkout.<span className="subtotal__freeDeliveryMessage"> Details</span>
                </p>
            </div>

            <div className="subtotal__main">
                <p className="subtotal__priceDetails">
                      <RenderSubtotal />                    
                </p>
                <div>
                    <input type="checkbox" />
                    <small> This order contains a gift. </small>
                </div>
                
            </div>

            <button className="subtotal__proceedButton"> Proceed to Buy</button>
            
        </div>
    )
}

export default Subtotal
