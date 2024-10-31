import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation.tsx";
import AppRoutes from "./components/AppRoutes.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen transition-colors duration-300 dark:bg-gray-900">
          <Navigation />
          <main className="container mx-auto px-4 py-8">
            <AnimatePresence mode="wait">
              <AppRoutes />
            </AnimatePresence>
          </main>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
