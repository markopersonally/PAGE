import { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <footer className="border-t border-gray-300 dark:border-gray-700 py-4 mt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-600 dark:text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Modern app. All rights reserved.
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link
            to="/home"
            className="text-gray-600 hover:text-gray-900 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-gray-900 dark:hover:text-white"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-gray-900 dark:hover:text-white"
          >
            Contact
          </Link>
          <Link
            to="/privacy"
            className="text-gray-600 hover:text-gray-900 dark:hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
