import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import RestaurantMenu from './Components/RestaurantMenu';
import Login from './Components/Login';
import Shimmer from './Components/Shimmer';
// import Grocery from './Components/Grocery';

const Grocery = lazy(() => import('./Components/Grocery'));

// i can use lazy loading to make distribute my code into diffrent chunks

// Chunking
// Code splitting
// Dynamic binding
// Lazy loading
// Demand loading
// dynamic import

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
      <Outlet />
      {/**
    
      <Body />
    */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: '/restaurant/:resId', element: <RestaurantMenu /> },
      { path: '/login', element: <Login /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
