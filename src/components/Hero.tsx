import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/profile-picture.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Modern animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-tech-accent/5 via-transparent to-tech-accent/10 animate-pulse"></div>
      
      {/* Geometric elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-tech-accent/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-tech-accent/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-tech-accent/10 to-transparent rounded-lg rotate-45 animate-glow"></div>
      <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-tech-accent/15 rounded-lg rotate-12 animate-float"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--tech-accent))_1px,_transparent_0)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="space-y-8 animate-fadeInUp">
          {/* Profile Picture */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-tech animate-glow">
                <img 
                  src={profileImage} 
                  alt="Rayner Mendezl - Backend Engineer" 
                  className="w-full h-full object-cover hover-lift"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-tech-accent/20 to-transparent"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-tech-accent bg-clip-text text-transparent">
              Rayner Mendezl
            </h1>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="text-sm hover-glow px-4 py-2">
                Backend Engineer
              </Badge>
              <Badge variant="outline" className="text-sm hover-glow px-4 py-2">
                System Architect
              </Badge>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable, high-performance backend systems. 
            I craft clean, maintainable code and architect solutions that power modern applications.
          </p>
          
          <div className="flex items-center justify-center space-x-8 pt-8">
            <a
              href="mailto:alex@example.com"
              className="flex items-center space-x-2 text-muted-foreground hover:text-tech-accent transition-all duration-300 hover-lift group"
            >
              <Mail size={20} className="group-hover:animate-float" />
              <span className="font-medium">Email</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-tech-accent transition-all duration-300 hover-lift group"
            >
              <Github size={20} className="group-hover:animate-float" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-tech-accent transition-all duration-300 hover-lift group"
            >
              <Linkedin size={20} className="group-hover:animate-float" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;