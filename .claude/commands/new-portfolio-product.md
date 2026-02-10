# Novo Produto para o Portfolio

Crie uma nova página de produto para o portfolio seguindo o padrão do Niver (`src/pages/NiverApp.tsx`).

O usuário vai fornecer informações sobre o produto. Pergunte o que faltar.

## Informações necessárias

1. **Nome do produto** (ex: "Niver")
2. **Subtítulo** (ex: "Rastreador de Aniversários")
3. **Descrição curta** para o hero
4. **Ícone do app** — o usuário deve fornecer o arquivo `.png`. Mova para `public/assets/`
5. **Plataformas** — iOS, Android ou ambas
6. **Lista de funcionalidades** — nome + descrição de cada feature
7. **Texto da política de privacidade** — dados coletados, armazenamento, tecnologia usada
8. **Email de suporte** (padrão: `contato@edilson.dev`)

## Passos para implementar

1. **Mover o ícone** para `public/assets/<slug>-icon.png`

2. **Criar página do produto** em `src/pages/<NomeProduto>App.tsx`:
   - Hero: ícone (rounded-[1.75rem]), nome, subtítulo, descrição, link de volta para `/portfolio`
   - Features: grid de cards com ícones do lucide-react
   - Seção `#privacy`: links para as políticas por plataforma
   - Suporte: email de contato
   - Usar as classes do design system: `bg-gradient-hero`, `bg-section`, `shadow-card`, `shadow-glow`, `transition-smooth`, `text-hero-foreground`, `text-primary`, `text-muted-foreground`

3. **Criar páginas de privacidade** (uma por plataforma):
   - `src/pages/<NomeProduto>Privacy<Plataforma>.tsx`
   - Seções: Sobre, Dados acessados, Armazenamento, Compartilhamento, Analytics, Crianças, Alterações, Contato
   - iOS: mencionar SwiftUI/SwiftData/iCloud se aplicável
   - Android: mencionar Room/SQLite se aplicável
   - Rotas: `/portfolio/<slug>/privacy/ios` e `/portfolio/<slug>/privacy/android`

4. **Adicionar card ao Portfolio** em `src/pages/Portfolio.tsx`:
   - Adicionar entrada no array `projects`: `{ name, subtitle, icon, href }`

5. **Registrar rotas** em `src/App.tsx`:
   - Importar os novos componentes
   - Adicionar `<Route>` antes do catch-all `*`

6. **Atualizar CLAUDE.md**:
   - Adicionar as novas rotas na seção de Routing

7. **Verificar**: rodar `npm run build` e confirmar que não há erros

## Referência

Use `src/pages/NiverApp.tsx`, `src/pages/NiverPrivacyIos.tsx` e `src/pages/NiverPrivacyAndroid.tsx` como templates.
