import { useState } from "react";
import { Home, Info, Phone, Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Home className="h-8 w-8 text-primary-light dark:text-primary-dark" />
              <span className="ml-2 font-bold text-gray-900 dark:text-white hidden sm:block">
                logo
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light transition-colors duration-200"
            >
              <Home size={20} />
              <span className="font-medium">Home</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light transition-colors duration-200"
            >
              <Info size={20} />
              <span className="font-medium">About</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light transition-colors duration-200"
            >
              <Phone size={20} />
              <span className="font-medium">Contact</span>
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-56 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 shadow-lg">
          <Link
            to="/"
            className="flex items-center space-x-2 p-3 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            <Home size={20} />
            <span className="font-medium">Home</span>
          </Link>
          <Link
            to="/about"
            className="flex items-center space-x-2 p-3 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            <Info size={20} />
            <span className="font-medium">About</span>
          </Link>
          <Link
            to="/contact"
            className="flex items-center space-x-2 p-3 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            <Phone size={20} />
            <span className="font-medium">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
