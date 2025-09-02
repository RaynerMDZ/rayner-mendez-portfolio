import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/profile-picture.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Anime-inspired particle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-tech-accent/5 via-transparent to-tech-accent/10"></div>
      
      {/* Floating anime particles */}
      <div className="absolute inset-0">
        {/* Large glowing orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-tech-accent/20 to-purple-400/20 rounded-full blur-xl animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-cyan-400/10 to-tech-accent/10 rounded-full blur-2xl animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-r from-pink-400/15 to-tech-accent/15 rounded-full blur-lg animate-[float_8s_ease-in-out_infinite_reverse]"></div>
        
        {/* Anime sparkles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-tech-accent rounded-full animate-[ping_2s_ease-in-out_infinite] shadow-[0_0_10px_hsl(var(--tech-accent))]"></div>
        <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-[ping_3s_ease-in-out_infinite_1s] shadow-[0_0_8px_cyan]"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-[ping_2.5s_ease-in-out_infinite_0.5s] shadow-[0_0_6px_pink]"></div>
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-purple-400 rounded-full animate-[ping_4s_ease-in-out_infinite_2s] shadow-[0_0_8px_purple]"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-[ping_3.5s_ease-in-out_infinite_1.5s] shadow-[0_0_10px_yellow]"></div>
        
        {/* Geometric anime elements */}
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-r from-tech-accent/20 to-transparent rotate-45 animate-[spin_20s_linear_infinite] before:content-[''] before:absolute before:inset-1 before:bg-gradient-to-r before:from-cyan-400/30 before:to-transparent before:rotate-90"></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rotate-12 animate-[float_7s_ease-in-out_infinite] shadow-[0_0_15px_rgba(255,20,147,0.3)]"></div>
        <div className="absolute top-1/6 right-1/2 w-4 h-4 bg-gradient-to-r from-tech-accent/25 to-cyan-400/25 rotate-45 animate-[bounce_3s_ease-in-out_infinite] shadow-[0_0_12px_hsl(var(--tech-accent))]"></div>
      </div>
      
      {/* Anime-style glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tech-accent/5 to-transparent animate-[pulse_8s_ease-in-out_infinite]"></div>
      
      {/* Subtle grid pattern with glow */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--tech-accent))_1px,_transparent_0)] bg-[size:24px_24px]"></div>
      
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