import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Alex Richardson
            </h1>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="text-sm">Backend Engineer</Badge>
              <Badge variant="outline" className="text-sm">System Architect</Badge>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable, high-performance backend systems. 
            I craft clean, maintainable code and architect solutions that power modern applications.
          </p>
          
          <div className="flex items-center justify-center space-x-6 pt-8">
            <a
              href="mailto:alex@example.com"
              className="flex items-center space-x-2 text-muted-foreground hover:text-tech-accent transition-colors"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-tech-accent transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-tech-accent transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;