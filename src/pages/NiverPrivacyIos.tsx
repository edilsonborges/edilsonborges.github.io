import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";

const NiverPrivacyIos = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/portfolio/niver"
            className="inline-flex items-center gap-2 text-hero-foreground/60 hover:text-primary-glow transition-smooth mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Niver
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/assets/niver-icon.png"
              alt="Niver"
              className="w-12 h-12 rounded-xl"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-hero-foreground">
              Política de Privacidade
            </h1>
          </div>
          <p className="text-hero-foreground/60">
            Niver para iOS (iPhone e iPad)
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
            O <strong className="text-foreground">Niver</strong> é um aplicativo
            gratuito de acompanhamento de aniversários para iPhone e iPad,
            desenvolvido por Edilson. O app permite registrar datas de
            aniversário, importar contatos e receber lembretes para não esquecer
            de ninguém.
          </p>
          <p>
            O Niver é totalmente gratuito, não exibe anúncios e não possui
            compras dentro do aplicativo.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            2. Dados acessados
          </h2>
          <p>O Niver pode solicitar acesso às seguintes permissões:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-foreground">Contatos:</strong> Para
              importar nomes e datas de aniversário. O acesso é feito apenas
              quando você inicia a importação manualmente.
            </li>
            <li>
              <strong className="text-foreground">Notificações:</strong> Para
              enviar lembretes locais sobre aniversários próximos. Os lembretes
              são agendados localmente no seu dispositivo.
            </li>
          </ul>
          <p>
            Nenhuma dessas permissões é obrigatória. O app funciona normalmente
            sem elas — você pode cadastrar aniversários manualmente.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            3. Armazenamento dos dados
          </h2>
          <p>
            Todos os dados do Niver são armazenados{" "}
            <strong className="text-foreground">
              localmente no seu dispositivo
            </strong>
            , utilizando SwiftData. Isso inclui nomes, datas de aniversário e
            ideias de presentes.
          </p>
          <p>
            Nenhum dado é enviado para servidores externos. Não existe conta de
            usuário, login ou sincronização em nuvem.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            4. Compartilhamento com terceiros
          </h2>
          <p>
            O Niver{" "}
            <strong className="text-foreground">
              não compartilha, vende ou transfere
            </strong>{" "}
            nenhum dado pessoal para terceiros. Nenhuma informação sai do seu
            dispositivo.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            5. Coleta de dados e analytics
          </h2>
          <p>
            O Niver{" "}
            <strong className="text-foreground">não utiliza</strong> ferramentas
            de analytics, rastreamento ou coleta de dados. Não há SDKs de
            terceiros para publicidade ou análise de comportamento.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            6. Tecnologia
          </h2>
          <p>
            O Niver é desenvolvido nativamente com SwiftUI e SwiftData, sem
            dependências externas de coleta de dados.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            7. Privacidade de crianças
          </h2>
          <p>
            O Niver não é direcionado a crianças menores de 13 anos. O
            aplicativo não coleta intencionalmente informações de crianças. Como
            nenhum dado é transmitido para fora do dispositivo, não há risco de
            exposição de dados de menores.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            8. Alterações nesta política
          </h2>
          <p>
            Esta política de privacidade pode ser atualizada ocasionalmente.
            Qualquer alteração será publicada nesta mesma página com a data de
            atualização revisada.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            9. Contato
          </h2>
          <p>
            Se você tiver dúvidas sobre esta política de privacidade, entre em
            contato:
          </p>
          <div className="bg-section rounded-xl p-6 mt-4">
            <p className="text-foreground font-medium">Desenvolvedor: Edilson</p>
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
          &copy; {new Date().getFullYear()} Niver. Todos os direitos reservados.
        </div>
      </section>
    </div>
  );
};

export default NiverPrivacyIos;
