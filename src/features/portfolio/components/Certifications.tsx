import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      status: "Active",
      description: "Demonstrated expertise in designing distributed systems on AWS",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization"]
    },
    {
      title: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "2023",
      status: "Active", 
      description: "Proven ability to design and manage Google Cloud solutions",
      skills: ["GCP Services", "Infrastructure Design", "Security", "Migration"]
    },
    {
      title: "Oracle Certified Professional Java SE",
      issuer: "Oracle",
      date: "2022",
      status: "Active",
      description: "Expert-level knowledge in Java programming and development",
      skills: ["Java", "OOP", "Collections", "Concurrency"]
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker",
      date: "2022",
      status: "Active",
      description: "Proficiency in containerization and Docker ecosystem",
      skills: ["Containerization", "Docker", "Orchestration", "DevOps"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Certifications</h2>
            <div className="w-16 h-0.5 bg-tech-accent mx-auto"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Professional certifications that validate my expertise in cloud technologies, software development, and modern engineering practices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="h-full hover-lift transition-all duration-300 group border-l-4 border-l-tech-accent">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-tech-accent/10 rounded-lg">
                        <Award className="h-5 w-5 text-tech-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold group-hover:text-tech-accent transition-colors">
                          {cert.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground font-medium">{cert.issuer}</p>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {cert.status}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="text-xs hover:bg-tech-accent hover:text-white hover:border-tech-accent transition-all duration-300"
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
              Committed to continuous learning and staying current with industry standards and emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;