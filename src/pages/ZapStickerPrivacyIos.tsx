import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";

const ZapStickerPrivacyIos = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/portfolio/zapsticker"
            className="inline-flex items-center gap-2 text-hero-foreground/60 hover:text-primary-glow transition-smooth mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            ZapSticker
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/assets/zapsticker-icon.png"
              alt="ZapSticker"
              className="w-12 h-12 rounded-xl"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-hero-foreground">
              Política de Privacidade
            </h1>
          </div>
          <p className="text-hero-foreground/60">
            ZapSticker para iOS (iPhone e iPad)
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
            O <strong className="text-foreground">ZapSticker</strong> é um
            aplicativo gratuito para criar figurinhas personalizadas para o
            WhatsApp, desenvolvido por Edilson. O app permite importar fotos,
            vídeos, GIFs e Live Photos, processá-los em figurinhas e exportar
            pacotes diretamente para o WhatsApp.
          </p>
          <p>
            O ZapSticker é totalmente gratuito, não exibe anúncios e não possui
            compras dentro do aplicativo.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            2. Dados acessados
          </h2>
          <p>O ZapSticker pode solicitar acesso às seguintes permissões:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-foreground">Fotos e Vídeos:</strong> Para
              importar mídias da sua biblioteca e transformá-las em figurinhas.
              O acesso é feito apenas quando você seleciona mídias manualmente.
            </li>
          </ul>
          <p>
            Nenhuma permissão é obrigatória. O app funciona normalmente sem
            ela — você pode buscar GIFs diretamente no app.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            3. Armazenamento dos dados
          </h2>
          <p>
            Todas as figurinhas e pacotes são armazenados{" "}
            <strong className="text-foreground">
              localmente no seu dispositivo
            </strong>
            , na pasta de documentos do app. Isso inclui imagens processadas,
            metadados dos pacotes e configurações.
          </p>
          <p>
            Não existe conta de usuário, login ou sincronização em nuvem.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            4. Consulta a serviços externos
          </h2>
          <p>
            O recurso de busca de GIFs pode consultar as APIs públicas do{" "}
            <strong className="text-foreground">Tenor</strong> e do{" "}
            <strong className="text-foreground">Giphy</strong> para pesquisar
            GIFs. Apenas o termo de busca é enviado nessas consultas — nenhum
            dado pessoal é transmitido.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            5. Compartilhamento com terceiros
          </h2>
          <p>
            O ZapSticker{" "}
            <strong className="text-foreground">
              não compartilha, vende ou transfere
            </strong>{" "}
            nenhum dado pessoal para terceiros. A exportação de figurinhas para
            o WhatsApp é feita localmente via protocolo de pasteboard, sem
            passar por servidores intermediários.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            6. Coleta de dados e analytics
          </h2>
          <p>
            O ZapSticker{" "}
            <strong className="text-foreground">não utiliza</strong> ferramentas
            de analytics, rastreamento ou coleta de dados. Não há SDKs de
            terceiros para publicidade ou análise de comportamento.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            7. Tecnologia
          </h2>
          <p>
            O ZapSticker é desenvolvido nativamente com SwiftUI, sem
            dependências externas de coleta de dados. O processamento de
            imagens utiliza frameworks nativos da Apple (CoreGraphics,
            AVFoundation) e uma biblioteca WebP vendorizada para codificação
            de figurinhas.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            8. Privacidade de crianças
          </h2>
          <p>
            O ZapSticker não é direcionado a crianças menores de 13 anos. O
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
          &copy; {new Date().getFullYear()} ZapSticker. Todos os direitos
          reservados.
        </div>
      </section>
    </div>
  );
};

export default ZapStickerPrivacyIos;
