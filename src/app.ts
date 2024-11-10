import Express from 'express';
import indexRoute from './routes';
import cors from 'cors';

// Initiate express
const app = Express();

app.use(cors({
  origin: '*', // Permite requisições de qualquer origem
  methods: 'GET,POST,PUT,DELETE',  // Métodos permitidos
  allowedHeaders: 'Content-Type'   // Cabeçalhos permitidos
}));

app.use(Express.json());

// Setup “hello world” endpoint

const port = process.env.PORT || 3000;
app.use(indexRoute)
// Start the express server on the relevant port
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});