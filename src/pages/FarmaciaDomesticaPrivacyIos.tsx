import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";

const FarmaciaDomesticaPrivacyIos = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/portfolio/farmacia-domestica"
            className="inline-flex items-center gap-2 text-hero-foreground/60 hover:text-primary-glow transition-smooth mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Farmácia Doméstica
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/assets/farmacia-domestica-icon.png"
              alt="Farmácia Doméstica"
              className="w-12 h-12 rounded-xl"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-hero-foreground">
              Política de Privacidade
            </h1>
          </div>
          <p className="text-hero-foreground/60">
            Farmácia Doméstica para iOS (iPhone e iPad)
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-3xl mx-auto prose prose-gray max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">Última atualização:</strong>{" "}
            fevereiro de 2026
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            1. Sobre o aplicativo
          </h2>
          <p>
            O{" "}
            <strong className="text-foreground">Farmácia Doméstica</strong> é um
            aplicativo de gestão de medicamentos domésticos para iPhone e iPad,
            desenvolvido por CK-Labs. O app permite escanear códigos de barras
            de medicamentos, controlar validade, gerenciar estoque por membro
            da família e consultar um assistente com inteligência artificial.
          </p>
          <p>
            O Farmácia Doméstica é gratuito, não exibe anúncios e não possui
            compras dentro do aplicativo.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            2. Dados acessados
          </h2>
          <p>
            O Farmácia Doméstica pode solicitar acesso às seguintes permissões:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-foreground">Câmera:</strong> Para
              escanear códigos de barras EAN-13 de medicamentos. O acesso é
              feito apenas quando você inicia o scanner manualmente.
            </li>
            <li>
              <strong className="text-foreground">Notificações:</strong> Para
              enviar alertas locais sobre medicamentos próximos da data de
              validade ou com estoque baixo.
            </li>
            <li>
              <strong className="text-foreground">iCloud:</strong> Para
              sincronizar seus dados entre dispositivos Apple de forma
              criptografada via CloudKit. A sincronização é opcional.
            </li>
            <li>
              <strong className="text-foreground">Sign in with Apple / Google:</strong>{" "}
              Para autenticação opcional. As credenciais são armazenadas no
              Keychain do dispositivo.
            </li>
          </ul>
          <p>
            Nenhuma dessas permissões é obrigatória. O app funciona normalmente
            sem login — basta tocar "Continuar sem conta".
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            3. Armazenamento dos dados
          </h2>
          <p>
            Os dados do Farmácia Doméstica são armazenados{" "}
            <strong className="text-foreground">
              localmente no seu dispositivo
            </strong>{" "}
            utilizando SwiftData. Isso inclui medicamentos, perfis familiares,
            prescrições e histórico de estoque.
          </p>
          <p>
            Se você optar pela sincronização via iCloud, os dados são
            transferidos de forma criptografada pelo CloudKit da Apple. Nenhum
            servidor de terceiros é utilizado para armazenamento.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            4. Consulta a bases de dados externas
          </h2>
          <p>
            Ao escanear um código de barras ou buscar um medicamento, o app
            pode consultar as seguintes bases públicas:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-foreground">ANVISA Bulário</strong> —
              bulas oficiais de medicamentos brasileiros
            </li>
            <li>
              <strong className="text-foreground">OpenFDA</strong> — base de
              medicamentos internacionais
            </li>
            <li>
              <strong className="text-foreground">dados.gov.br</strong> —
              dataset aberto de medicamentos registrados no Brasil
            </li>
          </ul>
          <p>
            Apenas o código de barras ou nome do medicamento é enviado nessas
            consultas — nenhum dado pessoal é transmitido.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            5. Assistente com IA
          </h2>
          <p>
            O Farmácia Doméstica oferece um assistente com inteligência
            artificial para dúvidas sobre medicamentos. As perguntas são
            enviadas para a API do Claude (Anthropic) de forma anônima — sem
            identificação pessoal do usuário. O assistente requer conexão com a
            internet.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            6. Compartilhamento com terceiros
          </h2>
          <p>
            O Farmácia Doméstica{" "}
            <strong className="text-foreground">
              não compartilha, vende ou transfere
            </strong>{" "}
            dados pessoais para terceiros. A sincronização via iCloud é feita
            diretamente pela infraestrutura da Apple.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            7. Coleta de dados e analytics
          </h2>
          <p>
            O Farmácia Doméstica{" "}
            <strong className="text-foreground">não utiliza</strong> ferramentas
            de analytics, rastreamento ou coleta de dados. Não há SDKs de
            terceiros para publicidade ou análise de comportamento.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            8. Tecnologia
          </h2>
          <p>
            O Farmácia Doméstica é desenvolvido nativamente com SwiftUI e
            SwiftData. A única dependência externa é o Google Sign-In SDK,
            utilizado exclusivamente para autenticação.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            9. Privacidade de crianças
          </h2>
          <p>
            O Farmácia Doméstica não é direcionado a crianças menores de 13
            anos. O aplicativo não coleta intencionalmente informações de
            crianças.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            10. Alterações nesta política
          </h2>
          <p>
            Esta política de privacidade pode ser atualizada ocasionalmente.
            Qualquer alteração será publicada nesta mesma página com a data de
            atualização revisada.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            11. Contato
          </h2>
          <p>
            Se você tiver dúvidas sobre esta política de privacidade, entre em
            contato:
          </p>
          <div className="bg-section rounded-xl p-6 mt-4">
            <p className="text-foreground font-medium">
              Desenvolvedor: CK-Labs
            </p>
            <a
              href="mailto:contato@edilson.dev"
              className="inline-flex items-center gap-2 text-primary hover:underline mt-2"
            >
              <Mail className="h-4 w-4" />
              contato@edilson.dev
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-section px-4 py-8">
        <div className="max-w-3xl mx-auto text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Farmácia Doméstica. Todos os
          direitos reservados.
        </div>
      </section>
    </div>
  );
};

export default FarmaciaDomesticaPrivacyIos;
