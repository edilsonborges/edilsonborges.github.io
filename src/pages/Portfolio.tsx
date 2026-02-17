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
  {
    name: "Estoque Doméstico",
    subtitle: "Controle de validade e estoque",
    description:
      "Controle os alimentos da sua casa, evite desperdício e economize dinheiro. Escaneie códigos de barras e receba alertas.",
    icon: "/assets/estoque-domestico-icon.png",
    href: "/portfolio/estoque-domestico",
    platforms: ["ios"],
  },
  {
    name: "Farmácia Doméstica",
    subtitle: "Gestão de medicamentos em casa",
    description:
      "Controle medicamentos com scanner de código de barras, alertas de validade, assistente com IA e sincronização familiar.",
    icon: "/assets/farmacia-domestica-icon.png",
    href: "/portfolio/farmacia-domestica",
    platforms: ["ios"],
  },
  {
    name: "Hinos FC",
    subtitle: "Hinos de Clubes de Futebol",
    description:
      "Ouça os hinos oficiais dos maiores clubes de futebol do Brasil e do mundo. Player com letra sincronizada, favoritos e playlists.",
    icon: "/assets/hinos-fc-icon.png",
    href: "/portfolio/hinos-fc",
    platforms: ["ios"],
  },
  {
    name: "ZapSticker",
    subtitle: "Figurinhas para WhatsApp",
    description:
      "Crie figurinhas personalizadas a partir de fotos, vídeos, GIFs e Live Photos. Organize em pacotes e exporte direto para o WhatsApp.",
    icon: "/assets/zapsticker-icon.png",
    href: "/portfolio/zapsticker",
    platforms: ["ios"],
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
            Ideias que transformei em produto.
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
