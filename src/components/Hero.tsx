import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-hero-foreground mb-6 leading-tight">
            Senior Full Stack
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Developer
            </span>
          </h1>
          
          <p className="text-xl text-hero-foreground/80 mb-8 leading-relaxed">
            {Math.floor((new Date().getTime() - new Date('2012-03-01').getTime()) / (1000 * 60 * 60 * 24 * 365.25))}+ years of experience solving complex challenges across back-end, 
            front-end, mobile development, and infrastructure. Passionate about 
            turning ideas into efficient technological solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-smooth group"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-hero-foreground/20 hover:bg-hero-foreground/10 transition-smooth"
              onClick={() => document.getElementById('professional-experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>
          
          {/* Contact Links */}
          <div className="flex justify-center lg:justify-start gap-6">
            <a 
              href="https://github.com/edilsonborges" 
              className="text-hero-foreground/60 hover:text-primary-glow transition-smooth transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/edilsonborges" 
              className="text-hero-foreground/60 hover:text-primary-glow transition-smooth transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:hello@edilson.dev" 
              className="text-hero-foreground/60 hover:text-primary-glow transition-smooth transform hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="tel:+5562981889936" 
              className="text-hero-foreground/60 hover:text-primary-glow transition-smooth transform hover:scale-110"
            >
              <Phone className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 scale-110"></div>
            <img 
              src="/assets/profile.png"
              alt="Edilson Borges - Senior Full Stack Developer"
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-glow border-4 border-primary/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;