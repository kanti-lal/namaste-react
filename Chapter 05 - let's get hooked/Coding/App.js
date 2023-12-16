import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';

/**
 * Header
 *   -- logo
 *   -- Nav-items
 * Body
 *   -- search
 *   --RestaurentContainer
 *      -RestaurentCard
 *         -img
 *         -name of rest, star rating, cuisine, delivery time
 * Footer
 *   --Copyright
 *   --links
 *   --Address
 *   --contact
 */

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
