<h1 align="center">
    CODE7 TEST <br />
    Node.js | ReactJS
</h1>

<p align="center">
  <a href="#rocket-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#warning-Pre-requisitos">Pre requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-Como-usar">Como usar</a>
</p>

## :rocket: Tecnologias
Tecnologias utilizadas:

-  [Node.js v14.15][nodejs]
-  [Yarn v1.22][yarn]
-  [Express](https://expressjs.com/)
-  [nodemon](https://github.com/remy/nodemon)
-  [MongoDB](https://mongodb.com)
-  [Mongoose](https://mongoosejs.com/)
-  [ReactJS](https://reactjs.org/)
-  [axios](https://github.com/axios/axios)
-  [Sucrase](https://www.npmjs.com/package/sucrase)
-  [Date-fns](https://date-fns.org/docs/Getting-Started#installation)
-  [Docker](https://www.docker.com/get-started)
-  [VS Code][vc]

## :warning: Pre requisitos

Para rodar a aplicação será necessário levantar o ambiente de desenvolvimento com [Node][nodejs], [ReactJS](https://reactjs.org/) e [Docker](https://www.docker.com/get-started).

<h3>Rodando a aplicação</h3>

<h4>Banco de dados</h4>

	1. Instalar o banco de dados mongo pelo docker: 
		$docker pull mongo
	2. Após baixado a imagem do mongo, iniciar o banco de dados:
		$docker run --name mongodb -p 27017:27017 -d mongo

<h4>Backend</h4>

	Com os recursos instalados
	1. abra o terminal dentro da pasta 'backend' do projeto e 
	execute o comando npm install para carregar os 
	arquivos necessários para a aplicação. 
	2. Após carregar rode o comando "npm run dev" 
	para executar o servidor.

<h4>Frontend</h4>

	Com os recursos instalados
	1. Abra o terminal dentro da pasta 1frontend' do projeto e execute 
	o comando yarn install para carregar os arquivos necessários 
	para a aplicação. 
	2. Após carregar rode o comando "npm start" para executar 
	o servidor.

## :memo: Como usar
	
	A aplicação é um cadastro de dívidas.
	
	Inserindo novas dívidas:
	1. Para inserir uma nova dívida basta preencher o formulário
	e clicar em salvar, isso irá criar um Card na lateral 
	esquerda totalizando todas as contas dessa pessoa e 
	também irá mostrar na tabela todas as contas da pessoa 
	cadastrada.
	
	Visualizando as dívidas de cada usuario:
	1. Para visualizar as dívidas de uma determinada pessoa, 
	basta clicar no card da pessoa que irá carregar as 
	contas na tabela abaixo. A tabela também conta com 
	um botão de exclusão que exclui a conta e atualiza 
	os cards laterais.
	
	Editando contas:
	1. Para editar alguma dívida basta clicar no card do usuário
	na esquerda que irá listar todas as dívidas do mesmo na tabela
	abaixo. Na tabela há 2 botões, um para editar e outro para excluir.
	Ao clicar no editar o sistema irá posicionar os dados no formulário
	e após ser modificado é só clicar em salvar novamente.
	
	Excluindo contas:
	1.Para excluir alguma dívida basta clicar no card do usuário
	na esquerda que irá listar todas as contas do mesmo na tabela
	abaixo. Na tabela há 2 botões, um para editar e outro para excluir.
	Ao clicar no excluir o sistema irá deletar a determinada conta e atualizar
	o totalizador.


Teste densenvolvido por Jefferson Fabrin :wave: [Get in touch!](https://www.linkedin.com/in/jeffersonfabrin/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
