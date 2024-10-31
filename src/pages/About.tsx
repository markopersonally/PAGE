import { motion } from "framer-motion";
import { Users, Zap, Shield } from "lucide-react";

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About Us
        </h1>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We're a team of passionate developers and designers creating modern
            web applications that make a difference. Our focus is on delivering
            high-quality, performant, and user-friendly solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
          >
            <Users className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Team Collaboration
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Working together to create exceptional experiences for our
              clients.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
          >
            <Zap className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Fast Performance
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Optimized for speed and efficiency in every aspect of development.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
          >
            <Shield className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Secure Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Built with security best practices and modern standards.
            </p>
          </motion.div>
        </div>

        <div className="rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=2070&q=80"
            alt="Team collaboration"
            className="w-full h-[300px] object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default About;
