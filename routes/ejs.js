import { Router } from 'express';
import { getEjsHomePage } from '../controllers/ejs.js';

const router = Router();

router.get('/', getEjsHomePage);

export default router;
