import React from 'react';
import {Link} from 'react-router-dom';
import {Search, ShoppingBasket} from '@material-ui/icons';
import { useAmazonData } from '../Context/context';
import {auth} from '../firebase';

function Navbar() {
  const [{basket, user}] = useAmazonData();

  const signInAndSignOut = () => {
    if(user) {
      auth.signOut();
    }
  }
  return (
    <nav>
      <Link to='/'>
        <img
          src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt=''
          className='logo_img'
        />
      </Link>
      <div className='nav_search'>
        <input type='text' />
        <Search className='search_icon' />
      </div>
      <div className='nav_links'>
        <Link to={!user && '/login'} className='nav_link'>
          <div className='nav_option' onClick={signInAndSignOut}>
            <span className='nav_option_span_one'>Hello, {user?.email}</span>
            <span className='nav_option_span_two'> {!user? "Sign In" : "Sign Out"}</span>
          </div>
        </Link>

        <Link className='nav_link'>
          <div className='nav_option'>
            <span className='nav_option_span_one'>Returns</span>
            <span className='nav_option_span_two'>& Orders</span>
          </div>
        </Link>

        <Link className='nav_link'>
          <div className='nav_option'>
            <span className='nav_option_span_one'>Your</span>
            <span className='nav_option_span_two'>Prime</span>
          </div>
        </Link>

        <Link to='checkout' className='nav_link'>
          <div className='nav_option_basket'>
            <ShoppingBasket />
            <span className='basket_span'>
              {
                basket?.length
              }
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
