# Diretrizes de IA — módulo de documentação da API

Este documento orienta agentes de IA ao criar, revisar ou alterar a página `/doc`, seus arquivos JSON e o mecanismo de descoberta da documentação. Preserve estas regras em qualquer manutenção do módulo.

## Objetivo

A página `/doc` apresenta, pesquisa e filtra a documentação das APIs da Brapci. Todo conteúdo técnico deve vir dos arquivos JSON públicos; não duplique endpoints, parâmetros ou respostas no TypeScript ou no template Angular.

## Arquivos do módulo

- Rota: `src/app/app.routes.ts`, caminho `doc`.
- Componente: `src/app/pages/doc/doc.page.ts`.
- Template: `src/app/pages/doc/doc.page.html`.
- Estilos: `src/app/pages/doc/doc.page.scss`.
- Documentos: arquivos `.json` em `public/docs`.
- Índice gerado: `public/docs/index.json`.
- Gerador do índice: `scripts/generate-api-docs-index.mjs`.
- Acionamento do gerador: scripts `prestart`, `prewatch` e `prebuild` de `package.json`.

## Descoberta dos documentos

O navegador não consegue enumerar diretamente os arquivos de uma pasta estática. A descoberta deve seguir este fluxo:

1. `generate-api-docs-index.mjs` enumera os arquivos `.json` de `public/docs`.
2. O gerador ignora o próprio `index.json`, ordena os nomes e grava `{ "files": [...] }`.
3. A página carrega `/docs/index.json` com `HttpClient`.
4. A página carrega em paralelo todos os documentos listados.
5. Uma falha isolada deve descartar somente o arquivo inválido; se nenhum documento válido restar, exibir erro geral.

Não mantenha manualmente uma lista de documentos dentro de `doc.page.ts`. Ao adicionar um novo JSON, o índice deve ser regenerado automaticamente por `start`, `watch` ou `build`.

## Contratos aceitos

A página mantém compatibilidade com dois formatos.

### Documento com um endpoint

```json
{
  "nome_grupo_api": "Small World",
  "descricao": "Descrição do grupo.",
  "endpoint_api": {
    "metodo": "GET",
    "url": "https://exemplo/api/recurso",
    "endpoint_relativo": "/recurso",
    "content_type_requisicao": null,
    "content_type_resposta": "application/json"
  },
  "precisa_apikey": false,
  "apikey": {
    "obrigatoria": false,
    "descricao": "Não exige APIKEY."
  },
  "variaveis_api": [],
  "exemplo_requisicao": "https://exemplo/api/recurso",
  "resultado_api": {
    "descricao": "Descrição do resultado.",
    "exemplo": {}
  },
  "variaveis_retorno_api": []
}
```

### Documento com múltiplos endpoints

Este é o formato preferencial para grupos novos ou grupos com mais de uma operação.

```json
{
  "nome_grupo_api": "Autenticação",
  "descricao": "Descrição do grupo.",
  "versao_documento": "1.0",
  "observacoes": [],
  "endpoints": [
    {
      "nome": "Consultar sessão",
      "metodo_servico": "checkSession()",
      "endpoint_api": {
        "metodo": "GET",
        "url": "/auth/me",
        "endpoint_relativo": "/auth/me",
        "content_type_requisicao": null,
        "content_type_resposta": "application/json"
      },
      "precisa_apikey": false,
      "autenticacao": "Cookie de sessão.",
      "variaveis_api": [],
      "exemplo_requisicao": "/auth/me",
      "resultado_api": {
        "descricao": "Descrição do resultado.",
        "exemplo": {}
      },
      "variaveis_retorno_api": []
    }
  ]
}
```

O método de normalização do componente deve transformar o formato de endpoint único em um grupo com uma coleção `endpoints`, sem condicionais baseadas no nome do arquivo ou da API.

## Campos dos endpoints

### Metadados

- `nome`: título humano da operação; opcional no formato de endpoint único.
- `metodo_servico`: método do serviço Angular que executa a chamada; opcional.
- `endpoint_api.metodo`: método HTTP.
- `endpoint_api.url`: URL absoluta ou resolvida pela aplicação.
- `endpoint_api.endpoint_relativo`: caminho da API.
- `endpoint_api.content_type_requisicao`: tipo do corpo enviado; pode ser `null`.
- `endpoint_api.content_type_resposta`: tipo esperado da resposta.
- `precisa_apikey`: indicação explícita sobre APIKEY.
- `autenticacao`: cookie, token, sessão ou ausência de autenticação.
- `apikey`: descrição complementar no formato legado de endpoint único.

### Variáveis da API

Cada item de `variaveis_api` pode conter:

- `nome`: nome técnico da variável.
- `local`: `query_string`, `path`, `header` ou `body`.
- `tipo`: tipo esperado.
- `obrigatoria`: se o parâmetro é obrigatório.
- `descricao`: finalidade do parâmetro.
- `exemplo`: valor não sensível de exemplo.

Nunca inclua senhas, tokens, cookies ou APIKEYs reais nos exemplos.

### Resultado e retorno

