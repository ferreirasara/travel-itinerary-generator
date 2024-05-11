# Gerador de roteiro de viagem

Essa é uma ferramenta que utiliza a Gemini API para gerar um roteiro de viagem baseado nas cidades as quais o usuário pretende visitar e a quantidade de dias em cada cidade.

## Backend

### Começando

Para rodar a API, vá para a pasta `backend` e siga os comandos a seguir:

1. Crie um arquivo `.env` com as seguintes variáveis:

A variável `PORT` é a porta para acessar a API, e a variável `API_KEY` contém a chave de acesso para a Gemini API.

```env
PORT
API_KEY
```

2. Instale as dependências e inicie a API:

```bash
# Instala as dependências
npm install

# Inicia a API
npm run start:dev
```

## Frontend

O frontedn da ferramente foi desenvolvido utilizando React. Para iniciar a aplicação, navegue até a pasta `frontend` e siga os comandos a seguir:

1. Crie um arquivo `.env` com a seguinte variável:

```env
REACT_APP_API_BASE_URL=http://localhost:port
```

Substitua `port` com a porta na qual sua API está rodando.

2. Instale as dependências e inicie a aplicação:

```bash
# Instala as dependências
npm install

# Inicia a API
npm start
```

# Screenshots

## Tela inicial

![1](https://github.com/ferreirasara/travel-itinerary-generator/assets/42873969/52b4f11a-fd82-4ea9-b3cf-603633c297a1)

## Modal de ajuda

![2](https://github.com/ferreirasara/travel-itinerary-generator/assets/42873969/05dceb8e-2616-44b1-84df-1daf3741922c)

## Formulário preenchido

![3](https://github.com/ferreirasara/travel-itinerary-generator/assets/42873969/4a3a8016-f07d-4415-ac6e-0511fdf778c0)

## Resultado do itinerário

![4](https://github.com/ferreirasara/travel-itinerary-generator/assets/42873969/5e6610d8-c5ee-49ac-b611-b5c074903a84)


# Informações de contato

Para dúvidas ou mais informações, você pode entrar em contato comigo através:

- Email: ferreirasara1501@gmail.com
- LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/ferreirasara1501)
