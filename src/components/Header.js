import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render (just once)
  // if dependency array is [btnName] => called everytime btnName is updated

  const onlineStatus = useOnlineStatus();

  // subscribing the store to using selectoe
  const cartItems = useSelector((store) => store.cart.items);
  console.log("🚀cartItems:", cartItems);

  return (
    <div className="flex justify-between bg-purple-500 text-white">
      <div className=" flex items-center pl-1">
        <img className="w-20 h-14 rounded-lg" src={LOGO_URL} alt="logo" />
      </div>
      <div>
        <ul className="flex items-center gap-5 mr-2">
          <li className="p-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>

          <Link to="/">
            <li className="hover:bg-red-400 p-5">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:bg-red-400 p-5">About Us</li>
          </Link>
          <Link to="/contact">
            <li className="hover:bg-red-400 p-5">Contact Us</li>
          </Link>
          <Link to="/grocery">
            <li className="hover:bg-red-400 p-5">Grocery</li>
          </Link>
          <Link to="/cart">
            <li className="hover:bg-red-400 p-5 font-bold text-xl">
              Cart ({cartItems.length} items)
            </li>
          </Link>
          <button
            className="hover:bg-red-400 p-5"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
