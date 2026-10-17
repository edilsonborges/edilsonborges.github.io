import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import {
  ArrowLeft,
  QrCode,
  ArrowDownUp,
  ScanBarcode,
  ChartLine,
  Store,
  ShieldCheck,
  ExternalLink,
  Mail,
} from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "Escaneou, pronto",
    description:
      "Aponte a câmera para o QR Code da NFC-e e os produtos entram sozinhos, com preço, loja e data.",
  },
  {
    icon: ArrowDownUp,
    title: "Comparação automática",
    description:
      "Em cada item, quanto mudou em relação à compra anterior: mais caro, mais barato ou igual.",
  },
  {
    icon: ScanBarcode,
    title: "Identificação por código de barras",
    description:
      "Cada produto é reconhecido pelo EAN, com nome e marca completados pelo Open Food Facts.",
  },
  {
    icon: ChartLine,
    title: "Histórico e gráficos",
    description:
      "Menor, maior, média e a evolução do preço de cada produto ao longo do tempo.",
  },
  {
    icon: Store,
    title: "Comparativo por loja",
    description:
      "Compare os preços registrados por loja, com data e filtro de período.",
  },
  {
    icon: ArrowDownUp,
    title: "Compare embalagens",
    description:
      "Confira o custo por quilo, litro ou unidade entre tamanhos diferentes e variantes escolhidas por você.",
  },
  {
    icon: ScanBarcode,
    title: "Consulte antes de comprar",
    description:
      "Leia o código de um produto conhecido e compare o preço da prateleira com seu histórico. Anote preços sem somá-los aos gastos.",
  },
  {
    icon: ShieldCheck,
    title: "Seus dados, com você",
    description:
      "Histórico no iPhone, sem cadastro e sem anúncios. Exporte e importe seu backup.",
  },
];

const QuantoPagueiApp = () => {
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
              src="/assets/quanto-paguei-icon.png"
              alt="Quanto Paguei App Icon"
              className="w-32 h-32 rounded-[1.75rem] shadow-glow"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-hero-foreground">
                Quanto Paguei
              </h1>
              <p className="text-xl text-primary-glow mt-2">
                Nota fiscal, preços e lojas
              </p>
              <p className="text-hero-foreground/70 mt-4 max-w-lg leading-relaxed">
                Consulte o que você já pagou antes de comprar de novo.
                Guarde notas fiscais, compare o preço da prateleira com seu
                histórico e confira o custo por quilo, litro ou unidade.
              </p>
              <p className="text-hero-foreground/50 text-sm mt-3">
                Requer iOS 18 ou superior
              </p>
              <div className="flex flex-wrap gap-4 mt-6 justify-center sm:justify-start">
                <a
                  href="https://apps.apple.com/br/app/id6805724071"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event="download-quanto-paguei-ios"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-hero-foreground px-5 py-3 rounded-xl font-medium transition-smooth"
                >
                  <FaApple className="h-5 w-5" />
                  App Store
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            Seu histórico fica no iPhone, sem cadastro e sem anúncios.
            Ao importar uma NFC-e, o link e os dados da nota passam pelo
            servidor de consulta. A política explica esse processamento.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-md mx-auto">
            <Link
              to="/portfolio/quanto-paguei/privacy/ios"
              data-umami-event="privacy-quanto-paguei-ios"
              className="bg-section rounded-2xl p-6 shadow-card hover:shadow-glow transition-smooth text-center"
            >
              <FaApple className="h-8 w-8 text-foreground mx-auto mb-2" />
              <span className="font-semibold text-foreground">iOS</span>
              <span className="block text-sm text-muted-foreground mt-1">
                iPhone
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
            data-umami-event="support-quanto-paguei"
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
                https://edilson.dev/portfolio/quanto-paguei
              </code>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-card">
              <p className="font-medium text-foreground mb-2 flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                URL de Suporte
              </p>
              <code className="text-xs text-muted-foreground break-all">
                https://edilson.dev/portfolio/quanto-paguei#support
              </code>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-card">
              <p className="font-medium text-foreground mb-2 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Privacidade (iOS)
              </p>
              <code className="text-xs text-muted-foreground break-all">
                https://edilson.dev/portfolio/quanto-paguei/privacy/ios
              </code>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantoPagueiApp;
