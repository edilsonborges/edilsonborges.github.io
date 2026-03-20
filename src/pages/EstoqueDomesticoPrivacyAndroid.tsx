import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";

const EstoqueDomesticoPrivacyAndroid = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/portfolio/estoque-domestico"
            className="inline-flex items-center gap-2 text-hero-foreground/60 hover:text-primary-glow transition-smooth mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Estoque Doméstico
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/assets/estoque-domestico-icon.png"
              alt="Estoque Doméstico"
              className="w-12 h-12 rounded-xl"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-hero-foreground">
              Política de Privacidade
            </h1>
          </div>
          <p className="text-hero-foreground/60">
            Estoque Doméstico para Android
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-3xl mx-auto prose prose-gray max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">Última atualização:</strong>{" "}
            março de 2026
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            1. Sobre o aplicativo
          </h2>
          <p>
            O <strong className="text-foreground">Estoque Doméstico</strong> é
            um aplicativo gratuito de controle de estoque e validade de
            alimentos para Android, desenvolvido por Edilson. O app permite
            escanear códigos de barras, registrar itens da despensa, controlar
            datas de validade e receber alertas antes dos produtos vencerem.
          </p>
          <p>
            O Estoque Doméstico é totalmente gratuito, não exibe anúncios e não
            possui compras dentro do aplicativo.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            2. Autenticação e conta
          </h2>
          <p>
            O Estoque Doméstico oferece login via{" "}
            <strong className="text-foreground">Iniciar sessão com o Google</strong>.
            Ao criar uma conta, coletamos apenas as informações fornecidas pelo
            provedor de autenticação (nome e e-mail) para identificar sua conta
            e sincronizar seus dados.
          </p>
          <p>
            Não armazenamos senhas. A autenticação é gerenciada inteiramente
            pelo Google.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            3. Dados acessados
          </h2>
          <p>
            O Estoque Doméstico pode solicitar acesso às seguintes permissões:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-foreground">Câmera:</strong> Para
              escanear códigos de barras de produtos alimentícios. O acesso é
              feito apenas quando você inicia o scanner manualmente.
            </li>
            <li>
              <strong className="text-foreground">Notificações:</strong> Para
              enviar alertas locais sobre produtos próximos da data de validade.
              Os alertas são agendados localmente no seu dispositivo.
            </li>
          </ul>
          <p>
            Nenhuma dessas permissões é obrigatória. O app funciona normalmente
            sem elas — você pode cadastrar itens manualmente.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            4. Armazenamento dos dados
          </h2>
          <p>
            Os dados do Estoque Doméstico (nomes de produtos, datas de validade,
            quantidades e locais de armazenamento) são armazenados{" "}
            <strong className="text-foreground">
              localmente no seu dispositivo
            </strong>{" "}
            utilizando Room/SQLite e também sincronizados com a nuvem para
            permitir backup e acesso entre dispositivos vinculados à sua conta.
          </p>
          <p>
            Os dados na nuvem são associados exclusivamente à sua conta e não
            são acessíveis por outros usuários.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            5. Consulta a bases de dados externas
          </h2>
          <p>
            Ao escanear um código de barras, o app pode consultar a API pública
            do{" "}
            <strong className="text-foreground">Open Food Facts</strong>{" "}
            (world.openfoodfacts.org) para buscar informações do produto como
            nome, marca e categoria. Apenas o código de barras é enviado nessa
            consulta — nenhum dado pessoal é transmitido.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            6. Compartilhamento com terceiros
          </h2>
          <p>
            O Estoque Doméstico{" "}
            <strong className="text-foreground">
              não compartilha, vende ou transfere
            </strong>{" "}
            nenhum dado pessoal para terceiros. Nenhuma informação pessoal sai
            do seu dispositivo.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            7. Coleta de dados e analytics
          </h2>
          <p>
            O Estoque Doméstico{" "}
            <strong className="text-foreground">não utiliza</strong> ferramentas
            de analytics, rastreamento ou coleta de dados. Não há SDKs de
            terceiros para publicidade ou análise de comportamento.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            8. Tecnologia
          </h2>
          <p>
            O Estoque Doméstico para Android é desenvolvido com Kotlin e
            Jetpack Compose, utilizando Room/SQLite para armazenamento local.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            9. Exclusão de conta e dados
          </h2>
          <p>
            Você pode solicitar a exclusão da sua conta e de todos os dados
            associados a qualquer momento. Para isso, envie um e-mail para{" "}
            <a
              href="mailto:contato@edilson.dev"
              className="text-primary hover:underline"
            >
              contato@edilson.dev
            </a>{" "}
            com o assunto{" "}
            <strong className="text-foreground">
              "Exclusão de conta — Estoque Doméstico"
            </strong>
            , informando o e-mail associado à sua conta.
          </p>
          <p>
            Ao receber sua solicitação, iremos:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Excluir permanentemente sua conta e todos os dados armazenados na
              nuvem (produtos, configurações e informações de perfil).
            </li>
            <li>
              Confirmar a exclusão por e-mail em até 7 dias úteis.
            </li>
          </ul>
          <p>
            Os dados armazenados localmente no seu dispositivo não são afetados
            pela exclusão da conta na nuvem. Para removê-los, desinstale o
            aplicativo.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            10. Privacidade de crianças
          </h2>
          <p>
            O Estoque Doméstico não é direcionado a crianças menores de 13
            anos. O aplicativo não coleta intencionalmente informações de
            crianças. Como nenhum dado pessoal é transmitido para fora do
            dispositivo, não há risco de exposição de dados de menores.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            11. Alterações nesta política
          </h2>
          <p>
            Esta política de privacidade pode ser atualizada ocasionalmente.
            Qualquer alteração será publicada nesta mesma página com a data de
            atualização revisada.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            12. Contato
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
          &copy; {new Date().getFullYear()} Estoque Doméstico. Todos os
          direitos reservados.
        </div>
      </section>
    </div>
  );
};

export default EstoqueDomesticoPrivacyAndroid;
