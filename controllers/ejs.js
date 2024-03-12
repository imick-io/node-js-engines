import { app } from '../index.js';

export const getEjsHomePage = (req, res) => {
  app.set('view engine', 'ejs');

  res.render('ejs', {
    pageTitle: 'EJS',
    items: [{ title: 'Item 1' }, { title: 'Item 2' }],
    ifReturnsTrue: true,
    ifReturnsFalse: false
  });
};
