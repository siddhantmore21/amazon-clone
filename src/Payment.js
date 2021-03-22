import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import RenderCartItem from './RenderCartItem';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from './axios';
import { db } from './firebase';

function Payment() {
    const [{cart, user}, dispatch] = useStateValue();
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] =useState(false);
    const [processing, setProcessing] =useState(null);
    const [error, setError] =useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    var totalPrice = 0;
    cart.map((item) => {
        totalPrice = totalPrice + item.price;
    })
    const RenderOrderTotal = () => {

        
        
        
        
            return (
                <h3>
                    Order Total
                    <span className="subtotal__price">
                    {new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                    }).format(totalPrice)}
                    </span>
                   
                </h3>);
    }
        
    useEffect(() => {

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${totalPrice * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [cart])
      
    console.log('The Client Secret is >>> ', clientSecret)
    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card : elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {


            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                cart: cart,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
            }).then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_CART'
            })

            history.replace('/orders')
        })

    }

    const handleChange = event => {

        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    }

    return (
        <div className='payment'>
            <div className= 'payment__container'>
                <h1>
                    Checkout (
                        <Link to ='/checkout'>{cart?.length} items</Link>
                    )
                </h1>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3><LocationOnIcon />Deliver to</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>401 B, Red villa, </p>
                        <p>Andheri West.</p>
                    </div>
                </div>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {cart.map((item) => {
                            return <RenderCartItem cartItem={item}/>
                        })}
                       
                    </div>
                    
                </div>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Methods</h3>
                    </div>
                    <div className='payment__details'>

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment__priceContainer">
                            
                            <RenderOrderTotal />
                            <button disabled={processing || disabled ||succeeded}>
                                <span>{processing? <p>Processing...</p> : "Buy Now"}</span>
                            </button>

                            </div>
                            {error && <div>{error}</div>}
                        </form>
                        
                       
                    </div>
                    
                </div>
            </div>            
        </div>
    )
}

export default Payment
