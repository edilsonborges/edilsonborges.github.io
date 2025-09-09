import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "AGRODEFESA",
      location: "Goiânia e Região, Brasil",
      period: "March 2012 - Present",
      duration: "13 years 7 months",
      description: "Development and maintenance of AGRODEFESA projects serving the state of Goiás, addressing the diverse needs of public servants, local, regional units, headquarters, rural producers, other agencies, and private companies.",
      achievements: [
        "Leadership in AGRODEFESA's development for 'Expresso Goiás', utilizing Angular 12 with 17 delivered services",
        "Development of integrations through webservices with entities like CREA and 'Secretaria da Economia'",
        "Communication and collaboration with agencies such as MAPA and agricultural defenses from other states",
        "Creation of a WhatsApp bot to automate service and integrate with agents in RocketChat",
        "Implementation and maintenance of Kibana dashboards, integrated with Logstash and Elasticsearch",
        "Full integration with Gov.br, government's Oauth API"
      ],
      technologies: ["PHP (Laminas)", "PostgreSQL", "Angular 12", "Elasticsearch", "Kibana", "Logstash", "Java", "React Native"]
    },
    {
      title: "Senior Full Stack Developer",
      company: "ED Tech",
      location: "London, England, United Kingdom",
      period: "June 2020 - Present",
      duration: "5 years 4 months",
      description: "Self-employed, developing a range of projects with comprehensive technology stack coverage across multiple domains.",
      achievements: [
        "Back-end development with PHP (Laminas, Laravel), Node.js, Python, SQL, NoSQL, REST API",
        "Front-end development with React, Angular, Tailwind CSS, Redux, React Router, React Query, NextJS",
        "Mobile development with Flutter, React Native, Java",
        "DevOps and Infrastructure with Linux, Jenkins, AWS, Socket, Serverless, GCP, Firebase"
      ],
      technologies: ["React", "Node.js", "Python", "Laravel", "AWS", "GCP", "Flutter", "NextJS"]
    },
    {
      title: "Technical Support",
      company: "Embratel",
      location: "Goiânia Area, Brazil",
      period: "November 2008 - March 2011",
      duration: "2 years 5 months",
      description: "Technical support for national and international calls, providing customer service in Portuguese, English and Spanish.",
      achievements: [
        "Multilingual technical support delivery",
        "Customer service excellence in telecommunications"
      ],
      technologies: ["Customer Service", "Telecommunications", "Multilingual Support"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey of continuous growth and technical excellence
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gradient-card shadow-card border-0 hover:shadow-soft transition-smooth">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-primary font-medium mb-2">
                      {exp.company}
                    </h4>
                    <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                        <span className="text-primary">({exp.duration})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                {exp.achievements && (
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-3">
                          <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {exp.technologies && (
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                      Technologies
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-primary/10 text-primary hover:bg-primary/20 transition-smooth text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;