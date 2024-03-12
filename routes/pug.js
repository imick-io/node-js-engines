import { Router } from 'express';
import { getPugHomePage } from '../controllers/pug.js';

const router = Router();

router.get('/', getPugHomePage);

export default router;
