import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile-picture.jpeg";
import { getBlogUrl } from "@/lib/site";

const blogUrl = getBlogUrl();

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32 min-h-[calc(100vh-5rem)] flex items-center"
    >
      <div className="absolute inset-0 gradient-tech opacity-60" />
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute -top-24 left-[5%] h-56 w-56 rounded-full bg-primary/35 blur-3xl animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-0 right-[8%] h-72 w-72 rounded-full bg-sky-400/30 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-44 w-44 rounded-full bg-cyan-300/20 blur-2xl animate-float"
          style={{ animationDelay: "3.5s" }}
        />
      </div>

      <div className="section-shell relative z-10">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          <div className="order-2 lg:order-2 text-center lg:text-left animate-fadeInUp">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">
              Software Engineer
            </span>
            <h1 className="section-headline mb-6">
              Building cloud-native systems and{" "}
              <span className="text-primary">AI-driven solutions</span>.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 mx-auto lg:mx-0">
              Talented software engineer with strong experience building and maintaining
              systems in high-pressure environments. Focused on practical delivery,
              resilient architecture, and continuous learning.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
              </Button>
              <Button asChild variant="ghost">
                <a href={blogUrl} target="_blank" rel="noopener noreferrer">
                  Read Blog
                </a>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-5 text-sm text-slate-500 dark:text-slate-400 justify-center lg:justify-start">
              <a
                href="mailto:raynermendezg@gmail.com"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail size={18} />
                Email
              </a>
              <a
                href="https://github.com/raynermdz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/raynermendez"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-1 flex justify-center lg:justify-start animate-fadeInUp">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary/35 via-sky-500/30 to-cyan-500/30 blur-md opacity-60 group-hover:opacity-80 transition duration-500" />
              <div className="relative rounded-3xl overflow-hidden border border-white/70 dark:border-slate-700/70 bg-slate-100 dark:bg-slate-800 w-[min(86vw,420px)] aspect-[4/5] shadow-tech animate-glow">
                <img
                  src={profileImage}
                  alt="Rayner Mendez"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/70 via-slate-900/25 to-transparent p-6">
                  <p className="text-white text-base font-semibold tracking-wide">
                    Rayner Mendez
                  </p>
                  <p className="text-white/85 text-xs md:text-sm">
                    Generative AI Engineer · Software Engineer · Cloud Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
