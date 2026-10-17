import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";

const sections = [
  { title: "1. Responsável e finalidade", paragraphs: [
    "O Estoque Doméstico para iOS é desenvolvido por Edilson Borges. O contato para privacidade e direitos sobre seus dados é contato@edilson.dev. O app organiza alimentos, validade, compras e consumo, com autenticação e sincronização entre aparelhos. É gratuito, sem anúncios ou compras internas.",
    "Usamos os dados necessários para executar o serviço solicitado, proteger as contas e atender pedidos e obrigações aplicáveis. Recursos opcionais usam as informações que você escolhe fornecer e as permissões concedidas no iOS. Não vendemos seus dados nem usamos rastreamento entre aplicativos para publicidade."
  ]},
  { title: "2. Informações tratadas", paragraphs: [
    "A conta Firebase pode conter identificador, nome, e-mail, foto, provedor de login Apple ou Google, criação da conta e últimos eventos de autenticação disponíveis. Ao escolher Continuar sem conta, o Firebase cria uma sessão anônima com identificador próprio para associar seus dados. Essa sessão e seus dados também podem ser excluídos pelo app. Não recebemos sua senha da Apple ou do Google.",
    "Registramos os dados inseridos no app: estoque, validade, quantidades, preços, consumo, descarte, perfil da casa, locais salvos e suas coordenadas, notificações e feedback. Perfis antigos também podem conter restrições alimentares informadas pelo usuário.",
    "As notas fiscais podem conter URL ou chave de consulta, produtos, valores, estabelecimento e, quando presentes no documento consultado, nome e CPF do destinatário. Não é necessário informar CPF para criar uma conta."
  ]},
  { title: "3. Permissões do aparelho", paragraphs: [
    "A câmera é usada para ler códigos de barras e QR Codes e para fotos escolhidas por você. Fotos de produtos podem ser enviadas ao catálogo compartilhado. As notificações de validade são agendadas no aparelho. A localização permite alertas de proximidade dos locais salvos. Você controla essas permissões nos Ajustes do iOS e pode cadastrar itens manualmente."
  ]},
  { title: "4. Armazenamento e serviços utilizados", paragraphs: [
    "O app mantém arquivos JSON e cache no aparelho e sincroniza dados pessoais com Firebase Authentication e Cloud Firestore, do Google. Arquivos privados podem usar Firebase Storage. O acesso aos dados privados é limitado à conta autenticada. Nome, informações e fotos do catálogo de produtos são compartilhados entre usuários e não devem conter dados pessoais.",
    "A consulta de produtos pode enviar código de barras ou nome do produto ao serviço Open Food Facts, ao servidor OFFLocal, ao Cosmos Bluesoft e à busca de imagens Serper. O processamento de NFC-e envia a URL da nota ao serviço nfce.edilson.dev, que consulta a origem fiscal e pode manter cache e histórico da consulta. Esses serviços recebem também os dados técnicos necessários às conexões. Não enviamos intencionalmente seu UID ou e-mail aos serviços de catálogo.",
    "Os fornecedores de infraestrutura e autenticação processam dados para prestar seus serviços, inclusive com processamento fora do Brasil conforme seus termos e mecanismos de proteção aplicáveis. Não prometemos que todas as cópias ou todos os serviços operem exclusivamente no Brasil."
  ]},
  { title: "5. Registros técnicos e retenção", paragraphs: [
    "O app não possui integração de Google Analytics ou Firebase Crashlytics. A infraestrutura pode registrar solicitações, horários, endereços IP, informações técnicas e erros para funcionamento e segurança. Versões anteriores do serviço de busca também gravaram UID e código pesquisado em logs. Esses registros não constituem um histórico completo de sessões ou logins.",
    "Os logs do bucket padrão do projeto Google Cloud têm retenção configurada de 30 dias. Os dados operacionais da conta permanecem enquanto ela é utilizada ou até uma solicitação de exclusão, ressalvadas obrigações aplicáveis. Um comprovante técnico de exclusão, sem nome ou e-mail, expira em sete dias.",
    "A infraestrutura Storage mantém objetos excluídos sob retenção técnica de sete dias. O Firebase informa retenção de IPs de autenticação por algumas semanas e remoção de outros dados de autenticação dos sistemas ativos e backups em até 180 dias após o início da exclusão. Cópias de segurança e logs dos fornecedores seguem suas políticas; exclusão no app não significa eliminação instantânea de toda cópia técnica."
  ]},
  { title: "6. Acesso, cópia e outros direitos", paragraphs: [
    "Você pode solicitar confirmação do tratamento, acesso, correção e os demais direitos previstos na LGPD, sem custo, pelo e-mail contato@edilson.dev. Podemos confirmar sua identidade para proteger a conta e informar os motivos quando uma providência não puder ser adotada de imediato.",
    "A partir da versão 1.1.2, Ajustes > Meus dados permite receber uma cópia dos dados pessoais acessíveis à conta e dos dados locais do aparelho. O arquivo informa as fontes e limitações, incluindo registros técnicos disponíveis. Não contém senhas ou tokens de autenticação e não promete histórico de acessos que não esteja disponível. Para esclarecimentos ou dados mantidos por serviços externos, use o contato de privacidade."
  ]},
  { title: "7. Exclusão de conta e dados", paragraphs: [
    "A partir da versão 1.1.2, abra Ajustes > Meus dados > Excluir minha conta. O app apresenta as consequências e pede confirmação e nova autenticação quando necessária. O servidor bloqueia a conta, remove seus documentos e subcoleções pessoais, feedback e arquivos privados e encerra a conta Firebase. Se houver interrupção, o pedido pode ser retomado e consultado até a confirmação.",
    "Após confirmar a remoção na nuvem, o aparelho em que o pedido foi realizado limpa seus dados privados, cache e credenciais. Cópias exportadas por você e arquivos em outros aparelhos não podem ser removidos remotamente por esse fluxo. O catálogo de produtos e fotos compartilhado, sem vínculo de autoria com a conta, permanece disponível. Não inclua dados pessoais nesse catálogo; avise o suporte se precisar tratar um conteúdo identificável.",
    "Nas versões anteriores ou se não conseguir usar o app, envie o pedido ao contato de privacidade, informando o e-mail da conta. Não envie sua senha. Registros técnicos, retenções dos fornecedores e eventual conservação obrigatória seguem os limites descritos nesta política. Caches de NFC-e independentes podem exigir identificação da nota para localizar a consulta."
  ]},
  { title: "8. Crianças e atualizações", paragraphs: [
    "O aplicativo não é direcionado a crianças menores de 13 anos. O perfil da casa pode registrar quantidades de adultos e crianças, sem exigir o nome ou a identidade de cada integrante. Não inclua informações pessoais de terceiros sem a devida autorização.",
    "Esta política pode ser atualizada para refletir alterações no app e nos serviços. A data da última revisão é informada nesta página."
  ]}
];

