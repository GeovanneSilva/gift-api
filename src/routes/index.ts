import { Router } from 'express';
import giftRoute from './gift.routes'

const indexRoute = Router()

indexRoute.use('/', giftRoute)

export default indexRoute;