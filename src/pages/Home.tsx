import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to Modern App
        </h1>

        <div className="relative rounded-2xl overflow-hidden mb-8">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2070&q=80"
            alt="Modern workspace with laptop"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Build Something Amazing
            </h2>
            <p className="text-gray-200 max-w-lg">
              Create stunning web applications with modern technologies and best
              practices.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Custom Design and Development:
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our team designs websites tailored to your unique vision,
              reflecting your brand’s personality and goals.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              SEO-Friendly Architecture:
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We structure each site to be search engine-friendly, making it
              easy for your audience to find you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              Get in touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Mobile Optimization:
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Every website we build is responsive, ensuring a smooth experience
              on any device, whether desktop, tablet, or mobile.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Performance Optimization:
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Speed is crucial; we optimize loading times to keep your visitors
              engaged and improve your site’s SEO ranking.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              User-Friendly Navigation:
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our websites are easy to navigate, ensuring your visitors can find
              information quickly and engage with your content effortlessly.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Cutting-Edge Technology:
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We use modern tools like React, Tailwind CSS, and Vite, ensuring
              each site is built for performance, flexibility, and future
              scalability.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
