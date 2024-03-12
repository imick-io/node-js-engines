import { Router } from 'express';
import { getHbsHomePage } from '../controllers/hbs.js';

const router = Router();

router.get('/', getHbsHomePage);

export default router;
