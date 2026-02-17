import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";

const HinosFcPrivacyIos = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/portfolio/hinos-fc"
            className="inline-flex items-center gap-2 text-hero-foreground/60 hover:text-primary-glow transition-smooth mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Hinos FC
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/assets/hinos-fc-icon.png"
              alt="Hinos FC"
              className="w-12 h-12 rounded-xl"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-hero-foreground">
              Política de Privacidade
            </h1>
          </div>
          <p className="text-hero-foreground/60">
            Hinos FC para iOS (iPhone e iPad)
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
            O <strong className="text-foreground">Hinos FC</strong> é um
            aplicativo gratuito para ouvir hinos oficiais de clubes de futebol
            brasileiros e europeus, desenvolvido por Edilson. O app permite
            navegar por clubes, ouvir hinos com letra sincronizada, criar
            playlists e favoritar seus hinos preferidos.
          </p>
          <p>
            O Hinos FC é totalmente gratuito, não exibe anúncios e não possui
            compras dentro do aplicativo.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            2. Dados acessados
          </h2>
          <p>O Hinos FC pode solicitar acesso às seguintes permissões:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-foreground">Notificações:</strong> Para
              enviar lembretes sobre novos hinos disponíveis. Os lembretes são
              agendados localmente no seu dispositivo.
            </li>
          </ul>
          <p>
            Nenhuma permissão é obrigatória. O app funciona normalmente sem
            elas.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            3. Armazenamento dos dados
          </h2>
          <p>
            Favoritos, playlists e preferências são armazenados{" "}
            <strong className="text-foreground">
              localmente no seu dispositivo
            </strong>
            . Não existe conta de usuário, login ou sincronização em nuvem.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            4. Consulta a serviços externos
          </h2>
          <p>
            O app se conecta a um servidor para baixar os hinos (áudio MP3),
            brasões dos clubes e informações dos times. Nenhum dado pessoal é
            enviado nessas consultas — apenas identificadores dos clubes são
            transmitidos.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            5. Compartilhamento com terceiros
          </h2>
          <p>
            O Hinos FC{" "}
            <strong className="text-foreground">
              não compartilha, vende ou transfere
            </strong>{" "}
            nenhum dado pessoal para terceiros. Nenhuma informação pessoal sai
            do seu dispositivo.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            6. Coleta de dados e analytics
          </h2>
          <p>
            O Hinos FC{" "}
            <strong className="text-foreground">não utiliza</strong> ferramentas
            de analytics, rastreamento ou coleta de dados. Não há SDKs de
            terceiros para publicidade ou análise de comportamento.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            7. Tecnologia
          </h2>
          <p>
            O Hinos FC é desenvolvido nativamente com UIKit e AVFoundation,
            sem dependências externas de coleta de dados.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            8. Privacidade de crianças
          </h2>
          <p>
            O Hinos FC não é direcionado a crianças menores de 13 anos. O
            aplicativo não coleta intencionalmente informações de crianças.
            Como nenhum dado pessoal é transmitido para fora do dispositivo,
            não há risco de exposição de dados de menores.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            9. Alterações nesta política
          </h2>
          <p>
            Esta política de privacidade pode ser atualizada ocasionalmente.
            Qualquer alteração será publicada nesta mesma página com a data de
            atualização revisada.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            10. Contato
          </h2>
          <p>
            Se você tiver dúvidas sobre esta política de privacidade, entre em
            contato:
          </p>
          <div className="bg-section rounded-xl p-6 mt-4">
            <p className="text-foreground font-medium">
              Desenvolvedor: Edilson
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
          &copy; {new Date().getFullYear()} Hinos FC. Todos os direitos
          reservados.
        </div>
      </section>
    </div>
  );
};

export default HinosFcPrivacyIos;
