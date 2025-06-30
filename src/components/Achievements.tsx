
const Achievements = () => {
  const achievements = [
    {
      title: "GATE 2024",
      subtitle: "AIR 7485 (Top 6%)",
      description: "Outstanding performance in Graduate Aptitude Test in Engineering",
      icon: "🏆",
      color: "neon-blue"
    },
    {
      title: "CoCubes Assessment",
      subtitle: "567/800 Score",
      description: "Excellent score in comprehensive technical assessment",
      icon: "📊",
      color: "neon-violet"
    },
    {
      title: "ELITMUS pH Test",
      subtitle: "60% Percentile",
      description: "Strong performance in problem-solving and analytical skills",
      icon: "🧠",
      color: "neon-cyan"
    },
    {
      title: "Code360 Platform",
      subtitle: "Top 8%",
      description: "Ranked among top performers in competitive programming",
      icon: "💻",
      color: "neon-pink"
    },
    {
      title: "AP EAPCET",
      subtitle: "Rank 6671",
      description: "Strong performance in Andhra Pradesh engineering entrance exam",
      icon: "🎯",
      color: "neon-blue"
    },
    {
      title: "100 Days Coding Challenge",
      subtitle: "Completed Successfully",
      description: "Consistent daily coding practice and skill development",
      icon: "🔥",
      color: "neon-violet"
    },
    {
      title: "HackerRank 5-Star",
      subtitle: "C++, Java, Python, SQL",
      description: "Achieved maximum ratings across multiple programming domains",
      icon: "⭐",
      color: "neon-cyan"
    }
  ];

  const certifications = [
    { name: "Python Programming", provider: "IBM", color: "neon-blue" },
    { name: "Java Programming", provider: "Spoken Tutorial", color: "neon-violet" },
    { name: "C/C++ Programming", provider: "Spoken Tutorial", color: "neon-cyan" },
    { name: "Python & Java Basics", provider: "HackerRank", color: "neon-pink" },
    { name: "Problem Solving", provider: "HackerRank", color: "neon-blue" },
    { name: "100 Days Coding Challenge", provider: "Talent Battle", color: "neon-violet" }
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto rounded-full"></div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-neon-blue">Major Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="card-glass text-center hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className={`text-xl font-bold mb-2 text-${achievement.color}`}>
                  {achievement.title}
                </h4>
                <p className="font-semibold text-foreground mb-3">
                  {achievement.subtitle}
                </p>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-neon-violet">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="card-glass hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className={`font-semibold text-${cert.color} mb-1`}>
                      {cert.name}
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      {cert.provider}
                    </p>
                  </div>
                  <div className="text-2xl">📜</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
