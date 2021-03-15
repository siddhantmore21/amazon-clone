import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import {useStateValue} from './StateProvider'

function Product({items}) {

    const [{cart}, dispatch] = useStateValue();

   

    const addToCart = () => {
        //dispatch item into data layer
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: items.id,
                title: items.title,
                image: items.image,
                price: items.price, 
                rating: items.rating, 
            }
        })
    }
    return (
        <div className="product">
            <img alt="product" src={items.image}/>
            <div className="product__info">
                <p className="product__title">{items.title}</p>
                <div className = "product__rating">

                    {Array(items.rating).fill().map((_, i) => (
                        <StarIcon className="star" fontSize="small" />
                    ))}

                    {Array(5 - items.rating).fill().map((_, i) => (
                        <StarOutlineIcon className="star" fontSize="small" />
                    ))}
                    
                   
                   
                </div>
                <p className="product__price">
                    
                    <strong>{new Intl.NumberFormat('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            }).format(items.price)}
                    </strong>
                </p>
               
            </div>

           

            <button onClick={addToCart}>Add To Cart</button>

            
            
        </div>
    )
}

export default Product
