import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Backend Engineer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Lead backend development for a high-traffic e-commerce platform serving 2M+ users. Architected microservices infrastructure reducing response times by 40%.",
      responsibilities: [
        "Designed and implemented microservices architecture using Spring Boot and Docker",
        "Optimized database queries resulting in 60% performance improvement",
        "Led team of 4 developers and established code review processes",
        "Implemented automated testing and CI/CD pipelines"
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "AWS"]
    },
    {
      title: "Backend Developer",
      company: "StartupHub Inc",
      period: "2020 - 2022",
      description: "Developed scalable APIs and backend services for a fintech startup. Built real-time payment processing system handling $10M+ in transactions.",
      responsibilities: [
        "Built RESTful APIs serving 100K+ daily requests",
        "Implemented real-time payment processing with 99.99% uptime",
        "Integrated third-party services and payment gateways",
        "Optimized system architecture for horizontal scaling"
      ],
      technologies: ["Python", "Django", "Redis", "PostgreSQL", "Celery", "AWS Lambda"]
    },
    {
      title: "Software Engineer",
      company: "DataFlow Systems",
      period: "2019 - 2020",
      description: "Worked on data processing pipelines and analytics systems. Developed ETL processes handling terabytes of data daily.",
      responsibilities: [
        "Built data processing pipelines using Apache Kafka and Spark",
        "Developed analytics APIs for business intelligence dashboard",
        "Implemented data validation and quality monitoring systems",
        "Collaborated with data science team on ML model deployment"
      ],
      technologies: ["Java", "Apache Kafka", "Apache Spark", "MongoDB", "Elasticsearch"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <div className="w-16 h-0.5 bg-tech-accent mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-tech-accent">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <div className="text-tech-accent font-medium">{exp.company}</div>
                      </div>
                      <div className="text-sm text-muted-foreground font-mono mt-1 md:mt-0">
                        {exp.period}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">{exp.description}</p>
                    
                    <div>
                      <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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

export default Experience;