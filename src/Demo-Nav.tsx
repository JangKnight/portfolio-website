import { Link } from "react-router-dom";
import { User } from "lucide-react";

function Nav(props: { user?: string }) {
  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center gap-1">
          <User className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-semibold">{props.user || "Guest"}</span>
        </div>

        {!props.user ? (
          <div className="flex items-center space-x-4">
            <Link
              to="login"
              className="text-md font-bold hover:text-purple-400"
            >
              Login
            </Link>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-red-500 rounded hover:bg-red-600">
              Logout
            </button>
          </div>
        )}
      </nav>
      <hr />
    </>
  );
}

export default Nav;
