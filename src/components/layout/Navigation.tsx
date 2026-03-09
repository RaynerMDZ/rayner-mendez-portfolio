import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { getBlogUrl } from "@/lib/site";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const blogUrl = getBlogUrl();

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-slate-700/70 dark:bg-background/80">
      <div className="section-shell h-20 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2"
          aria-label="Go to hero section"
        >
          <div className="h-10 w-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold italic">
            R
          </div>
          <span className="text-xl font-bold tracking-tight">
            Rayner Mendez
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-5">
          <nav className="flex items-center gap-7">
            {sections.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary"
              >
                {item.label}
              </button>
            ))}
            <a
              href={blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary"
            >
              Blog
            </a>
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            className="h-11 w-11 rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className="flex items-center justify-center">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </span>
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="h-11 w-11 rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className="flex items-center justify-center">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="h-11 w-11 rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className="flex items-center justify-center">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden border-t border-slate-200/60 bg-white px-6 py-4 dark:border-slate-700/70 dark:bg-background">
          <div className="max-w-7xl mx-auto space-y-2">
            {sections.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  scrollToSection(item.id);
                  setMobileOpen(false);
                }}
                className="min-h-11 w-full rounded-lg px-4 py-2 text-left text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-primary dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-primary"
              >
                {item.label}
              </button>
            ))}
            <a
              href={blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 w-full items-center rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-primary dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-primary"
            >
              Blog
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
