import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left - Website Name */}
        <Link to="/" className="text-2xl font-semibold tracking-wide">
          SCMC
        </Link>

        {/* Center - Navigation Links (Hidden on mobile) */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {[
            "Home",
            "About Us",
            "Students",
            "Teachers",
            "Admissions",
            "Contact",
          ].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                className="hover:text-blue-400 transition duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right - Dark Mode & Login Button */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl transition duration-300"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Login Button */}
          <Link
            to="/login"
            className="hidden md:block bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg font-medium transition duration-300"
          >
            Login
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 dark:bg-gray-200 py-4">
          <ul className="flex flex-col items-center space-y-4 text-lg">
            {[
              "Home",
              "About Us",
              "Students",
              "Teachers",
              "Admissions",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                  className="hover:text-blue-400 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
