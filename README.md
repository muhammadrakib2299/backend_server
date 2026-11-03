# Simple CRUD Server

Minimal Node.js + Express backend for [Simple-CRUD-Client](https://github.com/muhammadrakib2299/Simple-CRUD-Client), written while learning how a frontend talks to an Express API and MongoDB Atlas.

## Endpoints

| Method | Path | What it does |
|---|---|---|
| `GET` | `/` | Health message |
| `POST` | `/users` | Receives a user (`name`, `email`, `number`) as JSON and logs it |

On start-up the server connects to MongoDB with the official driver and pings the deployment.

## Built with

Node.js · Express · MongoDB Node driver · CORS · dotenv

## Run locally

```bash
npm install
cp .env.example .env     # set MONGODB_URI to your own Atlas or local connection string
npm run dev              # http://localhost:5000
```

## License

[MIT](LICENSE) © Md. Rakib
