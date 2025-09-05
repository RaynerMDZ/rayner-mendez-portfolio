import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Spring Boot", "Angular", "Node.js", "Express.js", "JPA/Hibernate", "Tailwind.css"]
    },
    {
      title: "Databases & Storage",
      skills: ["Oracle", "PostgreSQL", "MySQL", "MongoDB", "Redis"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["Google Cloud Platform", "Docker", "OpenShift", "Lightspeed", "Harness"]
    },
    {
      title: "Message Queues & Streaming",
      skills: ["Apache Kafka", "RabbitMQ"]
    },
    {
      title: "Monitoring & Observability",
      skills: ["Prometheus", "Grafana", "ELK Stack"]
    },
    {
      title: "Architecture & Patterns",
      skills: ["Microservices", "Event-Driven", "Domain-Driven Design", "REST APIs", "GraphQL"]
    },
    {
      title: "Testing & Quality",
      skills: ["JUnit", "Mockito", "Integration Testing", "Load Testing", "TDD", "Regression Testing", "Code Coverage", "Code Review", "Continuous Integration", "Continuous Deployment", "Continuous Monitoring"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-8">
          <div className="text-center">
            <div className="relative inline-block">
              <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
              <div className="absolute inset-0 blur-md bg-tech-accent/15 opacity-60 animate-glow -z-10 scale-110"></div>
            </div>
            <div className="w-16 h-0.5 bg-tech-accent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full hover-lift transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-tech-accent group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-sm hover:bg-tech-accent hover:text-white transition-all duration-300 hover:scale-105 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center pt-8">
            <p className="text-muted-foreground">
              Always learning and staying up-to-date with the latest technologies and best practices in backend development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;