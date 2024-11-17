import Express, {Request, Response} from 'express';
import cors from "cors"
import giftRoute from './routes/gift.routes';

// Initiate express
const app = Express();

app.use(cors())

app.use(Express.json());

// Setup “hello world” endpoint

const port = process.env.PORT || 3001;
app.use(giftRoute)
// Start the express server on the relevant port
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});