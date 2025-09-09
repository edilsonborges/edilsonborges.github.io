import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const languages = [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "Spanish", level: "Limited Working" },
    { name: "German", level: "Elementary" },
  ];

  const topSkills = ["PHP", "Python", "Node.js", "React", "PostgreSQL", "Elasticsearch", "Docker", "Jenkins", "AWS", "GCP"];

  return (
    <section className="py-20 bg-section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building digital solutions with passion and precision
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Content */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Based in Goiânia, Goiás, Brazil, I'm a Senior Full Stack Developer with + 
                {Math.floor((new Date().getTime() - new Date('2012-03-01').getTime()) / (1000 * 60 * 60 * 24 * 365.25))} years of experience in the tech industry. My journey has been driven by 
                a passion for solving complex technological challenges and turning innovative 
                ideas into reality.
              </p>
              <p>
                I specialize in full-stack development, covering everything from back-end 
                architecture to front-end user experiences, mobile applications, and 
                infrastructure management. My approach combines technical expertise with 
                strong product management skills.
              </p>
              <p>
                As a natural communicator, I thrive in collaborative environments and am 
                always eager to learn new technologies and methodologies. I believe in 
                creating efficient, scalable solutions that make a real impact.
              </p>
              <p>
                When I'm not coding, I love running and staying active. I'm proud to have completed 
                a half marathon, which reflects my dedication to setting goals and pushing through challenges 
                both in sports and in software development.
              </p>
            </div>

            {/* Top Skills */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Top Skills</h4>
              <div className="flex flex-wrap gap-2">
                {topSkills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Side Content */}
          <div className="space-y-8">
            {/* Location & Contact Info */}
            <Card className="bg-gradient-card shadow-card border-0">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Contact Information
                </h4>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium">📍</span>
                    <span>Goiânia, Goiás, Brazil</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium">📧</span>
                    <a 
                      href="mailto:hello@edilson.dev" 
                      className="hover:text-primary transition-smooth"
                    >
                      hello@edilson.dev
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium">📱</span>
                    <a 
                      href="tel:+5562981889936" 
                      className="hover:text-primary transition-smooth"
                    >
                      +55 62 98188-9936
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="bg-gradient-card shadow-card border-0">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Languages
                </h4>
                <div className="space-y-3">
                  {languages.map((language) => (
                    <div key={language.name} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{language.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {language.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;