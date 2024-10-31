import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

function AppRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <Home />
          </motion.div>
        }
      />
      <Route
        path="/about"
        element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <About />
          </motion.div>
        }
      />
      <Route
        path="/contact"
        element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <Contact />
          </motion.div>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
