import { Router } from 'express';
import { getGift, updateGiftDisabled, addGuest} from '../controllers/gift-controller';

const giftRoute = Router();

giftRoute.get('/gift', getGift)

giftRoute.put('/gift/:id', updateGiftDisabled);

giftRoute.post('/guests', addGuest);

export default giftRoute;