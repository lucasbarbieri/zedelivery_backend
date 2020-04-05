# ZeDelivery Backend Test

Teste de proeficiência para vaga de backend

# Inicialização

Para inicializar o projeto você primeiro instalar as dependências com:

```sh
yarn
```

Logo após inicialize a aplicação com:

```sh
yarn dev
```

Para executar os testes:

```sh
yarn test
```

# Criação de novo parceiro

Para criação de um novo parceiro o endpoint /partners com método POST deve ser utilizado. Conforme o exemplo abaixo:

```javascript
URL: 'http://localhost:3001/partners'
METHOD: POST
PAYLOAD:
{
	"tradingName": "MetroBar - Metro Sé",
	"ownerName": "Joana Teodora Sampaio",
	"document": "08357414000184",
		"coverageArea": {
		"type": "MultiPolygon",
		"coordinates": [
			[
				[
					[30, 20],
					[45, 40],
					[10, 40],
					[30, 20]
				]
			]
		]
	},
	"address": {
		"type": "Point",
		"coordinates": [-23.55039,-46.63423]
	}
}
```

- Foram feitas as validações básicas e apenas algumas sobre o GeoJSON. Uma vez que honestamente eu não tenho experiência com as regras. Com um pouco mais de tempo, seria possível estudar e implementar todas as que fossem necessárias.

# Recuperar parceiro pelo ID

Para recuperar um parceiro o endpoint /partners/:id com método GET. Conforme o exemplo abaixo:

```javascript
URL: "http://localhost:3001/partners/5e8a29bffef3945ecdcad984";
METHOD: GET;
PAYLOAD: {
}
```

# Recuperar parceiro pela busca com LAT/LNG

Para recuperar um parceiro o endpoint /partners?lat=-23.4736669&lng=-46.6150915 com método GET. Conforme o exemplo abaixo:

```javascript
URL: "http://localhost:3001/partners?lat=-23.4736669&lng=-46.6150915";
METHOD: GET;
PAYLOAD: {
}
```
