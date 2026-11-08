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
            ZapSticker para iPhone
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-3xl mx-auto prose prose-gray max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">Última atualização</strong>{" "}
            em 7 de novembro de 2026
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
            Você escolhe quais mídias importar. Se conceder acesso à biblioteca
            de fotos, poderá alterá-lo nos Ajustes do iPhone.
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
          <p>
            As figurinhas e os pacotes ficam armazenados até você removê-los
            pelo app. Apagar o aplicativo pelo iPhone remove os dados locais
            do ZapSticker. Para excluir pacotes já importados no WhatsApp,
            use os controles do WhatsApp.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            4. Compartilhamento com o WhatsApp
          </h2>
          <p>
            Ao tocar em Enviar para WhatsApp, você compartilha com o WhatsApp
            as figurinhas e os dados do pacote, como o nome e o publicador.
            O ZapSticker entrega o pacote pela área de transferência do iPhone.
            O uso das figurinhas dentro do WhatsApp segue a política de
            privacidade desse serviço.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            5. Coleta de dados e analytics
          </h2>
          <p>
            O ZapSticker{" "}
            <strong className="text-foreground">não utiliza</strong> ferramentas
            de analytics, rastreamento ou coleta de dados. Não há SDKs de
            terceiros para publicidade ou análise de comportamento.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            6. Tecnologia
          </h2>
          <p>
            O ZapSticker é desenvolvido nativamente com SwiftUI, sem
            dependências externas de coleta de dados. O processamento de
            imagens utiliza frameworks nativos da Apple (CoreGraphics,
            AVFoundation) e uma biblioteca WebP vendorizada para codificação
            de figurinhas.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            7. Privacidade de crianças
          </h2>
          <p>
            O ZapSticker não é direcionado a crianças menores de 13 anos. O
            aplicativo não coleta intencionalmente informações de crianças.
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
            Para tirar dúvidas sobre esta política de privacidade, entre em
            contato pelo e-mail abaixo.
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
