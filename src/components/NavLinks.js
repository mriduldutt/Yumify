import { useEffect, useState, useContext } from "react";
import { LOGO_URL, NAV_LINK_CROSS_URL, NAV_LINK_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const NavLinks = () => {
  const [btnNameReact, setBtnNameReact] = useState("Sign-Up / Login");
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <li className="m-4 p-5 hover:text-orange-600">
        <Link to="/">Home</Link>
      </li>
      <li className="m-4 p-5 hover:text-orange-600">
        <Link to="/about">About us</Link>
      </li>
      <li className="m-4 p-5 hover:text-orange-600 ">
        <Link to="/grocery">Grocery</Link>
      </li>
      <li className="m-4 p-5 hover:text-orange-600">
        <Link to="/cart">
          Cart 🛒 ({cartItems.length === 0 ? ("") : (cartItems.length)})
        </Link>
      </li>

      <li className="m-4 p-6 text-sm">Status: {onlineStatus ? "✅" : "🔴"}</li>
      {/* <li className="px-4 ">
            LoggedIn User : {loggedInUser}
        </li> */}

      <button
        className="loginbtn"
        onClick={() => {
          btnNameReact === "Log-Out"
            ? setBtnNameReact("Sign-Up / Login")
            : setBtnNameReact("Log-Out");
        }}
      >
        {btnNameReact}
      </button>
    </>
  );
};

export default NavLinks;
