import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";

const QuantoPagueiPrivacyIos = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/portfolio/quanto-paguei"
            className="inline-flex items-center gap-2 text-hero-foreground/60 hover:text-primary-glow transition-smooth mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Quanto Paguei
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/assets/quanto-paguei-icon.png"
              alt="Quanto Paguei"
              className="w-12 h-12 rounded-xl"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-hero-foreground">
              Política de Privacidade
            </h1>
          </div>
          <p className="text-hero-foreground/60">
            Quanto Paguei para iOS (iPhone)
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-3xl mx-auto prose prose-gray max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">Última atualização:</strong>{" "}
            17 de outubro de 2026
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            1. Sobre o aplicativo
          </h2>
          <p>
            O <strong className="text-foreground">Quanto Paguei</strong> é um
            aplicativo para iPhone, desenvolvido por Edilson, que registra suas
            compras a partir do QR Code da nota fiscal (NFC-e) e compara os
            preços dos produtos entre compras e lojas.
          </p>
          <p>
            O app não exige conta nem cadastro. Você não informa nome, e-mail,
            telefone ou qualquer outro dado pessoal para usá-lo.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            2. Dados acessados
          </h2>
          <p>O Quanto Paguei acessa o seguinte:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-foreground">Câmera:</strong> usada
              exclusivamente para ler o QR Code da nota fiscal e códigos de
              barras de produtos. Nenhuma imagem é gravada ou enviada para
              qualquer lugar.
            </li>
            <li>
              <strong className="text-foreground">Link da nota fiscal:</strong>{" "}
              ao escanear o QR Code, o link da NFC-e é enviado a um servidor de
              consulta configurável (por padrão,{" "}
              <strong className="text-foreground">nfce.edilson.dev</strong>),
              que extrai os itens da nota junto à SEFAZ e mantém um cache das
              notas consultadas para acelerar consultas repetidas.
            </li>
          </ul>
          <p>
            A consulta pode conter identificação do destinatário, como nome e
            CPF, conforme o que a SEFAZ disponibiliza. Alguns estados mascaram
            esses dados. O serviço não garante que todas as notas venham sem
            identificação. O HTML e os dados consultados podem ficar no cache.
          </p>
          <p>
            O servidor também registra o IP de origem, o identificador técnico
            do aplicativo ou navegador (user-agent), o resultado da consulta e
            o tempo de processamento para operar e diagnosticar o serviço.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            3. Armazenamento dos dados
          </h2>
          <p>
            Todas as suas compras, produtos e preços ficam armazenados{" "}
            <strong className="text-foreground">
              localmente no seu aparelho
            </strong>
            , em arquivos JSON no espaço do próprio aplicativo. Preços
            registrados manualmente, favoritos, preços desejados, vínculos e
            grupos não são sincronizados com um serviço de conta. As notas
            importadas passam pelo servidor descrito na seção anterior.
          </p>
          <p>
            Você pode exportar e importar um arquivo de backup. O arquivo fica
            sob seu controle e você decide onde guardá-lo.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            4. Consulta a bases de dados externas
          </h2>
          <p>
            Para completar o nome e a marca dos produtos, o app consulta o{" "}
            <strong className="text-foreground">Open Food Facts</strong> a
            partir do código de barras (EAN) de cada item. Apenas o código de
            barras é enviado nessa consulta. O serviço consultado também recebe
            dados técnicos da conexão, como o endereço IP. A busca pode usar o
            servidor configurado no app ou a API pública do Open Food Facts.
            Consulte também a política de privacidade do serviço em
            openfoodfacts.org.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            5. Compartilhamento com terceiros
          </h2>
          <p>
            O link da nota é enviado ao servidor de NFC-e, que acessa a SEFAZ.
            A consulta de nomes e marcas usa o Open Food Facts. Não vendemos
            seus dados nem os usamos para publicidade ou rastreamento entre
            aplicativos. Ao exportar um backup, você escolhe o destino e o
            serviço usado para compartilhar o arquivo.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            6. Coleta de dados e analytics
          </h2>
          <p>
            Não há SDK de publicidade, analytics ou rastreamento no app.
            A coleta no servidor se limita às consultas e aos registros
            técnicos descritos nesta política, para o funcionamento do serviço.
          </p>
          <p>
            Os dados locais ficam até você apagá-los pelo app ou remover o
            aplicativo. Backups exportados precisam ser apagados no destino em
            que foram salvos. O backup do próprio iPhone pode incluir os dados
            do app, conforme seus ajustes do iOS.
          </p>
          <p>
            O cache de notas e os registros do servidor não têm exclusão
            automática por prazo. Apagar dados no iPhone não apaga esse cache.
            Você pode solicitar acesso ou exclusão pelo e-mail
            contato@edilson.dev, informando a chave ou o link da nota para
            localizar o registro. Não envie senhas ou documentos pessoais por
            e-mail. Se usar outro servidor nos ajustes, a retenção e a exclusão
            ficam sujeitas às regras do responsável por esse servidor.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            7. Tecnologia
          </h2>
          <p>
            O Quanto Paguei é desenvolvido nativamente com SwiftUI, usa o
            VisionKit da Apple para a leitura de códigos e armazena os dados
            localmente em JSON, sem dependências externas de coleta de dados.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            8. Privacidade de crianças
          </h2>
          <p>
            O Quanto Paguei não é direcionado a crianças menores de 13 anos. O
            aplicativo não coleta intencionalmente informações de crianças.
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
          &copy; {new Date().getFullYear()} Quanto Paguei. Todos os direitos
          reservados.
        </div>
      </section>
    </div>
  );
};

export default QuantoPagueiPrivacyIos;
