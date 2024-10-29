"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Moon,
  Sun,
  Menu,
  X,
  Home,
  Info,
  DollarSign,
  MoreHorizontal,
} from "lucide-react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <header className="fixed w-full top-0 z-50 bg-white dark:bg-black shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button onClick={toggleMenu} className="lg:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <ul
              className={`lg:flex space-x-4 ${
                isMenuOpen
                  ? "block absolute top-16 left-0 w-full bg-white dark:bg-black p-4"
                  : "hidden"
              }`}
            >
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="#home" className="flex items-center">
                  <Home size={18} className="mr-1" /> Home
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="#about" className="flex items-center">
                  <Info size={18} className="mr-1" /> About
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="#tariff" className="flex items-center">
                  <DollarSign size={18} className="mr-1" /> Tariff
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="#more" className="flex items-center">
                  <MoreHorizontal size={18} className="mr-1" /> More
                </a>
              </motion.li>
            </ul>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold"
          >
            Limiti
          </motion.div>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="h-screen flex items-center justify-center relative overflow-hidden"
        >
          <img src="" alt="" />
          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold mb-4"
            >
              Welcome to Limiti
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8"
            >
              Pushing the boundaries of what's possible
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 dark:hover:bg-opacity-80 transition-colors duration-200"
            >
              Get Started
            </motion.button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Limiti. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
