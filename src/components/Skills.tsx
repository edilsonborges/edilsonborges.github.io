import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Palette, Smartphone, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Wrench,
      skills: [
        { name: "PHP", level: 95, description: "Laminas, Laravel" },
        { name: "Python", level: 90, description: "Django, FastAPI" },
        { name: "Node.js", level: 88, description: "Express, NestJS" },
        { name: "Java", level: 85, description: "Spring Boot" },
      ]
    },
    {
      title: "Frontend Development",
      icon: Palette,
      skills: [
        { name: "React", level: 92, description: "Redux, Query, Router" },
        { name: "Angular", level: 90, description: "Angular 12+" },
        { name: "JavaScript/TypeScript", level: 95, description: "ES6+, Modern JS" },
        { name: "Tailwind CSS", level: 88, description: "Responsive Design" },
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 85, description: "Cross-platform" },
        { name: "Flutter", level: 80, description: "Dart" },
        { name: "Java (Android)", level: 75, description: "Native Android" },
      ]
    },
    {
      title: "Database & DevOps",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 92, description: "Advanced queries" },
        { name: "Elasticsearch", level: 88, description: "Kibana, Logstash" },
        { name: "AWS", level: 85, description: "EC2, S3, Lambda" },
        { name: "Jenkins", level: 80, description: "CI/CD" },
      ]
    }
  ];

  return (
    <section className="py-20 bg-section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built over 13+ years of development experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card shadow-card border-0 hover:shadow-soft transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <category.icon className="h-6 w-6 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <span className="text-foreground font-medium">{skill.name}</span>
                          <span className="text-muted-foreground text-sm ml-2">
                            {skill.description}
                          </span>
                        </div>
                        <span className="text-primary font-semibold text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-primary h-full rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animation: `slideIn 1.5s ease-out ${skillIndex * 0.2}s backwards`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16">
          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-center text-foreground">
                Additional Technologies & Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
                {[
                  "Docker", "Git", "Redis", "MongoDB", "Firebase", "GCP",
                  "NextJS", "Serverless", "Socket.io", "REST APIs", "GraphQL", "Microservices"
                ].map((tech) => (
                  <div 
                    key={tech} 
                    className="p-3 bg-background rounded-lg border border-border hover:border-primary/50 transition-smooth hover:scale-105 cursor-default"
                  >
                    <span className="text-muted-foreground text-sm font-medium">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--final-width);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;