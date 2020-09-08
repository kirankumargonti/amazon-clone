import React from 'react';
import {useAmazonData} from '../Context/context';
import {Link} from 'react-router-dom';
import {ShoppingBasket} from '@material-ui/icons';
import CheckoutProduct from '../Components/CheckoutProduct';
import Subtotal from '../Components/Subtotal';

function Checkout() {
  const [{basket}] = useAmazonData();
  return (
    <div>
      {basket?.length > 0 ? (
        <div className='checkout'>
          <div className='checkout_left'>
            <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/PDAYILM/v1/01.jpg' alt='' />
            <h2>Your shopping Basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
          <div className='checkout_right'>
            <Subtotal />
          </div>
        </div>
      ) : (
        <div className='checkout_empty'>
          <ShoppingBasket className='checkout_basket' fontSize='large' />
          <h2>Your Shopping Basket is Empty</h2>
          <p>
            You have no items in your basket. To buy one or more items, click
            "Add to basket" next to the item
          </p>
          <Link className='checkout_browse_more_button' to='/'>
            Browse Products
          </Link>
        </div>
      )}
    </div>
  );
}
export default Checkout;
