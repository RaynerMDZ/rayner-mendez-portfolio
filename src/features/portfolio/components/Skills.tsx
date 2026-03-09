import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Spring Boot", "Angular", "Node.js", "Express.js", "JPA/Hibernate", "Tailwind.css"],
  },
  {
    title: "Databases & Storage",
    skills: ["Oracle", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Google Cloud Platform", "Docker", "OpenShift", "Lightspeed", "Harness"],
  },
  {
    title: "Message Queues & Streaming",
    skills: ["Apache Kafka", "RabbitMQ"],
  },
  {
    title: "Monitoring & Observability",
    skills: ["Prometheus", "Grafana", "ELK Stack"],
  },
  {
    title: "Architecture & Patterns",
    skills: ["Microservices", "Event-Driven", "Domain-Driven Design", "REST APIs", "GraphQL"],
  },
  {
    title: "Testing & Quality",
    skills: [
      "JUnit",
      "Mockito",
      "Integration Testing",
      "Load Testing",
      "TDD",
      "Regression Testing",
      "Code Coverage",
      "Code Review",
      "Continuous Integration",
      "Continuous Deployment",
      "Continuous Monitoring",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white/60 dark:bg-slate-900/30">
      <div className="section-shell">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary mb-4">
            Technical Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Modern backend and cloud engineering toolkit.
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <Card key={category.title} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="cursor-default hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-slate-500 dark:text-slate-400">
          Always learning and staying up-to-date with practical tools, patterns, and
          production-ready practices.
        </p>
      </div>
    </section>
  );
};

export default Skills;
