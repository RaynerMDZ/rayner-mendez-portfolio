import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Distributed E-commerce Platform",
      description: "Microservices-based e-commerce platform handling 2M+ users with 99.9% uptime. Implemented event-driven architecture with CQRS pattern for optimal performance.",
      techDetails: [
        "Built 15+ microservices using Spring Boot and Docker",
        "Implemented event sourcing with Apache Kafka",
        "Designed scalable database architecture with read replicas",
        "Achieved sub-100ms API response times"
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "Docker", "Kubernetes", "AWS"],
      githubUrl: "https://github.com",
      liveUrl: null,
      metrics: "2M+ Users, 99.9% Uptime, <100ms Response Time"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-8">
          <div className="text-center">
            <div className="relative inline-block">
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <div className="absolute inset-0 blur-md bg-tech-accent/10 opacity-60 animate-glow -z-10 scale-110"></div>
            </div>
            <div className="w-16 h-0.5 bg-tech-accent mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="h-full flex flex-col hover-lift hover-glow transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-semibold group-hover:text-tech-accent transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex space-x-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-tech-accent transition-all duration-300 hover:scale-110"
                      >
                        <Github size={20} />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-tech-accent transition-all duration-300 hover:scale-110"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1 space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Technical Implementation:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {project.techDetails.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Metrics:</h4>
                    <p className="text-sm font-mono text-tech-accent">{project.metrics}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;