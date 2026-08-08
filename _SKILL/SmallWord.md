# Diretrizes de IA — módulo Small World

Este documento orienta agentes de IA ao criar, revisar ou alterar a página `/small_world` da Brapci. Preserve estas regras em qualquer manutenção do módulo.

## Objetivo

A página permite selecionar dois autores cadastrados e consultar o menor caminho de colaboração entre eles.

## Arquivos do módulo

- Rota: `src/app/app.routes.ts`, caminho `small_world`.
- Componente: `src/app/pages/small-world/small-world.page.ts`.
- Template: `src/app/pages/small-world/small-world.page.html`.
- Estilos: `src/app/pages/small-world/small-world.page.scss`.
- Serviço HTTP: reutilizar `BrapciApiService`; não duplicar a URL-base da API no componente.

## Formulário

- Manter um formulário reativo chamado `contactForm`.
- Manter os controles `author` e `coauthor` como strings contendo os nomes escolhidos.
- Exibir os dois inputs e o botão Buscar em três colunas na versão desktop: autor, coautor e botão.
- Em telas pequenas, empilhar os controles sem provocar rolagem horizontal.
- Não permitir a busca com nomes apenas digitados. Cada valor deve ter sido selecionado no autocomplete.
- Se o usuário editar um campo após selecionar uma sugestão, invalidar imediatamente a seleção anterior.
- Informar claramente o erro quando um dos autores não tiver sido selecionado na lista.

## Autocomplete de autores

- Consultar `https://cip.brapci.inf.br/api/sri/query_author` por meio do endpoint relativo `sri/query_author` do `BrapciApiService`.
- Enviar a consulta no parâmetro `q`.
- Consultar somente quando o texto, sem espaços nas extremidades, tiver mais de 3 caracteres.
- Aplicar debounce e cancelar a requisição anterior quando houver nova digitação.
- O formato esperado da resposta é um array:

```json
[
  {
    "id": "26775",
    "name": "Rene Faustino Gabriel Junior"
  }
]
```

- Renderizar `name` para o usuário e usar `id` como identidade estável da opção.
- Tratar respostas vazias e falhas de rede sem quebrar o formulário.

## Consulta Small World

Ao enviar um formulário válido, consultar o endpoint relativo `tools/dijkstra` com método GET e os parâmetros:

```ts
{
  source: this.contactForm.value.author,
  target: this.contactForm.value.coauthor,
}
```

- Armazenar a resposta na variável pública `data`.
- Limpar o resultado anterior antes de iniciar uma nova consulta.
- Impedir envios repetidos enquanto a consulta estiver em andamento.
- Exibir estados de carregamento e erro de forma compreensível.

## Interface e identidade visual

- Seguir os padrões visuais existentes da Brapci e reutilizar Bootstrap quando adequado.
- Manter suporte ao tema escuro por meio de `:host-context(body.theme-master.theme-dark)`.
- Garantir contraste adequado nos textos, inputs, listas, estados ativos, mensagens e resultados.
- Não inserir estilos globais para resolver necessidades exclusivas desta página.

## Acessibilidade

- Associar cada `label` ao respectivo input.
- Implementar o autocomplete com semântica de combobox/listbox e atributos ARIA coerentes.
- Permitir navegação nas sugestões com setas, seleção com Enter e fechamento com Escape.
- Manter foco visível e ordem de tabulação lógica.
- Anunciar carregamento, erros e resultados com regiões vivas apropriadas.
- Não comunicar estado apenas por cor.
- Manter o botão como `type="submit"` e os itens interativos acessíveis pelo teclado.

## Verificação obrigatória

Após alterações:

1. Executar `npm.cmd run build` no Windows.
2. Confirmar que a rota `/small_world` compila no bundle de navegador e no SSR.
3. Testar consultas com 3 e 4 caracteres, seleção pelo mouse e pelo teclado, edição após seleção, modo dark e largura mobile.
4. Não considerar avisos preexistentes de orçamento de bundle como falha, mas registrar qualquer novo erro ou aviso causado pelo módulo.
