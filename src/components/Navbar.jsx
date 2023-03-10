import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

function Navbar() {
  const { user } = useAuthContext();
  const { logout } = useLogout()
  return (
    <div className="bg-green-300 p-5 mb-10">
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        <Link to="/">
          <h1 className="font-bold text-2xl">myMoney</h1>
        </Link>

        <ul className="flex items-center gap-5 text-base">
          {!user && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sing up</Link>
              </li>
            </>
          )}
          {user && (
            <>
            <p>hello, {user.displayName}</p>
            <button onClick={logout} className="border-2 px-2 py-1 rounded border-red-400 hover:bg-red-400 hover:text-white text-base">
              Logout
            </button>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
