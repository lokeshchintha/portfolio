const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue to-neon-violet"></div>

            {/* First Experience */}
            <div className="relative pl-20 pb-12 animate-fade-in">
              {/* Dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-neon-blue rounded-full shadow-neon-blue animate-glow"></div>

              <div className="card-glass">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-neon-blue mb-2">
                      Full Stack Web Developer Intern
                    </h3>
                    <h4 className="text-xl text-neon-violet mb-2">SlashMark</h4>
                    <p className="text-muted-foreground">Remote</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-neon-blue/20 text-neon-blue">
                      Apr 2025 – Jun 2025
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Developed and deployed full-stack applications using MongoDB, Express.js, React, and Node.js, 
                    focusing on performance optimization and user experience enhancement.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-to-br from-neon-blue/10 to-transparent rounded-lg border border-neon-blue/20">
                      <h5 className="font-semibold text-neon-blue mb-2">Frontend Development</h5>
                      <p className="text-sm text-muted-foreground">
                        Optimized UI components with React Hooks, implementing responsive designs and smooth animations
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-neon-violet/10 to-transparent rounded-lg border border-neon-violet/20">
                      <h5 className="font-semibold text-neon-violet mb-2">Backend Optimization</h5>
                      <p className="text-sm text-muted-foreground">
                        Improved query performance through efficient database schemas and API optimization
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {['MongoDB', 'Express.js', 'React', 'Node.js', 'React Hooks', 'REST APIs'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full glass border border-neon-cyan/30 text-neon-cyan"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Second Experience Dot */}
              <div className="absolute left-6 top-150 w-4 h-4 bg-neon-violet rounded-full shadow-neon-violet animate-glow"></div>

              {/* Second Experience */}
              <div className="mt-10 card-glass">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-neon-blue mb-2">
                      MERN Stack Intern
                    </h3>
                    <h4 className="text-xl text-neon-violet mb-2">Upto Skills</h4>
                    <p className="text-muted-foreground">Remote</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-neon-blue/20 text-neon-blue">
                      Sep 2024 – Dec 2024
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Collaborated on the development of educational web platforms using the MERN stack. Focused on component reusability, API integrations, and seamless user experience for interactive learning tools.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-to-br from-neon-blue/10 to-transparent rounded-lg border border-neon-blue/20">
                      <h5 className="font-semibold text-neon-blue mb-2">Dynamic UI Building</h5>
                      <p className="text-sm text-muted-foreground">
                        Engineered dynamic, stateful React components with context APIs and routing for modular educational features.
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-neon-violet/10 to-transparent rounded-lg border border-neon-violet/20">
                      <h5 className="font-semibold text-neon-violet mb-2">API Design & Security</h5>
                      <p className="text-sm text-muted-foreground">
                        Built secure, RESTful backend APIs using Express and Node.js with JWT authentication and role-based access.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT Auth', 'REST APIs', 'React Router', 'UI/UX'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full glass border border-neon-cyan/30 text-neon-cyan"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