- `resultado_api.descricao`: explicação do resultado.
- `resultado_api.exemplo`: resposta JSON serializável, incluindo `null` quando não há corpo.
- `variaveis_retorno_api`: lista com `nome`, `tipo` e `descricao` de cada campo retornado.

Não apresente como garantidos campos não confirmados pelo código ou pela API. Para integrações legadas de contrato desconhecido, registre explicitamente que a resposta é repassada sem transformação.

## Carregamento e estado

- Usar `HttpClient`, `forkJoin` e cancelamento com `takeUntilDestroyed`.
- Exibir estado de carregamento enquanto o índice e os documentos são consultados.
- Exibir erro compreensível quando o índice falhar ou nenhum documento válido for carregado.
- Disponibilizar ação para tentar novamente.
- Ao recarregar, limpar o erro anterior.
- Manter os documentos carregados em signals tipados.
- Derivar filtros e contadores com `computed`, sem mutar os dados originais.

## Seletor de grupos e busca

- O select deve conter “Todos os grupos” e uma opção para cada `nome_grupo_api` carregado.
- O valor selecionado deve filtrar o grupo sem recarregar os JSON.
- A busca deve ser local, instantânea e não sensível a maiúsculas ou acentos.
- Pesquisar, no mínimo: nome e descrição do grupo, nome da operação, método do serviço, método HTTP, URL, endpoint relativo, descrição do resultado, nomes e descrições das variáveis de entrada e retorno.
- Aplicar simultaneamente o filtro de grupo e a busca textual.
- Exibir a quantidade de endpoints encontrados em uma região anunciável.
- Disponibilizar botão para limpar os dois filtros.
- Exibir estado vazio quando nenhum endpoint corresponder.

## Conteúdo obrigatório na interface

Para cada grupo e endpoint, apresentar quando disponível:

- Nome e descrição do grupo.
- Nome da operação e método HTTP.
- URL e endpoint relativo.
- Content-Type.
- Exigência de APIKEY.
- Forma de autenticação.
- Método correspondente no serviço Angular.
- Variáveis recebidas.
- Exemplo de requisição.
- Descrição e exemplo do resultado.
- Variáveis retornadas.

## Interface e responsividade

- Seguir os padrões visuais da Brapci e reutilizar Bootstrap quando adequado.
- Posicionar select, busca e ação de limpeza em uma grade responsiva.
- Empilhar os filtros e cartões de metadados em telas pequenas.
- Manter tabelas dentro de `.table-responsive`.
- Evitar rolagem horizontal da página; somente tabelas e blocos de código podem rolar.
- Permitir quebra de URLs e textos técnicos longos.
- Não criar estilos globais para necessidades exclusivas da página.

## Tema escuro

- Usar variáveis globais como `--theme-ink`, `--theme-hint`, `--theme-card-bg` e `--theme-line`.
- Garantir contraste em textos, controles, tabelas, badges, alertas e blocos de código.
- Não usar cores fixas de fundo ou texto que prejudiquem o modo dark.
- Verificar também placeholders, bordas, foco e estados desabilitados.

## Acessibilidade

- Usar um único `h1` e manter a hierarquia de `h2`, `h3` e `h4`.
- Associar labels ao select e ao campo de busca.
- Identificar seções com `aria-labelledby` quando apropriado.
- Incluir `caption` em todas as tabelas.
- Usar `scope="col"` nos cabeçalhos e `scope="row"` nos nomes das variáveis.
- Anunciar carregamento, erro, estado vazio e quantidade de resultados.
- Não comunicar método, obrigatoriedade ou erro somente por cor.
- Manter foco visível e ordem de tabulação lógica.
- Usar `pre` e `code` para exemplos técnicos.

## Inclusão de novos documentos

Ao documentar uma nova API:

1. Criar um arquivo `.json` descritivo em `public/docs`.
2. Usar o formato de múltiplos endpoints quando o grupo tiver mais de uma operação.
3. Manter `nome_grupo_api` único e compreensível para o select.
4. Informar parâmetros, autenticação, APIKEY, resposta e campos retornados com base no código ou em evidência real.
5. Executar o gerador do índice ou um comando que o acione.
6. Não editar `public/docs/index.json` como fonte principal; ele é um artefato gerado.
7. Não criar condicionais específicas para o novo grupo no HTML.

## Verificação obrigatória

Após alterações:

1. Validar todos os documentos com um parser JSON.
2. Executar `node scripts/generate-api-docs-index.mjs` e confirmar que o índice contém todos os documentos, exceto ele próprio.
3. Executar `npm.cmd run build` no Windows.
4. Confirmar que `/doc` compila para navegador e SSR.
5. Testar documento único e documento com múltiplos endpoints.
6. Testar falha do índice, falha isolada de documento e ação de tentar novamente.
7. Testar select, busca com e sem acentos, combinação dos filtros, limpeza e estado sem resultados.
8. Verificar tabelas, URLs e blocos JSON em mobile e desktop.
9. Verificar contraste, legibilidade e foco nos modos claro e dark.
10. Não considerar avisos preexistentes de orçamento como falha, mas registrar novos erros ou avisos causados pelo módulo.
