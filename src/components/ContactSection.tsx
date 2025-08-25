import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    { icon: Mail, label: 'Email', value: 'banand@umass.edu', href: 'mailto:banand@umass.edu' },
    { icon: Phone, label: 'Phone', value: '+1 (646) 208-3708', href: 'tel:+16462083708' },
    { icon: Github, label: 'GitHub', value: 'github.com/a-bhavana04', href: 'https://github.com/a-bhavana04' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/abhavana', href: 'https://linkedin.com/in/abhavana' },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50 z-0"></div>
        <div className="max-w-4xl mx-auto px-4 z-10">
        <h2 className="font-broadway text-2xl md:text-3xl text-primary text-center mb-12">
          Contact
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <p className="font-broadway text-sm text-foreground/90 mb-8 leading-relaxed">
              Feel free to reach out for collaborations or opportunities.
            </p>
            
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={method.label}
                  href={method.href}
                  className="flex items-center p-3 border border-primary/30 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <method.icon size={20} className="text-primary mr-3 group-hover:animate-glow-pulse" />
                  <div>
                    <p className="font-broadway text-xs text-foreground/70">{method.label}</p>
                    <p className="font-broadway text-xs text-foreground">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="border border-primary/30 rounded-lg p-6 bg-secondary/5">
            <h3 className="font-broadway text-lg text-primary mb-4">Send Message</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full font-broadway text-xs p-3 bg-background border border-primary/30 rounded text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full font-broadway text-xs p-3 bg-background border border-primary/30 rounded text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full font-broadway text-xs p-3 bg-background border border-primary/30 rounded text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full font-broadway text-xs py-3 border border-primary bg-transparent text-primary hover:bg-primary hover:text-background transition-all duration-300 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
