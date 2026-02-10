import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";

const projects = [
  {
    name: "Niver",
    subtitle: "Lembrete de Aniversários",
    description:
      "O jeito mais fácil e bonito de lembrar dos aniversários de quem você gosta. Disponível para iPhone, iPad e Android.",
    icon: "/assets/niver-icon.png",
    href: "/portfolio/niver",
    platforms: ["ios", "android"],
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-hero-foreground/60 hover:text-primary-glow transition-smooth mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-hero-foreground">
            Portfolio
          </h1>
          <p className="text-xl text-hero-foreground/70 mt-4">
            Projetos e aplicativos que desenvolvi.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-section px-4 py-16">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.name}
              to={project.href}
              className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-glow transition-smooth"
            >
              <img
                src={project.icon}
                alt={project.name}
                className="w-20 h-20 rounded-2xl mb-4"
              />
              <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                {project.name}
              </h2>
              <p className="text-muted-foreground mt-1">{project.subtitle}</p>
              {project.description && (
                <p className="text-sm text-muted-foreground/80 mt-3 leading-relaxed">
                  {project.description}
                </p>
              )}
              {project.platforms && (
                <div className="flex gap-3 mt-4">
                  {project.platforms.includes("ios") && (
                    <FaApple className="h-5 w-5 text-muted-foreground/60" />
                  )}
                  {project.platforms.includes("android") && (
                    <DiAndroid className="h-5 w-5 text-muted-foreground/60" />
                  )}
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
