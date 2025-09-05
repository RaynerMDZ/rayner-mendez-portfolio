const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <div className="space-y-8">
                    <div className="text-center">
                        <div className="relative inline-block">
                            <h2 className="text-3xl font-bold mb-4">About Me</h2>
                            <div className="absolute inset-0 blur-lg bg-tech-accent/10 opacity-80 animate-glow -z-10 scale-110"></div>
                        </div>
                        <div className="w-16 h-0.5 bg-tech-accent mx-auto"></div>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">

                        <p className="text-muted-foreground">
                            I'm a Software Engineer with over 3 years of experience designing, implementing, and
                            maintaining robust,
                            scalable systems in high-pressure environments. I excel at solving complex technical
                            challenges,
                            building software capable of handling millions of users while keeping the codebase clean,
                            maintainable,
                            and extensible. I thrive in collaborative settings, working closely with cross-functional
                            teams to deliver high-quality solutions on time.
                        </p>

                        <p className="text-muted-foreground">
                            My dedication to staying current with industry trends and continuous learning drives me to
                            adopt best practices in software architecture, testing, and development processes.
                            I am passionate about leveraging my skills to innovate, improve existing systems,
                            and contribute to projects that make a meaningful impact. Combining practical experience,
                            technical expertise, and a problem-solving mindset, I aim to be a valuable asset to any
                            team seeking a skilled and dedicated software engineer.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-3 gap-8 pt-8">
                        <div className="text-center group hover-lift transition-all duration-300">
                            <div
                                className="text-2xl font-bold text-tech-accent group-hover:scale-110 transition-transform">3+
                            </div>
                            <div className="text-muted-foreground">Years Experience</div>
                        </div>
                        <div className="text-center group hover-lift transition-all duration-300">
                            <div
                                className="text-2xl font-bold text-tech-accent group-hover:scale-110 transition-transform">5+
                            </div>
                            <div className="text-muted-foreground">Projects Delivered</div>
                        </div>
                        <div className="text-center group hover-lift transition-all duration-300">
                            <div
                                className="text-2xl font-bold text-tech-accent group-hover:scale-110 transition-transform">99.9%
                            </div>
                            <div className="text-muted-foreground">System Uptime</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;