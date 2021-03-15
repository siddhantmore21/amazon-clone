import React from 'react'
import './RenderCartItem.css'
import { useStateValue } from './StateProvider';

function RenderCartItem({cartItem}) {
    const [{cart}, dispatch] = useStateValue();
    const removeFromCart = () => {

        dispatch({
            type: 'REMOVE_FROM_CART',
            id: cartItem.id

        })

    }
    
    return (
        <div className="renderCartItem">
            <img src={cartItem.image} className="cartItem__image"/>

            <div className="cartItem__details">
                <p className="cartItem__title">{cartItem.title}</p>
                <p className="inStockStatus">In stock</p>
                <button onClick={removeFromCart} className="removeCartItem__button">Remove from Cart</button>
            </div>

            <div className="cartItem__price">
                <strong>
                {new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                    }).format(cartItem.price)}
                </strong>
            </div>
            
        </div>
    )
}

export default RenderCartItem
