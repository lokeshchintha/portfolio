import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio with theme switching, SEO optimization, and 30% faster load times via code refinement.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "GitHub Pages"],
      features: [
        "Dark/Light Mode",
        "Responsive Design",
        "40% Visitor Engagement Boost",
        "SEO & Performance Optimization",
      ],
      color: "neon-blue",
      gradient: "from-neon-blue/20 to-neon-cyan/20",
      github: "https://github.com/lokeshchintha/portfolio",
      live: "https://lokeshchintha.github.io/portfolio",
    },
    {
      title: "DSAverse Platform",
      description:
        "Interactive DSA learning platform with AI mentor, gamified modules, and real-time visualizations for 1,000+ users.",
      tech: [
        "MERN Stack",
        "OpenAI API",
        "WebSockets",
        "React",
        "Node.js",
        "MongoDB",
      ],
      features: [
        "Contests & Peer Battles",
        "Real-Time Visualizations: Trees, Graphs, Tries",
        "Gamified Learning: DSA Escape Room, Sorting Dash",
        "AI Mentoring + 35% Increased Session Time",
      ],
      color: "neon-violet",
      gradient: "from-neon-violet/20 to-neon-pink/20",
      github: "https://github.com/lokeshchintha/DSAverse",
      live: "#", // Add deployment link if available
    },
    {
      title: "Nearest Station Finder",
      description:
        "Geolocation-based tool to find nearby stations, restaurants, and more with Google Maps integration.",
      tech: [
        "React",
        "Google Maps API",
        "Geolocation API",
        "Tailwind CSS",
      ],
      features: [
        "User Location Detection",
        "Nearby Bus, Train, Lodging, Food",
        "Distance & Rating Filter",
        "Mobile Responsive + Real-Time UI",
      ],
      color: "neon-cyan",
      gradient: "from-neon-cyan/20 to-neon-blue/20",
      github: "https://github.com/lokeshchintha/Nearest-location-finder",
      live: "https://nearest-location-finder-1-kcd0.onrender.com/", // Add deployment link if available
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-neon">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Showcasing innovative solutions built with modern technologies and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-glass group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`h-2 w-full rounded-t-xl bg-gradient-to-r ${project.gradient} mb-6`}
              ></div>

              <div className="p-6 pt-0">
                <h3 className={`text-2xl font-bold mb-4 text-${project.color}`}>
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 bg-${project.color} rounded-full mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs rounded-full glass border border-${project.color}/30 text-${project.color}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-neon text-sm py-2 text-center"
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 glass rounded-lg hover:shadow-neon-violet transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
