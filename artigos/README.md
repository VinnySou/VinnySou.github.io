# Como publicar um novo artigo

Existem dois lugares com cards de artigo:

- **`artigos/index.html`** — a lista completa, todo artigo publicado entra aqui.
- **`index.html`** (seção `#artigos` da home) — só uma prévia com os 2 mais
  recentes, com um link "Ver todos os artigos" apontando pra `artigos/index.html`.

Ao publicar um artigo novo, adicione o card em `artigos/index.html` sempre. Só
atualize também a prévia da home se o novo artigo for mais recente que os 2 que
já estão lá (aí troque o mais antigo dos dois pelo novo).

## Artigo nativo (hospedado neste site)

1. Copie `_template.html` para um novo arquivo nesta pasta, com um nome curto em
   kebab-case (ex.: `pivot-e-unpivot.html`). O link "Artigos" no topo já aponta
   para `index.html` (a listagem), não precisa mexer.
2. Preencha o título, data, tempo de leitura e o conteúdo (parágrafos em `<p>`,
   seções em `<h2>`, código em `<pre><code>`). O CSS já está pronto (classe
   `.prose` no `css/style.css`), não precisa estilizar nada.
3. Em `artigos/index.html`, dentro de `<div class="articles-list">`, adicione um
   card:

```html
<a class="article-card glass" href="seu-arquivo.html">
  <p class="article-meta"><span>DD/MM/AAAA</span> · <span>N min de leitura</span><span class="article-source">Portfólio</span></p>
  <h3>Título do artigo</h3>
  <p>Resumo de 1-2 frases.</p>
  <span class="article-link">Ler artigo &#8594;</span>
</a>
```

Repare que artigos nativos **não** levam `target="_blank"` nem `rel="noopener"`
(ficam no mesmo site), diferente dos links externos abaixo.

## Artigo no blog da Databasers ou no LinkedIn

Não precisa de página nova, só um card apontando pro link externo, em
`artigos/index.html`:

```html
<a class="article-card glass" href="URL_DO_POST" target="_blank" rel="noopener">
  <p class="article-meta"><span>DD/MM/AAAA</span> · <span>N min de leitura</span><span class="article-source">LinkedIn</span></p>
  <h3>Título do artigo</h3>
  <p>Resumo de 1-2 frases (escrito por você, não copiado do post).</p>
  <span class="article-link">Ler no LinkedIn &#8594;</span>
</a>
```

Troque `<span class="article-source">` para `Databasers`, `LinkedIn` ou o nome da
plataforma correspondente.

## Se o card também for pra prévia da home

Copie o mesmo `<a class="article-card ...">` para dentro de
`index.html`, na `<div class="articles-list">` da seção `#artigos`, e acrescente
a classe `reveal` (`class="article-card reveal glass"`) — na home os cards têm
a animação de entrada ao rolar a página, na listagem completa não.
