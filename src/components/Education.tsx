
const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Aditya Engineering College",
      duration: "2020 – 2024",
      gpa: "7.5",
      color: "neon.blue",
      description: "Comprehensive study in computer science fundamentals, software engineering, and emerging technologies."
    },
    {
      degree: "Intermediate MPC",
      institution: "Sri Chaitanya",
      duration: "2018 – 2020",
      gpa: "9.7",
      color: "neon.violet",
      description: "Mathematics, Physics, and Chemistry with strong analytical and problem-solving foundation."
    },
    {
      degree: "SSC",
      institution: "Gayathri Model High School",
      duration: "2017 – 2018",
      gpa: "9.3",
      color: "neon.cyan",
      description: "Strong academic foundation with excellent performance across all subjects."
    }
  ];

  return (
    <section id="education" className="section-padding bg-gradient-neon">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Educational <span className="text-gradient">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-violet to-neon-cyan"></div>

            {educationData.map((edu, index) => (
              <div
                key={edu.degree}
                className="relative pl-20 pb-12 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 top-6 w-4 h-4 bg-${edu.color} rounded-full shadow-${edu.color} animate-glow`}></div>

                <div className="card-glass">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className={`text-xl lg:text-2xl font-semibold text-${edu.color} mb-2`}>
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg lg:text-xl text-foreground mb-2">
                        {edu.institution}
                      </h4>
                      <p className="text-muted-foreground">
                        {edu.description}
                      </p>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6 text-right">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm bg-${edu.color}/20 text-${edu.color} mb-2`}>
                        {edu.duration}
                      </span>
                      <div className="text-2xl font-bold text-gradient">
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
