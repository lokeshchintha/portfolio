
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/lokeshchintha",
      icon: Github,
      color: "hover:text-neon-blue"
    },
    {
      name: "LinkedIn", 
      url: "https://linkedin.com/in/lokeshchintha",
      icon: Linkedin,
      color: "hover:text-neon-violet"
    },
    {
      name: "Email",
      url: "mailto:lokeshchinth@gmail.com",
      icon: Mail,
      color: "hover:text-neon-cyan"
    }
  ];

  return (
    <footer className="glass border-t border-border/50">
      <div className="container-custom py-12">
        <div className="text-center">
          {/* Logo */}
          <div className="text-3xl font-bold text-gradient mb-6">
            Chintha Kameswara Lokesh
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Full Stack Developer passionate about creating innovative web solutions 
            and pushing the boundaries of technology.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 glass rounded-full transition-all duration-300 hover:scale-110 hover:shadow-neon-blue ${link.color}`}
                title={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Chintha Kameswara Lokesh. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
