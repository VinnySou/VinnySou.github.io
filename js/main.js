(function () {
  "use strict";

  var i18n = {
    pt: {
      "nav.about": "Sobre",
      "nav.experience": "Experiência",
      "nav.projects": "Projetos",
      "nav.articles": "Artigos",
      "nav.contact": "Contato",

      "hero.eyebrow": "Analista &amp; Engenheiro de Dados",
      "hero.sub.short": "Dados brutos em decisões de negócio: pipelines, modelagem e dashboards.",
      "hero.stat.years.unit": "anos",
      "hero.stat.projects.count": "5",
      "hero.stat.projects.word": "projetos",

      "about.eyebrow": "01 · Sobre",
      "about.p1": "Sou trainee de dados na Databasers, uma consultoria especializada, onde atuo de ponta a ponta: da ingestão à entrega do dashboard. No dia a dia, oriento pipelines no Azure Data Factory e no Microsoft Fabric, e atuo como DBA de bancos SQL Server (on-premises e Azure SQL): administração, monitoramento, otimização de performance e construção de soluções analíticas em Power BI.",
      "about.p2": "Estudo Ciência da Computação na FAESA, com conclusão prevista para 2027, e sou certificado em Microsoft Azure Fundamentals (AZ-900). Estou me preparando para a certificação DP-700 (Fabric Data Engineer Associate).",
      "about.p3": "Comecei em help desk, migrei para dados através de um estágio e segui como trainee. Hoje busco uma posição de Analista ou Engenheiro de Dados onde eu possa assumir mais responsabilidade sobre arquitetura e qualidade de dados.",
      "about.fact.location": "Localização",
      "about.fact.role": "Cargo atual",
      "about.fact.role.value": "Trainee de Dados, Databasers",
      "about.fact.education": "Formação",
      "about.fact.education.value": "Ciência da Computação, FAESA (cursando)",
      "about.fact.cert": "Certificação",

      "skills.cloud": "Cloud &amp; Orquestração",
      "skills.db": "Banco de Dados",
      "skills.db.modeling": "Modelagem Dimensional",
      "skills.bi": "BI &amp; Analytics",
      "skills.lang": "Linguagens",

      "exp.eyebrow": "02 · Experiência",
      "exp.databasers.trainee.date": "Desde set/2025",
      "exp.databasers.trainee.role": "Trainee de Dados · Databasers",
      "exp.databasers.trainee.desc": "Desenvolvimento e orquestração de pipelines com Azure Data Factory e Microsoft Fabric, integrando ambientes on-premises e Azure. Administração e otimização de performance de SQL Server. Modelagem de dados e consultas complexas para ETL e dashboards Power BI. Automações em Python e C#.",
      "exp.databasers.intern.date": "Dez/2024 a set/2025",
      "exp.databasers.intern.role": "Estagiário de Dados · Databasers",
      "exp.databasers.intern.desc": "Apoio no desenvolvimento de consultas SQL e dashboards Power BI, suporte à administração de SQL Server e participação em projetos de automação e integração de sistemas.",
      "exp.inprex.date": "Mar/2022 a dez/2024",
      "exp.inprex.role": "Suporte Técnico · InPrex Tecnologia",
      "exp.inprex.desc": "Help desk e atendimento ao cliente, instalação e configuração de equipamentos. Base de resolução de problemas que levou à transição para a área de dados.",

      "proj.eyebrow": "03 · Projetos",
      "proj.lead": "Cinco projetos que cobrem o ciclo completo: ingestão, modelagem, banco transacional, dashboard e machine learning.",

      "proj.ia.tag": "Machine Learning",
      "proj.ia.title": "Classificação de Células com PyTorch",
      "proj.ia.problem": "Classificar imagens de células sanguíneas em 4 tipos ligados à Leucemia Linfoblástica Aguda, a partir de um dataset público de 3.242 imagens.",
      "proj.ia.approach": "Fine-tuning de uma EfficientNet-B0 em PyTorch, com early stopping e split treino/validação/teste, servido por uma interface Streamlit para classificar novas imagens.",
      "proj.ia.result": "99% de acurácia no conjunto de teste (487 imagens nunca vistas no treino), com precisão e recall acima de 0.95 em todas as 4 classes.",
      "proj.label.problem": "Problema.",
      "proj.label.approach": "Abordagem.",
      "proj.label.result": "Resultado.",

      "proj.olist.tag": "Engenharia de Dados",
      "proj.olist.title": "Pipeline ETL e Modelagem Dimensional",
      "proj.olist.problem": "Dataset de e-commerce com 100 mil pedidos, espalhado em 8 tabelas normalizadas. Responder perguntas de negócio exigia juntar tudo a cada consulta.",
      "proj.olist.approach": "Pipeline em Python (extract, transform, load) construindo um star schema com 4 dimensões e 2 fatos, testado automaticamente e publicado em SQLite, Parquet e CSV.",
      "proj.olist.result": "Modelo pronto para o Power BI sem transformação adicional, com 5 consultas de negócio documentadas usando CTEs e funções de janela.",

      "proj.sql.tag": "SQL Avançado",
      "proj.sql.title": "Banco Transacional de Vendas",
      "proj.sql.problem": "Mostrar profundidade em T-SQL além de consultas simples: escrita transacional segura, hierarquias organizacionais e tuning de performance.",
      "proj.sql.approach": "Schema OLTP normalizado, stored procedure transacional com row locking e rollback automático, CTE recursiva para organograma e segmentação RFM com funções de janela.",
      "proj.sql.result": "Toda a lógica de negócio validada automaticamente em CI, incluindo o comportamento de rollback sob falha de estoque.",

      "proj.adf.tag": "Cloud &amp; Orquestração",
      "proj.adf.title": "Ingestão com Azure Data Factory",
      "proj.adf.problem": "Demonstrar orquestração de pipelines em nuvem no mesmo formato usado em produção, versionado como código.",
      "proj.adf.approach": "Pipeline ADF que busca o câmbio USD/BRL na API pública do Banco Central diariamente e grava em Azure SQL via upsert idempotente. Infraestrutura em Bicep, segredo protegido no Key Vault via identidade gerenciada.",
      "proj.adf.result": "Repositório pronto para ser conectado direto a um Data Factory real via integração Git.",

      "proj.streamlit.tag": "Análise de Dados",
      "proj.streamlit.title": "Análise do Mercado de TI",
      "proj.streamlit.problem": "Painel acadêmico com caminho de arquivo fixo no computador de um integrante, inutilizável por qualquer outra pessoa.",
      "proj.streamlit.approach": "Reescrevi o carregamento de dados com upload dinâmico, corrigi a documentação e adicionei o arquivo de dependências que faltava.",
      "proj.streamlit.result": "Projeto agora roda para qualquer pessoa, com filtros interativos sobre a Stack Overflow Developer Survey de 65 mil respostas.",

      "proj.other.title": "Mais no GitHub",
      "proj.other.futebol_mysql": " · CRUD e relatórios de campeonato de futebol em Python e MySQL",
      "proj.other.futebol": " · o mesmo domínio migrado para MongoDB, com o script de migração incluído",
      "proj.other.barbearia": " · sistema desktop em C# / .NET para gestão de barbearia",

      "articles.eyebrow": "04 · Artigos",
      "articles.lead": "Escrevo sobre SQL Server e dados: aqui no portfólio, no blog da Databasers e no LinkedIn.",
      "articles.read": "Ler no blog da Databasers &#8594;",
      "articles.readNative": "Ler artigo &#8594;",
      "articles.more": "Ver mais artigos no blog da Databasers &#8594;",
      "articles.seeAll": "Ver todos os artigos &#8594;",
      "articlesPage.eyebrow": "Artigos",
      "articlesPage.title": "Tudo que já escrevi",
      "articlesPage.lead": "Posts nativos do portfólio e publicações no blog da Databasers, mais recentes primeiro.",
      "articles.dimensional.date": "20/09/2026",
      "articles.dimensional.read": "7 min de leitura",
      "articles.dimensional.title": "Modelagem dimensional na prática: as decisões por trás do meu pipeline ETL",
      "articles.dimensional.excerpt": "Por que duas tabelas fato em vez de uma, por que surrogate keys, e o que isso muda na hora de montar um dashboard sem números errados.",
      "articles.varbinary.date": "15/05/2026",
      "articles.varbinary.read": "10 min de leitura",
      "articles.varbinary.title": "Como gerar arquivos usando colunas varbinary como fonte — SQL Server",
      "articles.varbinary.excerpt": "Como guardar e servir arquivos (PDFs, imagens, documentos) direto de colunas VARBINARY(MAX), centralizando backup, controle de acesso e auditoria no próprio banco.",
      "articles.pivot.date": "07/01/2026",
      "articles.pivot.read": "15 min de leitura",
      "articles.pivot.title": "PIVOT e UNPIVOT — o que é e como usar",
      "articles.pivot.excerpt": "Como usar os operadores PIVOT e UNPIVOT do SQL Server para transformar linhas em colunas (e o caminho inverso) direto na query, sem gambiarra de CASE WHEN nem tratamento extra no ETL.",

      "contact.eyebrow": "05 · Contato",
      "contact.title": "Vamos conversar",
      "contact.lead": "Aberto a oportunidades de Analista e Engenheiro de Dados. Responda direto por e-mail ou LinkedIn.",

      "footer.built": "Cariacica, ES · Brasil"
    },
    en: {
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.articles": "Articles",
      "nav.contact": "Contact",

      "hero.eyebrow": "Data Analyst &amp; Data Engineer",
      "hero.sub.short": "Raw data into business decisions: pipelines, modeling and dashboards.",
      "hero.stat.years.unit": "years",
      "hero.stat.projects.count": "5",
      "hero.stat.projects.word": "projects",

      "about.eyebrow": "01 · About",
      "about.p1": "I'm a data trainee at Databasers, a specialized data consultancy, working end to end: from ingestion to the finished dashboard. Day to day, I orchestrate pipelines in Azure Data Factory and Microsoft Fabric, and act as DBA for SQL Server databases (on-premises and Azure SQL): administration, monitoring, performance tuning, and building analytical solutions in Power BI.",
      "about.p2": "I'm studying Computer Science at FAESA, graduating in 2027, and I'm Microsoft Azure Fundamentals (AZ-900) certified. I'm currently preparing for the DP-700 certification (Fabric Data Engineer Associate).",
      "about.p3": "I started in help desk, moved into data through an internship, and continued as a trainee. Now I'm looking for a Data Analyst or Data Engineer role where I can take on more ownership of architecture and data quality.",
      "about.fact.location": "Location",
      "about.fact.role": "Current role",
      "about.fact.role.value": "Data Trainee, Databasers",
      "about.fact.education": "Education",
      "about.fact.education.value": "Computer Science, FAESA (in progress)",
      "about.fact.cert": "Certification",

      "skills.cloud": "Cloud &amp; Orchestration",
      "skills.db": "Databases",
      "skills.db.modeling": "Dimensional Modeling",
      "skills.bi": "BI &amp; Analytics",
      "skills.lang": "Languages",

      "exp.eyebrow": "02 · Experience",
      "exp.databasers.trainee.date": "Since Sep/2025",
      "exp.databasers.trainee.role": "Data Trainee · Databasers",
      "exp.databasers.trainee.desc": "Building and orchestrating pipelines with Azure Data Factory and Microsoft Fabric, integrating on-premises and Azure environments. Administering and tuning SQL Server performance. Data modeling and complex queries supporting ETL and Power BI dashboards. Automation with Python and C#.",
      "exp.databasers.intern.date": "Dec/2024 to Sep/2025",
      "exp.databasers.intern.role": "Data Intern · Databasers",
      "exp.databasers.intern.desc": "Supported SQL query development and Power BI dashboards, assisted with SQL Server administration, and took part in automation and systems integration projects.",
      "exp.inprex.date": "Mar/2022 to Dec/2024",
      "exp.inprex.role": "Technical Support · InPrex Tecnologia",
      "exp.inprex.desc": "Help desk and customer support, equipment installation and configuration. The troubleshooting foundation that led to the move into data.",

      "proj.eyebrow": "03 · Projects",
      "proj.lead": "Five projects covering the full cycle: ingestion, modeling, transactional database, dashboard and machine learning.",

      "proj.ia.tag": "Machine Learning",
      "proj.ia.title": "Blood Cell Classification with PyTorch",
      "proj.ia.problem": "Classifying blood cell images into 4 types linked to Acute Lymphoblastic Leukemia, from a public dataset of 3,242 images.",
      "proj.ia.approach": "Fine-tuned an EfficientNet-B0 in PyTorch, with early stopping and a train/validation/test split, served through a Streamlit app to classify new images.",
      "proj.ia.result": "99% accuracy on the test set (487 images never seen during training), with precision and recall above 0.95 across all 4 classes.",
      "proj.label.problem": "Problem.",
      "proj.label.approach": "Approach.",
      "proj.label.result": "Result.",

      "proj.olist.tag": "Data Engineering",
      "proj.olist.title": "ETL Pipeline and Dimensional Modeling",
      "proj.olist.problem": "An e-commerce dataset with 100k orders spread across 8 normalized tables. Answering business questions meant joining everything on every query.",
      "proj.olist.approach": "A Python pipeline (extract, transform, load) building a star schema with 4 dimensions and 2 fact tables, automatically tested and published to SQLite, Parquet and CSV.",
      "proj.olist.result": "A model ready for Power BI with no further transformation, plus 5 documented business queries using CTEs and window functions.",

      "proj.sql.tag": "Advanced SQL",
      "proj.sql.title": "Transactional Sales Database",
      "proj.sql.problem": "Demonstrating T-SQL depth beyond simple queries: safe transactional writes, organizational hierarchies and performance tuning.",
      "proj.sql.approach": "A normalized OLTP schema, a transactional stored procedure with row locking and automatic rollback, a recursive CTE for the org chart, and RFM segmentation with window functions.",
      "proj.sql.result": "All business logic automatically validated in CI, including rollback behavior under insufficient stock.",

      "proj.adf.tag": "Cloud &amp; Orchestration",
      "proj.adf.title": "Azure Data Factory Ingestion",
      "proj.adf.problem": "Demonstrating cloud pipeline orchestration in the same format used in production, version-controlled as code.",
      "proj.adf.approach": "An ADF pipeline that pulls the USD/BRL exchange rate from the Central Bank's public API daily and upserts it into Azure SQL. Infrastructure defined in Bicep, with the credential protected in Key Vault via managed identity.",
      "proj.adf.result": "A repository ready to be connected directly to a real Data Factory through Git integration.",

      "proj.streamlit.tag": "Data Analysis",
      "proj.streamlit.title": "Tech Job Market Analysis",
      "proj.streamlit.problem": "An academic dashboard with a hardcoded file path on one teammate's computer, unusable by anyone else.",
      "proj.streamlit.approach": "Rewrote the data loading step with a dynamic upload option, fixed the documentation, and added the missing dependency file.",
      "proj.streamlit.result": "The project now runs for anyone, with interactive filters over the 65k-response Stack Overflow Developer Survey.",

      "proj.other.title": "More on GitHub",
      "proj.other.futebol_mysql": " · CRUD and reports for a football championship in Python and MySQL",
      "proj.other.futebol": " · the same domain migrated to MongoDB, including the migration script",
      "proj.other.barbearia": " · desktop system in C# / .NET for barbershop management",

      "articles.eyebrow": "04 · Articles",
      "articles.lead": "I write about SQL Server and data: here on the portfolio, on the Databasers blog and on LinkedIn.",
      "articles.read": "Read on the Databasers blog &#8594;",
      "articles.readNative": "Read article &#8594;",
      "articles.more": "See more articles on the Databasers blog &#8594;",
      "articles.seeAll": "See all articles &#8594;",
      "articlesPage.eyebrow": "Articles",
      "articlesPage.title": "Everything I've written",
      "articlesPage.lead": "Native portfolio posts and Databasers blog publications, most recent first.",
      "articles.dimensional.date": "09/20/2026",
      "articles.dimensional.read": "7 min read",
      "articles.dimensional.title": "Dimensional modeling in practice: the decisions behind my ETL pipeline",
      "articles.dimensional.excerpt": "Why two fact tables instead of one, why surrogate keys, and what it changes when you build a dashboard that doesn't silently double-count numbers.",
      "articles.varbinary.date": "05/15/2026",
      "articles.varbinary.read": "10 min read",
      "articles.varbinary.title": "Generating files from varbinary columns in SQL Server",
      "articles.varbinary.excerpt": "How to store and serve files (PDFs, images, documents) directly from VARBINARY(MAX) columns, keeping backup, access control and auditing inside the database itself.",
      "articles.pivot.date": "01/07/2026",
      "articles.pivot.read": "15 min read",
      "articles.pivot.title": "PIVOT and UNPIVOT — what they are and how to use them",
      "articles.pivot.excerpt": "Using SQL Server's PIVOT and UNPIVOT operators to turn rows into columns (and back) directly in the query, without a CASE WHEN workaround or extra ETL handling.",

      "contact.eyebrow": "05 · Contact",
      "contact.title": "Let's talk",
      "contact.lead": "Open to Data Analyst and Data Engineer opportunities. Reach out directly by email or LinkedIn.",

      "footer.built": "Cariacica, ES · Brazil"
    }
  };

  var STORAGE_KEY = "vss-portfolio-lang";
  var root = document.documentElement;

  function applyLang(lang) {
    var dict = i18n[lang] || i18n.pt;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });
    root.setAttribute("lang", lang === "en" ? "en" : "pt-BR");
    document.querySelectorAll(".lang-opt").forEach(function (el) {
      el.classList.toggle("is-active", el.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function initLangToggle() {
    var toggles = document.querySelectorAll(".lang-toggle");
    if (!toggles.length) return;
    var current = "pt";
    try { current = localStorage.getItem(STORAGE_KEY) || "pt"; } catch (e) {}
    applyLang(current);
    toggles.forEach(function (toggle) {
      toggle.addEventListener("click", function () {
        current = current === "pt" ? "en" : "pt";
        applyLang(current);
      });
    });
  }

  function initScrollSpy() {
    var links = document.querySelectorAll(".side-nav-link");
    if (!links.length || !("IntersectionObserver" in window)) return;
    var sections = Array.prototype.map.call(links, function (link) {
      return document.getElementById(link.getAttribute("data-section"));
    }).filter(Boolean);

    var setActive = function (id) {
      links.forEach(function (link) {
        link.classList.toggle("is-active", link.getAttribute("data-section") === id);
      });
    };

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach(function (section) { observer.observe(section); });
  }

  function initMobileNav() {
    var burger = document.getElementById("nav-burger");
    var nav = document.getElementById("mobile-nav");
    if (!burger || !nav) return;
    burger.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach(function (el) { observer.observe(el); });
  }

  // Repositorios ja mostrados como cards principais (nao devem se repetir aqui),
  // mais os que nao tem conteudo suficiente pra mostrar (por nome, case-insensitive).
  var FEATURED_REPOS = [
    "olist-etl-powerbi",
    "sql-server-vendas-analytics",
    "azure-adf-ingestao-bcb",
    "pi3-analise-tendencias-ti",
    "prj_ia_reconhecimento_celulas",
  ];
  var HIDDEN_REPOS = [
    "vinnysou.github.io",
    "prj_monitoramento_sono",
    "teste",
    "desktop-tutorial",
  ];

  function renderOtherProjects(list, repos) {
    list.innerHTML = "";
    if (!repos.length) {
      list.remove();
      return;
    }
    repos.forEach(function (repo) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = repo.html_url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = repo.name;
      var span = document.createElement("span");
      span.textContent = " · " + (repo.description || (repo.language || "código") );
      li.appendChild(a);
      li.appendChild(span);
      list.appendChild(li);
    });
  }

  function initOtherProjects() {
    var list = document.getElementById("other-projects-list");
    if (!list) return;
    var user = list.getAttribute("data-github-user");
    if (!user) return;

    fetch("https://api.github.com/users/" + user + "/repos?type=owner&sort=created&direction=desc&per_page=100")
      .then(function (res) {
        if (!res.ok) throw new Error("GitHub API error " + res.status);
        return res.json();
      })
      .then(function (repos) {
        var filtered = repos.filter(function (repo) {
          if (repo.fork) return false;
          var name = repo.name.toLowerCase();
          if (FEATURED_REPOS.indexOf(name) !== -1) return false;
          if (HIDDEN_REPOS.indexOf(name) !== -1) return false;
          return true;
        });
        renderOtherProjects(list, filtered);
      })
      .catch(function () {
        // API indisponivel ou limite de taxa: mantem a lista estatica do HTML.
      });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLangToggle();
    initMobileNav();
    initReveal();
    initScrollSpy();
    initOtherProjects();
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });
})();
