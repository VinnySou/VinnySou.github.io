# Como publicar um novo artigo

## Artigo nativo (hospedado neste site)

1. Copie `_template.html` para um novo arquivo nesta pasta, com um nome curto em
   kebab-case (ex.: `pivot-e-unpivot.html`).
2. Preencha o título, data, tempo de leitura e o conteúdo (parágrafos em `<p>`,
   seções em `<h2>`, código em `<pre><code>`). O CSS já está pronto (classe `.prose`
   no `css/style.css`), não precisa estilizar nada.
3. No `index.html`, dentro de `<div class="articles-list">`, adicione um card:

```html
<a class="article-card reveal glass" href="artigos/seu-arquivo.html">
  <p class="article-meta"><span>DD/MM/AAAA</span> · <span>N min de leitura</span><span class="article-source">Portfólio</span></p>
  <h3>Título do artigo</h3>
  <p>Resumo de 1-2 frases.</p>
  <span class="article-link">Ler artigo &#8594;</span>
</a>
```

Repare que artigos nativos **não** levam `target="_blank"` nem `rel="noopener"`
(ficam no mesmo site), diferente dos links externos abaixo.

## Artigo no blog da Databasers ou no LinkedIn

Não precisa de página nova, só um card apontando pro link externo:

```html
<a class="article-card reveal glass" href="URL_DO_POST" target="_blank" rel="noopener">
  <p class="article-meta"><span>DD/MM/AAAA</span> · <span>N min de leitura</span><span class="article-source">LinkedIn</span></p>
  <h3>Título do artigo</h3>
  <p>Resumo de 1-2 frases (escrito por você, não copiado do post).</p>
  <span class="article-link">Ler no LinkedIn &#8594;</span>
</a>
```

Troque `<span class="article-source">` para `Databasers`, `LinkedIn` ou o nome da
plataforma correspondente.
