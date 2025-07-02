import { MdLocalLibrary } from "react-icons/md";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto bg-green-100 p-10 pb-0">
      <div className="flex justify-between">
        {/* logo */}
        <Link to="/" className="flex items-center gap-1">
          <span className="text-green-500">
            <MdLocalLibrary size={24} />
          </span>
          <h1 className="font-medium text-lg">Library Management</h1>
        </Link>
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
      </div>
      <p className="text-center mt-8">
        Footer &copy; {new Date().getFullYear()} Library Management System
      </p>
      <br />
    </div>
  );
};

export default Footer;
