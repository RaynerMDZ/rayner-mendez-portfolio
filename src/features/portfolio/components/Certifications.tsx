import { Award, Calendar, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    status: "Active",
    certificationId: "AWS-SAA-C03-2023-001234",
    link: "https://www.credly.com/badges/aws-solutions-architect",
    description: "Demonstrated expertise in designing distributed systems on AWS",
    skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization"],
  },
  {
    title: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "2023",
    status: "Active",
    certificationId: "GCP-PCA-2023-567890",
    link: "https://www.credential.net/google-cloud-architect",
    description: "Proven ability to design and manage Google Cloud solutions",
    skills: ["GCP Services", "Infrastructure Design", "Security", "Migration"],
  },
  {
    title: "Oracle Certified Professional Java SE",
    issuer: "Oracle",
    date: "2022",
    status: "Active",
    certificationId: "OCP-JAVA-SE-2022-112233",
    link: "https://catalog-education.oracle.com/pls/certview/",
    description: "Expert-level knowledge in Java programming and development",
    skills: ["Java", "OOP", "Collections", "Concurrency"],
  },
  {
    title: "Docker Certified Associate",
    issuer: "Docker",
    date: "2022",
    status: "Active",
    certificationId: "DCA-2022-445566",
    link: "https://credentials.docker.com/",
    description: "Proficiency in containerization and Docker ecosystem",
    skills: ["Containerization", "Docker", "Orchestration", "DevOps"],
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="section-shell">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary mb-4">
            Certifications
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Verified expertise across cloud and engineering domains.
          </h2>
          <div className="section-divider" />
          <p className="mt-6 text-slate-500 dark:text-slate-400 leading-relaxed">
            Professional certifications validating practical capabilities in cloud
            platforms, architecture design, and modern software delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.title} className="h-full hover:shadow-md">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{cert.title}</CardTitle>
                      <p className="mt-1 text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                    </div>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-primary transition-colors"
                    aria-label={`Open ${cert.title} credential`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {cert.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                  <Badge variant="secondary">{cert.status}</Badge>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {cert.date}
                  </span>
                  <span className="font-mono text-xs">ID: {cert.certificationId}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="cursor-default">
                      {skill}
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

export default Certifications;
