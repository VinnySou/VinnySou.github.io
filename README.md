# Portfólio — Vinícius de Souza Silva

Site pessoal em HTML, CSS e JavaScript puros (sem build step), bilíngue (PT/EN),
hospedado no GitHub Pages.

## Estrutura

```
index.html      marcação e conteúdo (com chaves data-i18n para tradução)
css/style.css   design system, layout e o efeito de vidro (liquid glass)
js/main.js      dicionário de tradução PT/EN, scrollspy, menu mobile, animações
assets/         favicon
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
