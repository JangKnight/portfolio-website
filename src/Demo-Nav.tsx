import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { User, Menu, X } from "lucide-react";
import { useAuth } from "./Auth.tsx";

const navLinks = [
  { to: "/spaces/about", label: "About" },
  { to: "/spaces/notes", label: "Notes" },
  { to: "/spaces/blog", label: "Blog" },
];

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout, user } = useAuth();
  const displayName = user?.name ?? user?.username ?? user?.email ?? "Guest";
  const isAnthony = user?.role === "anthony";

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav className="bg-gray-800 text-white">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4 p-4">
          {/* Brand */}
          <Link
            to="/spaces"
            onClick={handleLinkClick}
            className="flex items-center gap-1"
          >
            <User className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-semibold">Your Space</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-4">
            {navLinks.map((link, index) => (
              <div key={link.to} className="flex items-center gap-4">
                {index > 0 ? <span className="text-sm">|</span> : null}
                <Link
                  to={link.to}
                  className={`text-sm hover:text-purple-400 ${
                    location.pathname === link.to ? "text-purple-400" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Desktop auth controls */}
          {isAuthenticated ? (
            <div className="hidden md:flex items-center space-x-4">
              {isAnthony ? (
                <Link
                  to="/admin/users"
                  className="text-sm hover:text-purple-400"
                >
                  Admin
                </Link>
              ) : null}
              <span className="text-sm text-gray-300">{displayName}</span>
              <button
                type="button"
                onClick={logout}
                className="px-4 py-2 bg-red-500 rounded hover:bg-red-600 text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/spaces/login"
                className="text-sm font-bold hover:text-purple-400"
              >
                Login
              </Link>
              <Link
                to="/spaces/signup"
                className="text-sm hover:text-purple-400"
              >
                Sign up
              </Link>
            </div>
          )}

          {/* Hamburger toggle (mobile only) */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-700 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden flex flex-col bg-gray-900 px-4 pb-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={handleLinkClick}
                className={`block py-2 px-3 rounded-md text-sm hover:bg-gray-700 hover:text-purple-400 transition-colors ${
                  location.pathname === link.to
                    ? "text-purple-400 bg-gray-700"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}

            <hr className="border-gray-700 my-2" />

            {isAuthenticated ? (
              <>
                {isAnthony ? (
                  <Link
                    to="/admin/users"
                    onClick={handleLinkClick}
                    className="block py-2 px-3 rounded-md text-sm hover:bg-gray-700 hover:text-purple-400 transition-colors"
                  >
                    Admin
                  </Link>
                ) : null}
                <span className="px-3 py-1 text-sm text-gray-400">
                  {displayName}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    logout();
                    handleLinkClick();
                  }}
                  className="mt-1 mx-3 px-4 py-2 bg-red-500 rounded hover:bg-red-600 text-sm text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/spaces/login"
                  onClick={handleLinkClick}
                  className="block py-2 px-3 rounded-md text-sm font-bold hover:bg-gray-700 hover:text-purple-400 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/spaces/signup"
                  onClick={handleLinkClick}
                  className="block py-2 px-3 rounded-md text-sm hover:bg-gray-700 hover:text-purple-400 transition-colors"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        )}
      </nav>
      <hr />
    </>
  );
}

export default Nav;
