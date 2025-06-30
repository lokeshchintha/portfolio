
const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-neon">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <div className="card-glass">
                <h3 className="text-2xl font-semibold mb-4 text-neon-blue">
                  Computer Science Graduate
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate Computer Science graduate with expertise in the MERN stack and AI technologies. 
                  I specialize in building interactive, performance-optimized web applications that deliver 
                  exceptional user experiences.
                </p>
              </div>

              <div className="card-glass">
                <h3 className="text-2xl font-semibold mb-4 text-neon-violet">
                  Full Stack Excellence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Proficient in modern web technologies including React, Node.js, MongoDB, and Express. 
                  I focus on creating scalable solutions with clean, maintainable code and optimal performance.
                </p>
              </div>

              <div className="card-glass">
                <h3 className="text-2xl font-semibold mb-4 text-neon-cyan">
                  AI & Innovation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Enthusiastic about artificial intelligence and machine learning, constantly exploring 
                  new technologies to push the boundaries of what's possible in web development.
                </p>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="card-glass p-8 text-center">
                <div className="space-y-8">
                  <div>
                    <div className="text-4xl font-bold text-neon-blue mb-2">6</div>
                    <div className="text-muted-foreground">Months Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-neon-violet mb-2">15+</div>
                    <div className="text-muted-foreground">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-neon-cyan mb-2">10+</div>
                    <div className="text-muted-foreground">Technologies Mastered</div>
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

export default About;
