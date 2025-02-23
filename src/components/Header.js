import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const { loggedInUser } = useContext(UserContext);
  console.log("data", loggedInUser);

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render (just once)
  // if dependency array is [btnName] => called everytime btnName is updated

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-purple-500 text-white">
      <div className=" flex items-center pl-1">
        <img className="w-20 h-14 rounded-lg" src={LOGO_URL} alt="logo" />
      </div>
      <div>
        <ul className="flex items-center gap-5 mr-2">
          <li className="p-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>

          <li className="hover:bg-red-400 p-5">
            <Link to="/"> Home</Link>
          </li>
          <li className="hover:bg-red-400 p-5">
            <Link to="/about"> About Us</Link>
          </li>
          <li className="hover:bg-red-400 p-5">
            {" "}
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li className="hover:bg-red-400 p-5">
            <Link to="/grocery"> Grocery</Link>
          </li>
          <li className="hover:bg-red-400 p-5">Cart</li>
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
