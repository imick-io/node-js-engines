import { Router } from 'express';

import {
  getFormPage,
  getHomePage,
  getThanksPage,
  postFormPage
} from '../controllers/rawHtml.js';

const router = Router();

router.get('/', getHomePage);

router.get('/form', getFormPage);

router.get('/thanks', getThanksPage);

router.post('/form', (req, res) => postFormPage);

export default router;
