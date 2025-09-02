const About = () => {
  return (
    <section id="about" className="py-20 bg-section">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="w-16 h-0.5 bg-tech-accent mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              I'm Rayner Mendez, a Backend Engineer with over 5 years of experience designing and implementing 
              robust, scalable systems. My passion lies in solving complex technical challenges 
              and building software that can handle millions of users while maintaining clean, 
              maintainable code.
            </p>
            
            <p className="text-muted-foreground">
              Throughout my career, I've worked across the entire backend stack—from designing 
              RESTful APIs and microservices architectures to optimizing database performance 
              and implementing CI/CD pipelines. I believe in writing code that not only works 
              today but can be easily understood and extended by future developers.
            </p>
            
            <p className="text-muted-foreground">
              When I'm not coding, you'll find me contributing to open-source projects, 
              reading about emerging technologies, or mentoring junior developers. I'm particularly 
              interested in distributed systems, performance optimization, and the evolving 
              landscape of cloud-native technologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="text-center group hover-lift transition-all duration-300">
              <div className="text-2xl font-bold text-tech-accent group-hover:scale-110 transition-transform">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center group hover-lift transition-all duration-300">
              <div className="text-2xl font-bold text-tech-accent group-hover:scale-110 transition-transform">20+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center group hover-lift transition-all duration-300">
              <div className="text-2xl font-bold text-tech-accent group-hover:scale-110 transition-transform">99.9%</div>
              <div className="text-muted-foreground">System Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;