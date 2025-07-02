import { NavLink } from "react-router";
import { MdLocalLibrary } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto flex items-center justify-between bg-gray-100 p-4">
      {/* logo */}
      <div className="flex items-center gap-1">
        <span className="text-green-500">
          <MdLocalLibrary size={24} />
        </span>
        <h1 className="font-medium text-lg">Library Management</h1>
      </div>
      {/* links */}
      <ul className="mr-8 flex justify-between items-center gap-8">
        <li>
          <NavLink to="/books">
            {({ isActive }) => (
              <span
                className={
                  isActive
                    ? "text-green-500 font-medium hover:text-green-500 transition-all duration-200"
                    : "font-medium hover:text-green-500 transition-all duration-200"
                }
              >
                All Books
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/create-book">
            {({ isActive }) => (
              <span
                className={
                  isActive
                    ? "text-green-500 font-medium hover:text-green-500 transition-all duration-200"
                    : "font-medium hover:text-green-500 transition-all duration-200"
                }
              >
                Add Book
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/borrow-summary">
            {({ isActive }) => (
              <span
                className={
                  isActive
                    ? "text-green-500 font-medium hover:text-green-500 transition-all duration-200"
                    : "font-medium hover:text-green-500 transition-all duration-200"
                }
              >
                Borrow Summary
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
