import React from "react";
import { FaClipboardList, FaSignInAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-16 border-b-4 flex justify-between">
      <header className="flex items-center px-4">
        <FaClipboardList size={30} />
        <span className="text-4xl">
          <Link to="/">Goals</Link>
        </span>
      </header>
      <main className="px-6 flex items-center">
        <ul className="flex items-center">
          <li className="px-3">
            <Link to="/login" className="flex items-center">
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
      </main>
    </nav>
  );
};

export default Navbar;
