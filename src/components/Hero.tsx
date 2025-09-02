import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/profile-picture.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-tech opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="space-y-8 animate-fadeInUp">
          {/* Profile Picture */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-tech animate-glow">
                <img 
                  src={profileImage} 
                  alt="Alex Richardson - Backend Engineer" 
                  className="w-full h-full object-cover hover-lift"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-tech-accent/20 to-transparent"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-tech-accent bg-clip-text text-transparent">
              Alex Richardson
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