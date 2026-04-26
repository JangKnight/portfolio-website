import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { User, Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/github", label: "GitHub" },
  { to: "/chat", label: "Chat" },
  { to: "/spaces", label: "Spaces" },
  { to: "/arcade", label: "Arcade" },
  { to: "/projects", label: "More Projects" },
];

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu whenever route changes
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav className="bg-gray-800 text-white">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4 p-4">
          {/* Brand */}
          <Link
            to="/"
            onClick={handleLinkClick}
            className="flex items-center gap-1"
          >
            <User className="w-8 h-8 text-purple-600" />
            <span className="text-xl font-semibold">Anthony Henry</span>
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

          {/* Desktop API Docs button */}
          <div className="hidden md:block w-40">
            <Link
              to="https://api.anthonysjhenry.dev/docs/"
              className="rounded-2xl bg-cyan-500 px-6 py-2 font-semibold text-slate-950 transition-colors hover:bg-cyan-400 flex justify-center"
            >
              API Docs
            </Link>
          </div>

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
            <Link
              to="https://api.anthonysjhenry.dev/docs/"
              onClick={handleLinkClick}
              className="mt-2 rounded-2xl bg-cyan-500 px-6 py-2 font-semibold text-slate-950 text-center transition-colors hover:bg-cyan-400"
            >
              API Docs
            </Link>
          </div>
        )}
      </nav>
      <hr />
    </>
  );
}

export default Nav;
