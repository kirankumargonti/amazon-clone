import React from 'react';
import CurrencyFormat from 'react-currency-format';
import {useAmazonData} from '../Context/context';
import { getBasketTotal } from '../Context/reducer';


function Subtotal() {
  const [{basket}] = useAmazonData();
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ( {basket.length} items ) : <strong>{`${value}`}</strong>
            </p>
            <small className='subtotal_gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
            <button>Proceed to checkout</button>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
      />
    </div>
  );
}

export default Subtotal;
