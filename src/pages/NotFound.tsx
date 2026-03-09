import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center rounded-2xl border border-slate-200/80 bg-white/90 p-10 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/70">
        <h1 className="text-5xl font-extrabold mb-4">404</h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 mb-4">Oops! Page not found</p>
        <a href="/" className="text-primary hover:underline font-semibold">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
