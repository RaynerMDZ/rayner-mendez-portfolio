import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Apps Dev Intermediate Programmer Analyst - C11",
    company: "Citi Group",
    period: "2024 - Present",
    description: [
      "Collaborated with the development of new features for the credit verification tool, ensuring seamless integration with the existing system.",
      "Leveraged Agile methodologies to plan, track, and deliver products on time with precise increments from sprint to sprint.",
    ],
    responsibilities: [
      "Develop and maintain features for the project using latest technologies and best practices.",
      "Collaborate with cross-functional teams to deliver high-quality software on schedule.",
      "Plan, track, and deliver Agile sprint increments, ensuring timely product releases and team alignment.",
    ],
    technologies: ["Java", "Spring Boot", "Microservices", "Oracle", "Docker", "OpenShift", "Harness"],
  },
  {
    title: "Apps Dev Programmer Analyst - C10",
    company: "Citi Group",
    period: "2023 - 2024",
    description: [
      "Led a regression testing project using Rest Assured to test all project functionalities with a single click, reducing the time taken by 80% from 2 hours to 5 minutes.",
      "Collaborated and maintained a credit verification tool for commercial clients within the bank's risk management operations, effectively preventing future fines.",
      "Collaborated with cross-functional teams, including trading, risk management, and operations teams to meet deadlines in time while developing and shipping quality code.",
      "Implemented software development best practices, including code reviews, testing, architecture, patterns, security, loosely coupling, and continuous integration.",
      "Leveraged Agile methodologies to plan, track, and deliver products on time with precise increments from sprint to sprint.",
    ],
    responsibilities: [
      "Develop and maintain features for the project using latest technologies and best practices.",
      "Collaborate with cross-functional teams to deliver high-quality software on schedule.",
    ],
    technologies: ["Java", "Spring Boot", "Microservices", "Oracle", "Regression Testing"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="section-shell">
        <div className="mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary mb-4">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Building enterprise systems with measurable impact.
          </h2>
          <div className="section-divider" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <Card key={`${exp.title}-${exp.period}`} className="overflow-hidden hover:shadow-md">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <aside className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-slate-200/80 dark:border-slate-700/80 p-6 bg-slate-50/70 dark:bg-slate-800/30">
                    <p className="text-sm uppercase tracking-widest font-semibold text-primary mb-2">
                      {exp.period}
                    </p>
                    <h3 className="text-lg font-bold leading-snug">{exp.title}</h3>
                    <p className="mt-2 text-slate-500 dark:text-slate-400">{exp.company}</p>
                  </aside>

                  <div className="lg:col-span-9 p-6 space-y-6">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                        Description
                      </h4>
                      <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed">
                        {exp.description.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed">
                        {exp.responsibilities.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="cursor-default">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
