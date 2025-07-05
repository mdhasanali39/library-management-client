import { useState } from "react";
import { Link, NavLink } from "react-router";
import { MdLocalLibrary } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "All Books", to: "/books" },
    { name: "Add Book", to: "/create-book" },
    { name: "Borrow Summary", to: "/borrow-summary" },
  ];

  return (
    <nav className="bg-green-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <MdLocalLibrary className="text-green-500" size={24} />
          <h1 className="font-medium text-lg">Library Management</h1>
        </Link>

        {/* links for desktom */}
        <ul className="hidden md:flex items-center gap-8 mr-4">
          {navItems.map(({ name, to }) => (
            <li key={to}>
              <NavLink to={to}>
                {({ isActive }) => (
                  <span
                    className={`font-medium transition-all duration-200 hover:text-green-500 ${
                      isActive ? "text-green-500" : ""
                    }`}
                  >
                    {name}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* mobile menu icon for small device */}
        <button
          className="md:hidden text-green-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* menu for mobile */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pb-4">
          {navItems.map(({ name, to }) => (
            <li key={to}>
              <NavLink to={to} onClick={() => setIsOpen(false)}>
                {({ isActive }) => (
                  <span
                    className={`block font-medium transition-all duration-200 hover:text-green-500 ${
                      isActive ? "text-green-500" : ""
                    }`}
                  >
                    {name}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
