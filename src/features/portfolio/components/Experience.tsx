import {Card, CardContent} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';

const Experience = () => {
    const experiences = [
        {
            title: "Apps Dev Intermediate Programmer Analyst - C11",
            company: "Citi Group",
            period: "2024 - Present",
            description: [
                "Collaborated with the development of new features for the credit verification tool, ensuring seamless integration with the existing system.",
                "Leveraged Agile methodologies to plan, track, and deliver products on time with precise increments from sprint to sprint."
            ],
            responsibilities: [
                "Develop and maintain features for the project using latest technologies and best practices.",
                "Collaborate with cross-functional teams to deliver high-quality software on schedule.",
                "Plan, track, and deliver Agile sprint increments, ensuring timely product releases and team alignment."
            ],
            technologies: ["Java", "Spring Boot", "Microservices", "Oracle", "Docker", "OpenShift", "Harness"]
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
                "Leveraged Agile methodologies to plan, track, and deliver products on time with precise increments from sprint to sprint."
            ],
            responsibilities: [
                "Develop and maintain features for the project using latest technologies and best practices.",
                "Collaborate with cross-functional teams to deliver high-quality software on schedule.",
            ],
            technologies: ["Java", "Spring Boot", "Microservices", "Oracle", "Regression Testing"]
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
                            <Card key={index}
                                  className="border-l-4 border-l-tech-accent hover-lift hover-glow transition-all duration-300">
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

                                        <div>
                                            <h4 className="font-medium mb-2">Description:</h4>
                                            <ul className="list-none space-y-1 text-muted-foreground">
                                                {exp.description.map((resp, idx) => (
                                                    <li key={idx}
                                                        className="before:content-['-'] before:mr-2">
                                                        {resp}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

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