import React from 'react'
import { useAmazonData } from '../Context/context';

function CheckoutProduct({ id, title, image, rating, price }) {
    const [{basket}, dispatch] = useAmazonData();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
    return (
            <div className="checkout_product">
            <img src={image} alt=""/>
          <div className="checkout_product_info">
                <p className="checkout_product_title"> {title} </p>
                <p className="checkout_product_price">
                    <small>&#8377; </small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout_product_rating">
                    {
                        Array(rating).fill().map( (_) => <p>&#9733;</p>  )
                    }
                </div>
           
            <button onClick={
                removeFromBasket
            }>Remove From basket</button>
        </div>
        </div>
    )
}

export default CheckoutProduct
