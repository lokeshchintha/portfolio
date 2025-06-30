
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-padding bg-gradient-neon">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6">
              Let's collaborate and build something amazing together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-neon-blue">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always excited to discuss new opportunities, innovative projects, 
                  or just have a conversation about technology and development.
                </p>
              </div>

              <div className="space-y-6">
                <div className="card-glass flex items-center p-4">
                  <div className="p-3 rounded-full bg-neon-blue/20 mr-4">
                    <Mail className="w-5 h-5 text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">lokeshchinth@gmail.com</p>
                  </div>
                </div>

                <div className="card-glass flex items-center p-4">
                  <div className="p-3 rounded-full bg-neon-violet/20 mr-4">
                    <Phone className="w-5 h-5 text-neon-violet" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+91 9876543210</p>
                  </div>
                </div>
              </div>

              <div className="card-glass p-6">
                <h4 className="font-semibold text-neon-cyan mb-4">Currently Looking For</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></div>
                    Full-time opportunities
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></div>
                    Freelance projects
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></div>
                    Technical collaborations
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <form onSubmit={handleSubmit} className="card-glass p-8 space-y-6">
                <h3 className="text-2xl font-bold mb-6 text-neon-violet">
                  Send a Message
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="glass border-neon-blue/30 focus:border-neon-blue"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="glass border-neon-blue/30 focus:border-neon-blue"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="glass border-neon-violet/30 focus:border-neon-violet"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="glass border-neon-cyan/30 focus:border-neon-cyan min-h-32"
                    placeholder="Tell me about your project or just say hi!"
                    required
                  />
                </div>

                <Button type="submit" className="btn-neon w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
