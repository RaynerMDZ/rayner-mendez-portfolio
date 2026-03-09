import { getBlogUrl } from "@/lib/site";

const blogUrl = getBlogUrl();

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/raynermdz" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/raynermendez/" },
  { label: "Email", href: "mailto:raynermendezg@gmail.com" },
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-background py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="section-shell">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-8 w-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold italic">
                R
              </div>
              <span className="text-lg font-bold tracking-tight">Rayner Mendez</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Software engineer building resilient systems, cloud-native platforms, and
              AI-powered products with practical execution.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-14">
            <div>
              <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                Navigation
              </h4>
              <ul className="space-y-3 text-slate-500 dark:text-slate-400">
                {footerLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-primary transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={blogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                Social
              </h4>
              <ul className="space-y-3 text-slate-500 dark:text-slate-400">
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                Focus
              </h4>
              <ul className="space-y-3 text-slate-500 dark:text-slate-400">
                <li>Distributed systems</li>
                <li>Cloud engineering</li>
                <li>AI and LLM products</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-100 pt-8 text-sm text-slate-400 dark:border-slate-800 dark:text-slate-500 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Rayner Mendez. All rights reserved.</p>
          <p>Designed with a consistent blog + portfolio visual system.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
