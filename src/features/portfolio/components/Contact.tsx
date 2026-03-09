import { Calendar, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactLinks = [
  {
    label: "raynermendezg@gmail.com",
    subLabel: "Primary Email",
    href: "mailto:raynermendezg@gmail.com",
    icon: Mail,
  },
  {
    label: "github.com/raynermdz",
    subLabel: "Open Source Portfolio",
    href: "https://github.com/raynermdz",
    icon: Github,
  },
  {
    label: "linkedin.com/in/raynermendez",
    subLabel: "Professional Network",
    href: "https://linkedin.com/in/raynermendez",
    icon: Linkedin,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Open to impactful opportunities and collaborations.
          </h2>
          <div className="section-divider" />
          <p className="mt-6 text-slate-500 dark:text-slate-400 leading-relaxed">
            I&apos;m always interested in discussing challenging projects and
            innovative ideas in backend, cloud, and AI engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card>
            <CardContent className="p-6 sm:p-8 space-y-6">
              <h3 className="text-2xl font-bold tracking-tight">Professional Links</h3>
              <div className="space-y-3">
                {contactLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex min-h-12 items-center gap-3 rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 transition-all hover:border-primary/40 hover:bg-primary/5 dark:border-slate-700/80 dark:bg-slate-900/40 dark:hover:bg-slate-800/50"
                    >
                      <Icon size={18} className="text-primary" />
                      <div>
                        <p className="font-medium text-slate-700 transition-colors group-hover:text-primary dark:text-slate-200">
                          {item.label}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {item.subLabel}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 sm:p-8 space-y-6">
              <h3 className="text-2xl font-bold tracking-tight">Currently</h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">Jersey City, NJ</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Open to remote opportunities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">Available for projects</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Full-time and consulting
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">
                  Interested In
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Software Architecture", "System Design", "AI", "LLMs", "Open Source"].map(
                    (item) => (
                      <Badge key={item} variant="secondary" className="cursor-default">
                        {item}
                      </Badge>
                    )
                  )}
                </div>
              </div>

              <Button asChild className="w-full sm:w-auto">
                <a href="mailto:raynermendezg@gmail.com">Start a Conversation</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