const EstoqueDomesticoPrivacyIos = () => (
  <div className="min-h-screen">
    <section className="bg-gradient-hero px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <Link to="/portfolio/estoque-domestico" className="inline-flex items-center gap-2 text-hero-foreground/60 hover:text-primary-glow transition-smooth mb-10">
          <ArrowLeft className="h-4 w-4" />Estoque Doméstico
        </Link>
        <div className="flex items-center gap-4 mb-4">
          <img src="/assets/estoque-domestico-icon.png" alt="Estoque Doméstico" className="w-12 h-12 rounded-xl" />
          <h1 className="text-3xl md:text-4xl font-bold text-hero-foreground">Política de Privacidade</h1>
        </div>
        <p className="text-hero-foreground/60">Estoque Doméstico para iOS (iPhone e iPad)</p>
      </div>
    </section>
    <section className="px-4 py-16 bg-white">
      <div className="max-w-3xl mx-auto prose prose-gray max-w-none space-y-6 text-muted-foreground leading-relaxed">
        <p><strong className="text-foreground">Última atualização:</strong> 17 de outubro de 2026</p>
        {sections.map(section => (
          <div key={section.title} className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground mt-8">{section.title}</h2>
            {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </div>
        ))}
        <div className="bg-section rounded-xl p-6 mt-4">
          <p className="text-foreground font-medium">Responsável: Edilson Borges</p>
          <a href="mailto:contato@edilson.dev" className="inline-flex items-center gap-2 text-primary hover:underline mt-2">
            <Mail className="h-4 w-4" />contato@edilson.dev
          </a>
        </div>
      </div>
    </section>
    <section className="bg-section px-4 py-8">
      <div className="max-w-3xl mx-auto text-center text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Estoque Doméstico. Todos os direitos reservados.</div>
    </section>
  </div>
);

export default EstoqueDomesticoPrivacyIos;
