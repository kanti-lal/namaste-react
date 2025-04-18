import React, { Suspense, useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore, { persistor } from "./utils/appStore";
import Cart from "./components/Cart";
import { PersistGate } from "redux-persist/integration/react";
import Test from "./components/Test";
const Grocery = React.lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    // auth logic here

    const data = {
      name: "Kranti",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor} />
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <UserContext.Provider value={{ loggedInUser: "Kantilal" }}>
            <Header />
          </UserContext.Provider>
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
      { path: "/login", element: <Login /> },
      { path: "/cart", element: <Cart /> },
      { path: "/test", element: <Test /> },
    ],
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
