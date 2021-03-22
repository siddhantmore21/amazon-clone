import moment from 'moment'
import React from 'react'
import './Order.css'
import RenderCartItem from './RenderCartItem'

function Order({order}) {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id"><small>{order.id}</small></p>
            {order.data.cart?.map((item) => 
            {
                return <RenderCartItem cartItem={item}/>
            })}
        </div>
    )
}

export default Order
