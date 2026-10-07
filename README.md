# Portfólio — Vinícius de Souza Silva

Site pessoal em HTML, CSS e JavaScript puros (sem build step), bilíngue (PT/EN),
hospedado no GitHub Pages.

## Estrutura

```
index.html      marcação e conteúdo (com chaves data-i18n para tradução)
css/style.css   tokens, vidro (liquid glass), componentes das seções e páginas de artigo
css/home.css    layout da home: topbar, hero fixo com anel 3D, cortina, tema claro
js/main.js      traduções PT/EN, anel 3D com scroll, tema, menu mobile, animações
assets/         favicon, imagem de preview social, fotos
artigos/        artigos publicados direto no site (ver artigos/README.md)
```

## Hero 3D (anel girando com o scroll)

O hero (`#hero`) é `position: fixed` e fica atrás do conteúdo; a `.curtain` (todo o
resto da página) tem `margin-top: 100vh` e desliza por cima dele ao rolar. O anel
é feito só com CSS 3D (`perspective` + `preserve-3d`, sem WebGL nem biblioteca):
8 `.panel` posicionados com `rotateY(i * 45deg) translateZ(raio)`. Em
`js/main.js`, `initRing()` liga `window.scrollY` à rotação (com suavização e uma
deriva lenta) e escurece os painéis que ficam de costas. As capas dos projetos
são SVGs inline (`<symbol id="art-...">` no topo do `<body>`), reaproveitadas no
anel e nos cards de projeto. Para trocar o conteúdo de um painel, edite o
`<figure class="panel">` correspondente no `index.html`.

O nome gigante é ajustado por `fitHeroName()` para ocupar a largura da tela, e o
botão de tema alterna `data-theme="light|dark"` no `<html>` (salvo em
`localStorage`, chave `vss-theme`).

A versão anterior do site (layout com sidebar fixa) está guardada na tag
`v1-sidebar-azul` e na branch `backup/v1-sidebar-azul`.

## Rodar localmente

```bash
python -m http.server 4321 --directory .
```

Abra `http://localhost:4321`.

## Publicar no GitHub Pages

1. Crie o repositório `VinnySou/VinnySou.github.io` (site de usuário, fica na raiz do
   domínio) ou publique como Project Page em qualquer outro nome de repositório,
   habilitando Pages em **Settings → Pages → Deploy from branch → main / (root)**.
2. `.nojekyll` já está incluso, então nenhum arquivo é ignorado pelo processamento
   padrão do Jekyll do GitHub Pages.

## Domínio próprio (quando disponível)

Adicione um arquivo `CNAME` na raiz com o domínio (ex.: `viniciussilva.dev`) e aponte
um registro `CNAME` do domínio para `vinnysou.github.io` (ou os registros `A` do
GitHub Pages, se for domínio raiz). Depois, configure o domínio em
**Settings → Pages → Custom domain**.

## Atualizar conteúdo

Todo texto visível tem uma chave `data-i18n` no HTML e sua tradução em
`js/main.js` (objetos `i18n.pt` e `i18n.en`). Para atualizar um texto, edite os
dois idiomas juntos para não ficarem dessincronizados.

**Importante:** sempre que `js/main.js` ou `css/style.css` mudar, incremente o
`?v=N` no final do `<link>`/`<script>` que os referencia, em **todos** os HTMLs
que os carregam (`index.html`, `artigos/index.html`, `artigos/_template.html`,
e qualquer artigo publicado). O GitHub Pages manda esses arquivos com
`Cache-Control: max-age=600`, então sem trocar a versão o navegador de quem já
visitou o site pode continuar mostrando o conteúdo antigo por até 10 minutos
após um push.

## Publicar um artigo

Ver [`artigos/README.md`](artigos/README.md): artigos nativos (páginas hospedadas
aqui) e cards linkando para posts externos (Databasers, LinkedIn) seguem o mesmo
passo a passo.

## Seção "Mais no GitHub"

A lista em `#projetos` sob "Mais no GitHub" **não é hardcoded**: `initOtherProjects()`
em `js/main.js` busca `api.github.com/users/VinnySou/repos` no carregamento da
página e monta a lista a partir daí (nome + descrição do repositório). Qualquer
repositório público novo aparece sozinho, sem editar o site — só cuidar para o
repositório ter uma descrição decente (`gh repo edit <repo> --description "..."`).

Os 5 projetos em destaque (cards grandes com Problema/Abordagem/Resultado) **não**
entram nessa lista automática — ficam de fora via `FEATURED_REPOS` no topo do
`main.js`, porque esse texto é escrito à mão e não dá pra gerar bem a partir só do
nome/descrição do repositório. Pra promover um projeto novo a card principal, é
edição manual em `index.html` mesmo (adicionar o nome dele em `FEATURED_REPOS`
evita duplicar na lista automática).

`HIDDEN_REPOS` no mesmo arquivo esconde repositórios que não têm conteúdo pra
mostrar (o site em si, repositórios de teste, etc.). Se a API do GitHub estiver
fora do ar ou o limite de requisições for atingido, a lista estática que já está
no `index.html` continua visível como fallback.
