const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 Rayner Mendez. Built with React, TypeScript, and Tailwind CSS.
          </div>
          
          <div className="text-sm text-muted-foreground">
            Designed for functionality, optimized for performance.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;