import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Distributed E-commerce Platform",
    description:
      "Microservices-based e-commerce platform handling 2M+ users with 99.9% uptime. Implemented event-driven architecture with CQRS pattern for optimal performance.",
    techDetails: [
      "Built 15+ microservices using Spring Boot and Docker",
      "Implemented event sourcing with Apache Kafka",
      "Designed scalable database architecture with read replicas",
      "Achieved sub-100ms API response times",
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "Docker", "Kubernetes", "AWS"],
    githubUrl: "https://github.com",
    liveUrl: null,
    metrics: "2M+ Users, 99.9% Uptime, <100ms Response Time",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white/60 dark:bg-slate-900/30">
      <div className="section-shell">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary mb-4">
            Featured Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Product-grade solutions for high-scale and high-availability systems.
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="h-full hover:shadow-md group">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-primary transition-colors"
                      aria-label={`Open ${project.title} source code`}
                    >
                      <Github size={18} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-primary transition-colors"
                        aria-label={`Open ${project.title} live demo`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">
                    Technical Implementation
                  </h4>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    {project.techDetails.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-xs uppercase tracking-widest font-semibold text-primary mb-1">
                    Key Metrics
                  </p>
                  <p className="font-mono text-sm text-slate-700 dark:text-slate-200">
                    {project.metrics}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="cursor-default">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
