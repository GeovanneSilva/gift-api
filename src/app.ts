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
app.options('*', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.status(200).send();
});
app.use(indexRoute)
// Start the express server on the relevant port
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});