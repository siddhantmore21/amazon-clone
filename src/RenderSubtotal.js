import React from 'react'
import { useStateValue } from './StateProvider';

function RenderSubtotal() {
    const [{cart}, dispatch] = useStateValue();
        var totalPrice = 0;
        cart.map((item) => {
            totalPrice = totalPrice + item.price;
        })
        
        if(cart?.length >= 2){
            return (
                <p>
                    Subtotal ({cart?.length} items)
                    <strong className="subtotal__price">
                    {new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                    }).format(totalPrice)}
                    </strong>
                   
                </p>);
        }
        else{
            return (
            <p>
                Subtotal ({cart?.length} item)
                <strong className="subtotal__price">
                {new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                }).format(totalPrice)}
                </strong>
               
            </p>



        );

        }
    }
       
  

export default RenderSubtotal
