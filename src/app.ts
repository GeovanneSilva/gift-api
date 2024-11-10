import Express from 'express';
import indexRoute from './routes';
import cors from 'cors';

// Inicia o Express
const app = Express();

// Configuração do middleware CORS
app.use(cors({
  origin: '*', // Permite qualquer origem
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
  credentials: true // Se você precisar permitir cookies ou autenticação com CORS
}));

app.use(Express.json());

// Use as rotas
app.use(indexRoute);

// Inicia o servidor na porta especificada
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
