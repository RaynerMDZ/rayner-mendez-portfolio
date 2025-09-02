import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Github, Linkedin, MapPin, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-section">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <div className="w-16 h-0.5 bg-tech-accent mx-auto"></div>
          </div>
          
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always interested in discussing new opportunities, challenging projects, 
              or innovative ideas in backend engineering. Feel free to reach out!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift transition-all duration-300">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-semibold">Professional Links</h3>
                
                <div className="space-y-4">
                  <a
                    href="mailto:alex.richardson@example.com"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-all duration-300 group hover-lift"
                  >
                    <Mail size={20} className="text-tech-accent" />
                    <div>
                      <div className="font-medium group-hover:text-tech-accent transition-colors">
                        alex.richardson@example.com
                      </div>
                      <div className="text-sm text-muted-foreground">Primary Email</div>
                    </div>
                  </a>
                  
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-all duration-300 group hover-lift"
                  >
                    <Github size={20} className="text-tech-accent" />
                    <div>
                      <div className="font-medium group-hover:text-tech-accent transition-colors">
                        github.com/alexrichardson
                      </div>
                      <div className="text-sm text-muted-foreground">Open Source Portfolio</div>
                    </div>
                  </a>
                  
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-all duration-300 group hover-lift"
                  >
                    <Linkedin size={20} className="text-tech-accent" />
                    <div>
                      <div className="font-medium group-hover:text-tech-accent transition-colors">
                        linkedin.com/in/alexrichardson
                      </div>
                      <div className="text-sm text-muted-foreground">Professional Network</div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift transition-all duration-300">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-semibold">Currently</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin size={20} className="text-tech-accent mt-0.5" />
                    <div>
                      <div className="font-medium">San Francisco, CA</div>
                      <div className="text-sm text-muted-foreground">Open to remote opportunities</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Calendar size={20} className="text-tech-accent mt-0.5" />
                    <div>
                      <div className="font-medium">Available for projects</div>
                      <div className="text-sm text-muted-foreground">Full-time & consulting</div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-medium mb-3">Interested in:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Backend Architecture</Badge>
                    <Badge variant="secondary">System Design</Badge>
                    <Badge variant="secondary">DevOps</Badge>
                    <Badge variant="secondary">Mentoring</Badge>
                    <Badge variant="secondary">Open Source</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;