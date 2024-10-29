import { Home, Info, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8 items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-800 hover:text-blue-600"
            >
              <Home size={20} />
              <span className="font-medium">Home</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-2 text-gray-800 hover:text-blue-600"
            >
              <Info size={20} />
              <span className="font-medium">About</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center space-x-2 text-gray-800 hover:text-blue-600"
            >
              <Phone size={20} />
              <span className="font-medium">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
