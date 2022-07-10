import React from "react";
import {
  FaClipboardList,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <nav className="w-full h-16 border-b-4 flex justify-between">
      <header className="flex items-center px-4">
        <FaClipboardList size={30} />
        <span className="text-4xl">
          <Link to="/dashboard">Goals</Link>
        </span>
      </header>
      <main className="px-6 flex items-center">
        {user ? (
          <ul className="flex items-center">
            <li className="px-3">
              <button
                className="flex items-center bg-black text-white p-2 rounded-md"
                onClick={onLogout}
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        ) : (
          <ul className="flex items-center">
            <li className="px-3">
              <Link to="/" className="flex items-center">
                <FaSignInAlt />
                <span>Login</span>
              </Link>
            </li>

            <li>
              <Link to="/register" className="flex items-center">
                <FaUser />
                <span>Register</span>
              </Link>
            </li>
          </ul>
        )}
      </main>
    </nav>
  );
};

export default Navbar;
