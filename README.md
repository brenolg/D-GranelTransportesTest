# D-GranelTransportesTest


## Tecnologias utilizadas
- React
- Styled components
- APIs REST
- Javascript
- MSC Architeture
- SQL
- Docker
- Express
- C.R.U.D
- Middlewares
- Node.js

  
## Instalação do projeto localmente

Para instalar e executar o projeto localmente, você precisa ter o Docker instalado na sua máquina. Depois, siga os seguintes passos:

Clone o repositório do GitHub:
```bash
git clone https://github.com/brenolg/D-GranelTransportesTest.git
```
Inicie o SQL com o docker:
```bash
docker container run --name mysqldb -e MYSQL_ROOT_PASSWORD=password -d -p 3306:3306 mysql:5.7
```
Entre no diretorio backend e
instale as dependências usando:
```bash
npm install
```
Alimente o banco de dados com:
```bash
npm run db:reset
```
Inicie o servidor com:
```bash
npm start
```

Entre no diretorio frontend e
instale as dependências usando:
```bash
npm install
```
Inicie o servidor local com o comando
```javascript
 npm run dev
```
Abra o navegador e acesse http://localhost:5173/ para visualizar a página.

