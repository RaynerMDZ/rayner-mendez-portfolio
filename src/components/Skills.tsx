import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "Go", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Spring Boot", "Django", "Flask", "Node.js", "Express.js", "Hibernate"]
    },
    {
      title: "Databases & Storage",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "InfluxDB"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitLab CI"]
    },
    {
      title: "Message Queues & Streaming",
      skills: ["Apache Kafka", "RabbitMQ", "Apache Pulsar", "AWS SQS", "Redis Pub/Sub"]
    },
    {
      title: "Monitoring & Observability",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Jaeger", "DataDog", "New Relic"]
    },
    {
      title: "Architecture & Patterns",
      skills: ["Microservices", "Event-Driven", "CQRS", "Domain-Driven Design", "REST APIs", "GraphQL"]
    },
    {
      title: "Testing & Quality",
      skills: ["JUnit", "Mockito", "pytest", "Integration Testing", "Load Testing", "TDD"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
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