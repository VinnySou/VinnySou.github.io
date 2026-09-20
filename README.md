# Portfólio — Vinícius de Souza Silva

Site pessoal em HTML, CSS e JavaScript puros (sem build step), bilíngue (PT/EN),
hospedado no GitHub Pages.

## Estrutura

```
index.html      marcação e conteúdo (com chaves data-i18n para tradução)
css/style.css   design system, layout e o efeito de vidro (liquid glass)
js/main.js      dicionário de tradução PT/EN, scrollspy, menu mobile, animações
assets/         favicon
artigos/        artigos publicados direto no site (ver artigos/README.md)
```

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
