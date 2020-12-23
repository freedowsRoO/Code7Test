<h3>Recursos necessários</h3>
	
	• Node 14.15
	• Yarn 1.22
	• ReactJS 17.0.1
	• Docker com mongoDB (docker run --name mongodb -p 27017:27017 -d mongo)

<h3>Bibliotecas utilizadas no Backend</h3>

	• NodeJS
	• Express
	• Sucrase: Para facilitar a sintaxe dos imports do node.
	• Nodemon: Para atualizar automaticamente o servidor conforme alterações no código.
	• Mongoose: Permite a interação com o mongoDB.
	• CORS: Permite o acesso de qualquer aplicação fora do domínio.
	• Axios: Para acessar a API do JSONPlaceHolder.

<h3>Bibliotecas utilizadas no Frontend</h3>

	• ReactJS 
	• Axios: Para acessar a API criada com node.
	• Date-fns para formatação de datas.

<h3>Rodando a aplicação</h3>

<h4>Banco de dados</h4>
	Após instalação do mongo no docker, execute o banco de dados.

<h4>Backend</h4>

	Com os recursos instalados
	1. abra o terminal dentro da pasta do projeto e execute o comando npm -init para carregar os arquivos necessários para a aplicação. 
	2. Após carregar rode o comando "npm run dev" para executar o servidor.

<h4>Frontend</h4>

	Com os recursos instalados
	1. Abra o terminal dentro da pasta do projeto e execute o comando npm -init para carregar os arquivos necessários para a aplicação. 
	2. Após carregar rode o comando "npm start" para executar o servidor.
