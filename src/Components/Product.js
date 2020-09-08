import React from 'react'
import { useAmazonData } from '../Context/context'

function Product({ id, title, image, rating, price }) {
    const [{basket}, dispatch] = useAmazonData();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                price,
                image,
                rating
            },
        });
    };
    return (
        <div className="product">
            <div className="product_info">
                <p> {title} </p>
                <p className="product_price">
                    <small>&#8377; </small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating).fill().map( (_) => <p>&#9733;</p>  )
                    }
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
