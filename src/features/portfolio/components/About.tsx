const About = () => {
  return (
    <section id="about" className="py-24 bg-white/70 dark:bg-slate-900/40">
      <div className="section-shell">
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary mb-4">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Engineering systems that perform under pressure.
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8 rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-sm dark:border-slate-700/70 dark:bg-slate-900/70">
            <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                I&apos;m a Software Engineer with over 3 years of experience designing,
                implementing, and maintaining robust, scalable systems in
                high-pressure environments. I excel at solving complex technical
                challenges and building software capable of handling millions of users
                while keeping the codebase clean, maintainable, and extensible.
              </p>
              <p>
                My dedication to staying current with industry trends and continuous
                learning drives me to adopt best practices in software architecture,
                testing, and delivery. I enjoy collaborating with cross-functional
                teams to ship reliable products that create meaningful impact.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 grid gap-4">
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 dark:border-slate-700/70 dark:bg-slate-800/50">
              <p className="text-4xl font-extrabold text-primary">3+</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Years Experience
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 dark:border-slate-700/70 dark:bg-slate-800/50">
              <p className="text-4xl font-extrabold text-primary">5+</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Projects Delivered
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 dark:border-slate-700/70 dark:bg-slate-800/50">
              <p className="text-4xl font-extrabold text-primary">99.9%</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                System Uptime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
