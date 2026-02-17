import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import {
  ArrowLeft,
  Music,
  Heart,
  ListMusic,
  Search,
  Download,
  Mic2,
  ShieldCheck,
  ExternalLink,
  Mail,
} from "lucide-react";

const features = [
  {
    icon: Music,
    title: "Hinos Oficiais",
    description:
      "Ouça os hinos oficiais dos maiores clubes do futebol brasileiro e europeu com áudio de alta qualidade.",
  },
  {
    icon: Mic2,
    title: "Letra Sincronizada",
    description:
      "Acompanhe a letra do hino em tempo real, com destaque automático na linha que está tocando.",
  },
  {
    icon: Heart,
    title: "Favoritos",
    description:
      "Marque seus hinos preferidos e acesse rapidamente a qualquer momento.",
  },
  {
    icon: ListMusic,
    title: "Playlists",
    description:
      "Crie playlists personalizadas com os hinos dos seus times favoritos.",
  },
  {
    icon: Search,
    title: "Busca por Clube",
    description:
      "Encontre qualquer clube por nome, divisão ou estado com a busca integrada.",
  },
  {
    icon: Download,
    title: "Modo Offline",
    description:
      "Baixe hinos para ouvir sem conexão. Perfeito para o dia de jogo no estádio.",
  },
  {
    icon: ShieldCheck,
    title: "Privacidade Total",
    description:
      "Sem rastreamento, sem coleta de dados pessoais. Seus favoritos ficam só no seu dispositivo.",
  },
];

const HinosFcApp = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-hero px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-hero-foreground/60 hover:text-primary-glow transition-smooth mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Portfolio
          </Link>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <img
              src="/assets/hinos-fc-icon.png"
              alt="Hinos FC App Icon"
              className="w-32 h-32 rounded-[1.75rem] shadow-glow"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-hero-foreground">
                Hinos FC
              </h1>
              <p className="text-xl text-primary-glow mt-2">
                Hinos de Clubes de Futebol
              </p>
              <p className="text-hero-foreground/70 mt-4 max-w-lg leading-relaxed">
                Ouça os hinos oficiais dos maiores clubes de futebol do Brasil e
                do mundo. Player com letra sincronizada, favoritos e playlists
                personalizadas.
              </p>
              <p className="text-hero-foreground/50 text-sm mt-3">
                Requer iOS 12 ou superior
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-section px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Funcionalidades
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-glow transition-smooth"
              >
                <f.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacy" className="px-4 py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Política de Privacidade
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            O Hinos FC não coleta dados pessoais. Seus favoritos e playlists
            ficam armazenados apenas no seu dispositivo.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-md mx-auto">
            <Link
              to="/portfolio/hinos-fc/privacy/ios"
              data-umami-event="privacy-hinos-fc-ios"
              className="bg-section rounded-2xl p-6 shadow-card hover:shadow-glow transition-smooth text-center"
            >
              <FaApple className="h-8 w-8 text-foreground mx-auto mb-2" />
              <span className="font-semibold text-foreground">iOS</span>
              <span className="block text-sm text-muted-foreground mt-1">
                iPhone e iPad
              </span>
            </Link>
            <div className="bg-section rounded-2xl p-6 shadow-card text-center opacity-60">
              <DiAndroid className="h-8 w-8 text-foreground mx-auto mb-2" />
              <span className="font-semibold text-foreground">Android</span>
              <span className="block text-sm text-muted-foreground mt-1">
                Em breve
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section id="support" className="bg-gradient-hero px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-hero-foreground mb-4">
            Suporte
          </h2>
          <p className="text-hero-foreground/70 mb-8">
            Precisa de ajuda ou quer enviar uma sugestão? Entre em contato.
          </p>
          <a
            href="mailto:contato@edilson.dev"
            data-umami-event="support-hinos-fc"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium shadow-glow transition-smooth"
          >
            <Mail className="h-5 w-5" />
            contato@edilson.dev
          </a>
        </div>
      </section>

      {/* Store URLs Reference */}
      <section className="bg-section px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Links para as lojas
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-white rounded-xl p-4 shadow-card">
              <p className="font-medium text-foreground mb-2 flex items-center gap-2">
                <ExternalLink className="h-4 w-4 text-primary" />
                URL de Marketing
              </p>
              <code className="text-xs text-muted-foreground break-all">
                https://edilsonborges.github.io/portfolio/hinos-fc
              </code>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-card">
              <p className="font-medium text-foreground mb-2 flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                URL de Suporte
              </p>
              <code className="text-xs text-muted-foreground break-all">
                https://edilsonborges.github.io/portfolio/hinos-fc#support
              </code>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-card">
              <p className="font-medium text-foreground mb-2 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Privacidade (iOS)
              </p>
              <code className="text-xs text-muted-foreground break-all">
                https://edilsonborges.github.io/portfolio/hinos-fc/privacy/ios
              </code>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HinosFcApp;
