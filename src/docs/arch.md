### Arquitetura do Projeto Por Pastas

- - -
<details>
  <summary>Core</summary>

> Core contém serviços abstraídos que será consumido pelo restante da aplicação. 

### Por que fazer isso?
Essa estratégia é usada para previnir que se houver trocas de depêndencias, uma biblioteca descontinuada ou desatualizada, possamos fazer o ajuste sem comprometer toda a aplicação. 

Então por exemplo, podemos falar sobre **localStorage**. Atualmente estamos usando o MMKV, mas se fossemos trocar para outro, tipo Async Storage, sem essa estratégia, teríamos que alterar em cada parte do código que se usa o MMKV. Toda a aplicação seria comprometida. 

Do contrário, é necessário apenas fazer a troca na implementação e manter o contrato da funcionalidade.

### Contrato & Implementação.
No **index.ts** concentra-se a implentação do negócio em questão, enquanto em **interfaces.ts**, criamos o contrato que será consumido na implementação

</details>

- - -
<details>
  <summary>Dls</summary>

> Dls ou "Design Language System" irá conter componentes abstraídos que também serão reutilizados em toda aplicação. A diferença dentre o Core e o Dls, core agrupa serviços e dls, a ui.

### Quando criar algo em Dls?
Quando sua abstração se trata de um serviço, como um storage, ele deverá ficar em core. Mas quando se trata de ui e será utilizado em toda aplicação, dentro de *dls/components*


### Outros arquivos
Dentro de *dls*, você também conseguirá encontrar provider de um determinado caso visual, como por exemplo, tema ou fonte. 

## Uso de algo dentro de Core.
</details>

- - -
<details>
  <summary>Infra</summary>

> Responsável por abstrair a infraestrutura do projeto

### Automações
É um exemplo de automação os hooks com métodos do *react-query*. Nessa seção, é possivel encontrar alguns métodos como **Infinite Query**, **Mutation** e **Query**.

Esses hooks lhe ajudam ao facilitar o processo de fazer alguma requisição. Bastando apenas você chamar o hook e obedecer o contrato estabelecido pelo serviço.

### Conexões & Integração
É um exemplo a pasta de *aws*. Ela contém serviços da AWS e sua configuração como um todo.
Também podemos ver a pasta de *graphql*, contendo esquemas e sua configuração.


> Os providers cumprem o papel de gerenciar e fornecer o serviço para a aplicação.
</details>

- - -
<details>
  <summary>Shared</summary>

> Responsável por tudo que será reutilizado por todo o projeto. Como por exemplo, funções de formatação de dados, funções de validação, constantes, declarações de models, hooks etc.
</details>

- - -
<details>
  <summary>Modules</summary>

> Cada fluxo de telas é tratado como um módulo. Onde cada módulo, possui sua regra de negócio, seus próprios componentes, suas próprias imagens e arquivos e suas telas.
Para compreender melhor, vamos imaginar o fluxo de autênticação. A primeira coisa que o usuário vê quando entra no aplicativo, é uma tela de login. E a apartir dela, ele pode seguir para outras, como por exemplo tela de confirmação de email, tela de registro, tela de recuperação de conta. Todo esse fluxo de autênticação, é considerado um 
módulo. E como um módulo, ele tem suas próprias regras de negócios, como a função que será chamada para logar o usuário, formulário dos inputs, modelos, seus stores etc. 

Então após efetuar a autênticação, o usuário é direcionado para outra tela, onde ali, inicia-se outro fluxo e outro módulo.

### Exemplos de modules
1. account - contendo o fluxo de autênticação
2. profile - contendo o fluxo onde o usuário vê seu perfil e pode realizar algumas coisas, como editar informações, remover informações, ler outras informações etc


### Dentro de um módulo
#### Business
> Toda a parte operacional, funções, formulários, modelos, casos de uso etc.
#### Mobile
> A parte visual, componentes, telas, arquivos de imagens/video e etc.
</details>