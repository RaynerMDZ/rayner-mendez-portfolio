import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/profile-picture.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 gradient-tech opacity-50"></div>
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border border-tech-accent/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-tech-accent/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-tech-accent/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 border border-tech-accent/25 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-tech-accent/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-tech-accent/50 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-tech-accent/30 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      {/* Additional background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-1/4 w-40 h-40 bg-gradient-to-br from-tech-accent/20 to-transparent rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-10 left-1/4 w-60 h-60 bg-gradient-to-tl from-tech-accent/15 to-transparent rounded-full blur-2xl animate-float" style={{animationDelay: '6s'}}></div>
        <div className="absolute top-1/2 right-10 w-32 h-32 bg-gradient-to-l from-tech-accent/25 to-transparent rounded-full blur-lg animate-float" style={{animationDelay: '2.5s'}}></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(hsl(var(--tech-accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--tech-accent)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="space-y-8 animate-fadeInUp">
          {/* Profile Picture */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-tech animate-glow">
                <img 
                  src={profileImage} 
                  alt="Rayner Mendez - Backend Engineer"
                  className="w-full h-full object-cover hover-lift"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-tech-accent/20 to-transparent"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-tech-accent bg-clip-text text-transparent">
              Rayner Mendez
            </h1>
            <div className="relative inline-block">
              <p className="text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-tech-muted via-tech-accent to-tech-muted animate-fadeInUp tracking-wide">
                Software Engineer <span className="text-tech-accent">|</span> Cloud Engineer <span className="text-tech-accent">|</span> LLMs
              </p>
              <div className="absolute inset-0 blur-sm bg-gradient-to-r from-tech-accent/20 via-tech-accent/30 to-tech-accent/20 opacity-50 animate-glow -z-10"></div>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Talented software engineer with strong experience building and maintaining systems in high-pressure environments.
              Skilled in problem-solving and teamwork, with a passion for continuous learning and staying current with industry trends.
              Committed to delivering innovative solutions and adding value to any team.
          </p>
          
          <div className="flex items-center justify-center space-x-8 pt-8">
            <a
              href="mailto:raynermendezg@gmail.com"
              className="flex items-center space-x-2 text-muted-foreground hover:text-tech-accent transition-all duration-300 hover-lift group"
            >
              <Mail size={20} className="group-hover:animate-float" />
              <span className="font-medium">Email</span>
            </a>
            <a
              href="https://github.com/raynermdz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-tech-accent transition-all duration-300 hover-lift group"
            >
              <Github size={20} className="group-hover:animate-float" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/raynermendez"
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