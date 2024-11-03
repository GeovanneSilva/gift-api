import { Router } from 'express';
import { getGift, updateGiftDisabled } from '../controllers/gift-controller';

const giftRoute = Router();

giftRoute.get('/gift', getGift)

giftRoute.put('/gift/:id', updateGiftDisabled);


export default giftRoute;