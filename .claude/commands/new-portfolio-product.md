# Novo Produto para o Portfolio

Crie uma nova página de produto para o portfolio seguindo o padrão do Niver (`src/pages/NiverApp.tsx`).

O usuário vai fornecer informações sobre o produto. Pergunte o que faltar.

## Modelo e estilo

- **Modelo:** opus
- **Cor do agente:** purple

## Informações necessárias

1. **Nome do produto** (ex: "Niver")
2. **Subtítulo** (ex: "Rastreador de Aniversários")
3. **Descrição curta** para o hero
4. **Ícone do app** — o usuário deve fornecer o arquivo `.png`. Mova para `public/assets/`
5. **Plataformas** — iOS, Android ou ambas. Se uma plataforma não estiver disponível, mostrar o ícone com `opacity-60` e texto "Em breve" (sem link)
6. **Lista de funcionalidades** — nome + descrição de cada feature
7. **Texto da política de privacidade** — dados coletados, armazenamento, tecnologia usada
8. **Email de suporte** (padrão: `contato@edilson.dev`)
9. **Desenvolvedor/Owner** (padrão: "Edilson") — usado no footer e contato da privacy policy

## Passos para implementar

1. **Mover o ícone** para `public/assets/<slug>-icon.png`

2. **Criar página do produto** em `src/pages/<NomeProduto>App.tsx`:
   - Hero: ícone (rounded-[1.75rem]), nome, subtítulo, descrição, link de volta para `/portfolio`
   - Features: grid de cards com ícones do lucide-react
   - Seção `#privacy`: links para as políticas por plataforma (plataformas indisponíveis ficam com `opacity-60` e "Em breve")
   - Seção `#support`: email de contato
   - Seção de URLs de referência: marketing, suporte, privacidade
   - Usar as classes do design system: `bg-gradient-hero`, `bg-section`, `shadow-card`, `shadow-glow`, `transition-smooth`, `text-hero-foreground`, `text-primary`, `text-muted-foreground`

3. **Criar páginas de privacidade** (uma por plataforma disponível):
   - `src/pages/<NomeProduto>Privacy<Plataforma>.tsx`
   - Seções: Sobre, Dados acessados, Armazenamento, Consulta a bases externas (se aplicável), Compartilhamento, Analytics, Tecnologia, Crianças, Alterações, Contato
   - iOS: mencionar SwiftUI/SwiftData/iCloud se aplicável
   - Android: mencionar Room/SQLite se aplicável
   - Rotas: `/portfolio/<slug>/privacy/ios` e `/portfolio/<slug>/privacy/android`
   - Rotas alternadas: `/portfolio/<slug>/ios/privacy` e `/portfolio/<slug>/android/privacy`

4. **Adicionar card ao Portfolio** em `src/pages/Portfolio.tsx`:
   - Adicionar entrada no array `projects`: `{ name, subtitle, description, icon, href, platforms }`
   - `platforms` é um array com `"ios"` e/ou `"android"`

5. **Registrar rotas** em `src/App.tsx`:
   - Importar os novos componentes
   - Adicionar `<Route>` antes do catch-all `*`
   - Incluir rotas alternadas (ex: `/portfolio/<slug>/ios/privacy`)

6. **Adicionar rotas estáticas para SEO** em `.github/workflows/pages.yml`:
   - Adicionar todas as novas rotas ao array `routes` no step "Create SPA route files"
   - Isso garante que crawlers (Google Play, App Store) recebam HTTP 200

7. **Atualizar CLAUDE.md**:
   - Adicionar as novas rotas na seção de Routing

8. **Verificar**: rodar `npm run build` e confirmar que não há erros

## Referência

Use `src/pages/NiverApp.tsx`, `src/pages/NiverPrivacyIos.tsx` e `src/pages/NiverPrivacyAndroid.tsx` como templates.
Para apps apenas iOS, use `src/pages/EstoqueDomesticoApp.tsx` como referência (Android com "Em breve").
