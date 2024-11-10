import Express from 'express';
import indexRoute from './routes';
import cors from 'cors';

// Initiate express
const app = Express();

app.use(cors({
  origin: '*', // Permite qualquer origem
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Cabeçalhos permitidos
}));

app.use(Express.json());

app.options('*', cors());

// Setup “hello world” endpoint

const port = process.env.PORT || 3000;
app.use(indexRoute, (req, res) => {
  res.set('Access-Control-Allow-Origin', '*'); // Garante que a origem seja permitida
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Garante que os cabeçalhos sejam permitidos
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');})
// Start the express server on the relevant port
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});