import { useEffect, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render (just once)
  // if dependency array is [btnName] => called everytime btnName is updated

  const onlineStatus = useOnlineStatus();
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} alt='logo' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Online Status : {onlineStatus ? '✅' : '🔴'}</li>
          <li>
            {' '}
            <Link to='/'> Home</Link>
          </li>
          <li>
            <Link to='/about'> About Us</Link>
          </li>
          <li>
            {' '}
            <Link to='/contact'> Contact Us</Link>
          </li>
          <li>
            <Link to='/grocery'> Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className='login'
            onClick={() => {
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
