import { Router } from 'express';
import { getHomePage } from '../controllers/home.js';

const router = Router();

router.get('/', getHomePage);

export default router;
