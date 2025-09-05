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
      certificationId: "AWS-SAA-C03-2023-001234",
      link: "https://www.credly.com/badges/aws-solutions-architect",
      description: "Demonstrated expertise in designing distributed systems on AWS",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization"]
    },
    {
      title: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "2023",
      status: "Active",
      certificationId: "GCP-PCA-2023-567890", 
      link: "https://www.credential.net/google-cloud-architect",
      description: "Proven ability to design and manage Google Cloud solutions",
      skills: ["GCP Services", "Infrastructure Design", "Security", "Migration"]
    },
    {
      title: "Oracle Certified Professional Java SE",
      issuer: "Oracle",
      date: "2022",
      status: "Active",
      certificationId: "OCP-JAVA-SE-2022-112233",
      link: "https://catalog-education.oracle.com/pls/certview/",
      description: "Expert-level knowledge in Java programming and development",
      skills: ["Java", "OOP", "Collections", "Concurrency"]
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker",
      date: "2022",
      status: "Active",
      certificationId: "DCA-2022-445566",
      link: "https://credentials.docker.com/",
      description: "Proficiency in containerization and Docker ecosystem",
      skills: ["Containerization", "Docker", "Orchestration", "DevOps"]
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-8">
          <div className="text-center">
            <div className="relative inline-block">
              <h2 className="text-3xl font-bold mb-4">Certifications</h2>
              <div className="absolute inset-0 blur-lg bg-tech-accent/10 opacity-80 animate-glow -z-10 scale-110"></div>
            </div>
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
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-tech-accent transition-colors cursor-pointer" />
                    </a>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-xs font-mono text-muted-foreground">
                      ID: {cert.certificationId}
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="secondary" className="text-xs">
                        {cert.status}
                      </Badge>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
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