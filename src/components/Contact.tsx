import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, Globe } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@edilson.dev",
      href: "mailto:hello@edilson.dev",
      description: "Best for project inquiries"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "in/edilsonborges",
      href: "https://www.linkedin.com/in/edilsonborges",
      description: "Let's connect professionally"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "edilsonborges",
      href: "https://github.com/edilsonborges",
      description: "Check out my repositories"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-hero-foreground/80 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always open to discussing new 
            opportunities and innovative projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid gap-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index} className="bg-background/10 backdrop-blur-sm border-hero-foreground/20 hover:bg-background/20 transition-smooth">
                    <CardContent className="p-6">
                      <a 
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 group"
                      >
                        <div className="p-3 bg-primary rounded-lg group-hover:scale-110 transition-transform">
                          <IconComponent className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-hero-foreground font-semibold group-hover:text-primary-glow transition-smooth">
                            {method.title}
                          </h3>
                          <p className="text-hero-foreground/60 text-sm mb-1">
                            {method.description}
                          </p>
                          <p className="text-hero-foreground/80 font-medium">
                            {method.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Location */}
            <Card className="bg-background/10 backdrop-blur-sm border-hero-foreground/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-hero-foreground font-semibold">Location</h3>
                    <p className="text-hero-foreground/60 text-sm mb-1">
                      Currently based in
                    </p>
                    <p className="text-hero-foreground/80 font-medium">
                      Goiânia, Goiás, Brazil
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="lg:pl-8">
            <Card className="bg-background/10 backdrop-blur-sm border-hero-foreground/20">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Globe className="h-16 w-16 text-primary-glow mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-hero-foreground mb-2">
                    Ready to Start?
                  </h3>
                  <p className="text-hero-foreground/60 leading-relaxed">
                    Whether you need a full-stack web application, mobile app, 
                    or technical consultation, I'm here to help transform your 
                    vision into reality.
                  </p>
                </div>

                <div className="space-y-4">
                  <Button 
                    asChild
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-smooth"
                  >
                    <a href="mailto:hello@edilson.dev">
                      <Mail className="mr-2 h-5 w-5" />
                      Send me an email
                    </a>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline" 
                    size="lg"
                    className="w-full border-hero-foreground/20 hover:bg-hero-foreground/10 transition-smooth"
                  >
                    <a href="https://www.linkedin.com/in/edilsonborges" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-hero-foreground/20">
                  <p className="text-hero-foreground/60 text-sm">
                    Available full-time or freelance projects
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Fun Fact */}
            <div className="mt-6 text-center">
              <p className="text-hero-foreground/60 text-sm">
                💡 Fun fact: I speak 4 languages and love turning complex problems into elegant solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;