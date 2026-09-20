<!--
Rascunho de post para o LinkedIn. Não faz parte do site publicado — só uma cópia
de referência. Poste manualmente quando/como quiser (dá pra editar à vontade
antes; um post de LinkedIn tem mais cara de "eu" quanto mais você mexer nele).
-->

Um bug que só aparece quando você procura por ele.

Essa semana voltei a um projeto de Machine Learning que tinha guardado: um
classificador de imagens de células sanguíneas, 99% de acurácia no conjunto de
teste. Número bonito. Em vez de simplesmente exibir o resultado, resolvi reler o
código inteiro como se estivesse revisando o de outra pessoa.

Achei um bug clássico de PyTorch: o split de treino, validação e teste usava três
Subsets apontando para o MESMO dataset por baixo dos panos. Quando eu configurava
o transform da validação, isso sobrescrevia sem eu perceber o transform do
treino também — e a data augmentation que eu tinha montado (rotação,
espelhamento, variação de cor) nunca rodou de verdade.

A boa notícia: não houve vazamento de dado. Treino, validação e teste
continuaram sem sobreposição, então os 99% no teste são reais. A má notícia: o
modelo nunca viu uma imagem "estressada" durante o treino, o que é uma
fragilidade a mais para generalizar fora do notebook.

Corrigi o código e documentei o problema no README, sem inventar um número novo
(não tenho GPU disponível agora para retreinar).

Fica a lição: métrica boa não é sinônimo de metodologia correta. Vale reler o
próprio código de vez em quando como se fosse revisar o de outra pessoa.

Projeto no GitHub: github.com/VinnySou/prj_IA_Reconhecimento_Celulas

#MachineLearning #PyTorch #EngenhariaDeDados #DataScience
