import { Code, Database, Wrench, Cpu, BookOpen, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      color: "neon-blue",
      icon: Code,
      skills: [
        { name: "JavaScript", level: 90, icon: "JS" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "Java", level: 80, icon: "☕" },
        { name: "C/C++", level: 75, icon: "C++" },
        { name: "OpenMP", level: 70, icon: "🔗" },
        { name: "CUDA", level: 65, icon: "🚀" }
      ]
    },
    {
      title: "Frameworks",
      color: "neon-violet",
      icon: Settings,
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "Redux", level: 80, icon: "🔄" },
        { name: "Express.js", level: 85, icon: "E" },
        { name: "Bootstrap", level: 85, icon: "B" },
        { name: "Tailwind CSS", level: 90, icon: "T" }
      ]
    },
    {
      title: "Databases",
      color: "neon-cyan",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 85, icon: "M" },
        { name: "MySQL", level: 80, icon: "🐬" }
      ]
    },
    {
      title: "Technologies",
      color: "neon-pink",
      icon: Cpu,
      skills: [
        { name: "Node.js", level: 85, icon: "N" },
        { name: "HTML/CSS", level: 95, icon: "<>" },
        { name: "Flask", level: 75, icon: "F" },
        { name: "EJS", level: 80, icon: "E" }
      ]
    },
    {
      title: "Libraries",
      color: "neon-blue",
      icon: BookOpen,
      skills: [
        { name: "Pandas", level: 80, icon: "🐼" },
        { name: "NumPy", level: 80, icon: "🔢" },
        { name: "Scikit-learn", level: 75, icon: "🤖" },
        { name: "Matplotlib", level: 75, icon: "📊" },
        { name: "Seaborn", level: 70, icon: "📈" }
      ]
    },
    {
      title: "Tools",
      color: "neon-violet",
      icon: Wrench,
      skills: [
        { name: "Git/GitHub", level: 90, icon: "🐙" },
        { name: "VS Code", level: 95, icon: "VS" },
        { name: "Jupyter", level: 85, icon: "📓" },
        { name: "PyCharm", level: 80, icon: "PC" },
        { name: "IntelliJ IDEA", level: 75, icon: "IJ" },
        { name: "Eclipse", level: 70, icon: "🌙" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Comprehensive expertise across modern web technologies and development tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="card-glass animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg glass border border-${category.color}/30 mr-4`}>
                    <IconComponent className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className={`text-2xl font-bold text-${category.color}`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg bg-${category.color}/10 border border-${category.color}/30 flex items-center justify-center text-xs font-bold text-${category.color}`}>
                            {skill.icon}
                          </div>
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-border/20">
                        <div
                          className={`h-full bg-gradient-to-r from-neon-blue to-neon-blue/60 rounded-full transition-all duration-1000 ease-out shadow-sm animate-fade-in`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.1)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className={`text-${category.color} font-semibold`}>
                      {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}% Avg
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              { name: 'Data Structures & Algorithms', icon: '🧮' },
              { name: 'Async/Await', icon: '⏳' },
              { name: 'Fetch API', icon: '🌐' },
              { name: 'RESTful APIs', icon: '🔗' },
              { name: 'Responsive Design', icon: '📱' },
              { name: 'Performance Optimization', icon: '⚡' },
              { name: 'Code Review', icon: '👁️' },
              { name: 'Agile Methodology', icon: '🔄' }
            ].map((skill) => (
              <span
                key={skill.name}
                className="px-4 py-2 glass rounded-full border border-neon-cyan/30 text-neon-cyan hover:shadow-neon-cyan transition-all duration-300 flex items-center gap-2"
              >
                <span>{skill.icon}</span>
                <span>{skill.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
