import { Navigation, Footer } from "@/components/layout";
import { Hero, About, Experience, Skills, Certifications, Projects, Contact } from "@/features/portfolio";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
