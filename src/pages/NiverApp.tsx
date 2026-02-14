import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import {
  ArrowLeft,
  PartyPopper,
  Palette,
  Import,
  Bell,
  Gift,
  Search,
  ShieldCheck,
  ExternalLink,
  Mail,
} from "lucide-react";

const features = [
  {
    icon: PartyPopper,
    title: "Festa Animada",
    description:
      "Comemore cada aniversário com confetes e animações divertidas que tornam a experiência única.",
  },
  {
    icon: Palette,
    title: "Personalize",
    description:
      "Escolha cores e temas para deixar o app com a sua cara. Cada contato pode ter seu visual.",
  },
  {
    icon: Import,
    title: "Importação de Contatos",
    description:
      "Importe aniversários diretamente dos seus contatos do telefone com apenas um toque.",
  },
  {
    icon: Bell,
    title: "Lembretes Inteligentes",
    description:
      "Receba notificações no momento certo para nunca mais esquecer um aniversário importante.",
  },
  {
    icon: Gift,
    title: "Ideias de Presentes",
    description:
      "Acompanhe ideias de presentes para cada pessoa e nunca fique sem inspiração.",
  },
  {
    icon: Search,
    title: "Busca Rápida",
    description:
      "Encontre qualquer aniversário instantaneamente com a busca integrada.",
  },
  {
    icon: ShieldCheck,
    title: "Privacidade Total",
    description:
      "100% offline. Sem rastreamento, sem coleta de dados. Seus aniversários ficam só no seu dispositivo.",
  },
];

const NiverApp = () => {
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
              src="/assets/niver-icon.png"
              alt="Niver App Icon"
              className="w-32 h-32 rounded-[1.75rem] shadow-glow"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-hero-foreground">
                Niver
              </h1>
              <p className="text-xl text-primary-glow mt-2">
                Lembrete de Aniversários
              </p>
              <p className="text-hero-foreground/70 mt-4 max-w-lg leading-relaxed">
                O jeito mais fácil e bonito de lembrar dos aniversários de quem
                você gosta. Disponível para iPhone, iPad e Android.
              </p>
              <div className="flex flex-wrap gap-4 mt-6 justify-center sm:justify-start">
                <a
                  href="https://apps.apple.com/br/app/niver/id6759010450"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-hero-foreground px-5 py-3 rounded-xl font-medium transition-smooth"
                >
                  <FaApple className="h-5 w-5" />
                  App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.edilson.niver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-hero-foreground px-5 py-3 rounded-xl font-medium transition-smooth"
                >
                  <DiAndroid className="h-5 w-5" />
                  Google Play
                </a>
              </div>
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
            O Niver é 100% offline. Sem rastreamento, sem coleta de dados. Seus
            aniversários ficam só no seu dispositivo.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-md mx-auto">
            <Link
              to="/portfolio/niver/privacy/ios"
              className="bg-section rounded-2xl p-6 shadow-card hover:shadow-glow transition-smooth text-center"
            >
              <FaApple className="h-8 w-8 text-foreground mx-auto mb-2" />
              <span className="font-semibold text-foreground">iOS</span>
              <span className="block text-sm text-muted-foreground mt-1">
                iPhone e iPad
              </span>
            </Link>
            <Link
              to="/portfolio/niver/privacy/android"
              className="bg-section rounded-2xl p-6 shadow-card hover:shadow-glow transition-smooth text-center"
            >
              <DiAndroid className="h-8 w-8 text-foreground mx-auto mb-2" />
              <span className="font-semibold text-foreground">Android</span>
              <span className="block text-sm text-muted-foreground mt-1">
                Smartphones e tablets
              </span>
            </Link>
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
                https://edilsonborges.github.io/portfolio/niver
              </code>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-card">
              <p className="font-medium text-foreground mb-2 flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                URL de Suporte
              </p>
              <code className="text-xs text-muted-foreground break-all">
                https://edilsonborges.github.io/portfolio/niver#support
              </code>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-card">
              <p className="font-medium text-foreground mb-2 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Privacidade (iOS)
              </p>
              <code className="text-xs text-muted-foreground break-all">
                https://edilsonborges.github.io/portfolio/niver/privacy/ios
              </code>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-card">
              <p className="font-medium text-foreground mb-2 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Privacidade (Android)
              </p>
              <code className="text-xs text-muted-foreground break-all">
                https://edilsonborges.github.io/portfolio/niver/privacy/android
              </code>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NiverApp;
